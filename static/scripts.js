function selecionarApoio(tipo) {
    const botoesApoio = document.querySelectorAll('#apoios button');
    botoesApoio.forEach((botao) => {
        botao.classList.remove('selecionado');
    });

    const botaoSelecionado = Array.from(botoesApoio).find(botao => botao.textContent.toLowerCase() === tipo);
    if (botaoSelecionado) {
        botaoSelecionado.classList.add('selecionado');
    }

    document.getElementById('tipo-apoio').value = tipo;
}

function selecionarCarga(tipo) {
    const botoesCarga = document.querySelectorAll('#cargas button');
    botoesCarga.forEach((botao) => {
        botao.classList.remove('selecionado');
    });

    const botaoSelecionado = Array.from(botoesCarga).find(botao => botao.textContent.toLowerCase() === tipo);
    if (botaoSelecionado) {
        botaoSelecionado.classList.add('selecionado');
    }

    document.getElementById('tipo-carga').value = tipo;
}

function calcular() {
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    
    const tipoApoio = document.getElementById("tipo-apoio").value;
    const posicaoApoio = parseFloat(document.getElementById("posicao-apoio").value);
    
    const tipoCarga = document.getElementById("tipo-carga").value;
    const intensidadeCarga = parseFloat(document.getElementById("intensidade-carga").value);
    const posicaoCarga = parseFloat(document.getElementById("posicao-carga").value);
    
    let reacaoR1 = 0;
    let momentoM1 = 0;

    if (tipoCarga === "pontual") {
        if (tipoApoio === "simples") {
            reacaoR1 = intensidadeCarga * (comprimento - posicaoCarga) / comprimento;
        } else if (tipoApoio === "engastado") {
            reacaoR1 = intensidadeCarga * (comprimento - posicaoCarga) / comprimento;
            momentoM1 = intensidadeCarga * (comprimento - posicaoCarga) * (comprimento - posicaoApoio) / comprimento;
        } else if (tipoApoio === "pivô") {
            reacaoR1 = intensidadeCarga / 2;
        }
    } else if (tipoCarga === "distribuída") {
        const cargaTotal = intensidadeCarga * comprimento;
        reacaoR1 = cargaTotal / 2;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Reação R1: ${reacaoR1.toFixed(2)} kN<br>`;
    
    if (momentoM1 !== 0) {
        resultado.innerHTML += `Momento M1: ${momentoM1.toFixed(2)} kNm<br>`;
    }
}

function calcular() {
    const comprimento = document.getElementById("comprimento").value;
    const tipoApoio = document.getElementById("tipo-apoio").value;
    const posicaoApoio = document.getElementById("posicao-apoio").value;
    const tipoCarga = document.getElementById("tipo-carga").value;
    const intensidadeCarga = document.getElementById("intensidade-carga").value;
    const posicaoCarga = document.getElementById("posicao-carga").value;
    
    const apoios = [[parseFloat(posicaoApoio), tipoApoio]];
    const cargas = [{
        tipo: tipoCarga,
        intensidade: parseFloat(intensidadeCarga),
        posicao: parseFloat(posicaoCarga)
    }];
    
    fetch('/calcular', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `comprimento=${comprimento}&apoios=${JSON.stringify(apoios)}&cargas=${JSON.stringify(cargas)}`
    })
    .then(response => response.json())
    .then(data => {
        // Exibindo as reações nos apoios
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `Reação R1: ${data.reacoes.R1} kN<br>`;
        
        // Caso tiver momento de força, exibe
        if (data.reacoes.M1 !== null) {
            resultado.innerHTML += `Momento M1: ${data.reacoes.M1} kNm<br>`;
        }
    })
    .catch(error => console.error('Erro:', error));
}