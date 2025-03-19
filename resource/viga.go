package resource

import "calculadora-de-vigas/model"

func CalcularReacoes(req model.VigaRequest) model.VigaResponse {
	var reacao float64

	if req.Carga.Tipo == "pontual" {
		reacao = req.Carga.Intensidade * (req.Comprimento - req.Carga.Posicao) / req.Comprimento
	} else if req.Carga.Tipo == "distribuída" {
		reacao = req.Carga.Intensidade * req.Comprimento / 2
	}

	return model.VigaResponse{Reacao: reacao}
}
