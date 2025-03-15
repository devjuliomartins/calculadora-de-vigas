function selecionarApoio(tipo) {
    document.querySelectorAll('#apoios button').forEach(botao => botao.classList.remove('selecionado'));
    const botaoSelecionado = [...document.querySelectorAll('#apoios button')].find(botao => botao.textContent.toLowerCase() === tipo);
    if (botaoSelecionado) botaoSelecionado.classList.add('selecionado');
    document.getElementById('tipo-apoio').value = tipo;
}

function selecionarCarga(tipo) {
    document.querySelectorAll('#cargas button').forEach(botao => botao.classList.remove('selecionado'));
    const botaoSelecionado = [...document.querySelectorAll('#cargas button')].find(botao => botao.textContent.toLowerCase() === tipo);
    if (botaoSelecionado) botaoSelecionado.classList.add('selecionado');
    document.getElementById('tipo-carga').value = tipo;
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            comprimento: parseFloat(comprimento),
            apoios: apoios,
            cargas: cargas
        })
    })
    .then(response => response.json())
    .then(data => {
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `Reação R1: ${data.reacoes.R1} kN<br>`;
        if (data.reacoes.R2 !== null) resultado.innerHTML += `Reação R2: ${data.reacoes.R2} kN<br>`;
        if (data.reacoes.M1 !== null) resultado.innerHTML += `Momento M1: ${data.reacoes.M1} kNm<br>`;
    })
    .catch(error => console.error('Erro:', error));
}
