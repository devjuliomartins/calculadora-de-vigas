function selecionarApoio(tipo) {
    document.getElementById("tipo-apoio").value = tipo;

    const botoesApoio = document.querySelectorAll('#apoios button');
    botoesApoio.forEach(button => button.classList.remove('selecionado'));
    document.querySelector(`#apoios button[onclick="selecionarApoio('${tipo}')"]`).classList.add('selecionado');
}

function selecionarCarga(tipo) {
    document.getElementById("tipo-carga").value = tipo;

    const botoesCarga = document.querySelectorAll('#cargas button');
    botoesCarga.forEach(button => button.classList.remove('selecionado'));
    document.querySelector(`#cargas button[onclick="selecionarCarga('${tipo}')"]`).classList.add('selecionado');
}

function calcular() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const tipoApoio = document.getElementById('tipo-apoio').value;
    const posicaoApoio = parseFloat(document.getElementById('posicao-apoio').value);
    const tipoCarga = document.getElementById('tipo-carga').value;
    const intensidadeCarga = parseFloat(document.getElementById('intensidade-carga').value);
    const posicaoCarga = parseFloat(document.getElementById('posicao-carga').value);

    const requestData = {
        comprimento: comprimento,
        apoio: {
            tipo: tipoApoio,
            posicao: posicaoApoio
        },
        carga: {
            tipo: tipoCarga,
            intensidade: intensidadeCarga,
            posicao: posicaoCarga
        }
    };

    fetch('/viga/calcular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerText = `Reação no Apoio: ${data.reacao.toFixed(2)} kN`;
        })
        .catch(error => {
            console.error('Erro ao calcular:', error);
            document.getElementById('resultado').innerText = "Erro no cálculo!";
        });
}