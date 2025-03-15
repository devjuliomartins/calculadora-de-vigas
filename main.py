import os
import json
import numpy as np
from flask import Flask, render_template, request, jsonify, send_from_directory

app = Flask(__name__)

def calcular_reacoes(comprimento, tipo_apoio, posicao_apoio, tipo_carga, intensidade_carga, posicao_carga):
    reacao_R1 = 0
    momento_M1 = 0

    if tipo_carga == "pontual":
        if tipo_apoio == "simples":
            reacao_R1 = intensidade_carga * (comprimento - posicao_carga) / comprimento
        elif tipo_apoio == "engastado":
            reacao_R1 = intensidade_carga * (comprimento - posicao_carga) / comprimento
            momento_M1 = intensidade_carga * (comprimento - posicao_carga) * (comprimento - posicao_apoio) / comprimento
        elif tipo_apoio == "pivô":
            reacao_R1 = intensidade_carga / 2
    
    elif tipo_carga == "distribuída":
        carga_total = intensidade_carga * comprimento
        reacao_R1 = carga_total / 2

    return {
        "reacoes": {
            "R1": reacao_R1,
            "M1": momento_M1 if momento_M1 != 0 else None
        }
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    comprimento = float(request.form.get('comprimento'))
    apoios = json.loads(request.form.get('apoios'))
    cargas = json.loads(request.form.get('cargas'))

    tipo_apoio = apoios[0][1]
    posicao_apoio = apoios[0][0]

    tipo_carga = cargas[0]['tipo']
    intensidade_carga = cargas[0]['intensidade']
    posicao_carga = cargas[0]['posicao']

    resultado = calcular_reacoes(comprimento, tipo_apoio, posicao_apoio, tipo_carga, intensidade_carga, posicao_carga)

    return jsonify(resultado)

if __name__ == '__main__':
    app.run(debug=True)
