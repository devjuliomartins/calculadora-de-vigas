from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

def calcular_reacoes(comprimento, tipo_apoio, posicao_apoio, tipo_carga, intensidade_carga, posicao_carga):
    reacao_R1 = 0
    reacao_R2 = 0
    momento_M1 = 0

    if tipo_carga == "pontual":
        if tipo_apoio == "simples":
            reacao_R1 = intensidade_carga * (comprimento - posicao_carga) / comprimento
            reacao_R2 = intensidade_carga * posicao_carga / comprimento

        elif tipo_apoio == "engastado":
            reacao_R1 = intensidade_carga
            momento_M1 = intensidade_carga * (comprimento - posicao_carga)

        elif tipo_apoio == "pivô":
            reacao_R1 = intensidade_carga / 2
            reacao_R2 = intensidade_carga / 2

    elif tipo_carga == "distribuída":
        carga_total = intensidade_carga * comprimento
        reacao_R1 = carga_total / 2
        reacao_R2 = carga_total / 2

    return {
        "reacoes": {
            "R1": round(reacao_R1, 2),
            "R2": round(reacao_R2, 2) if reacao_R2 != 0 else None,
            "M1": round(momento_M1, 2) if momento_M1 != 0 else None
        }
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    try:
        data = request.get_json()

        comprimento = float(data['comprimento'])
        apoios = data['apoios']
        cargas = data['cargas']

        tipo_apoio = apoios[0][1]
        posicao_apoio = apoios[0][0]
        tipo_carga = cargas[0]['tipo']
        intensidade_carga = cargas[0]['intensidade']
        posicao_carga = cargas[0]['posicao']

        resultado = calcular_reacoes(comprimento, tipo_apoio, posicao_apoio, tipo_carga, intensidade_carga, posicao_carga)

        return jsonify(resultado)

    except Exception as e:
        return jsonify({"erro": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
