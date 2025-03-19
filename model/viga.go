package model

type Apoio struct {
	Tipo    string  `json:"tipo"`
	Posicao float64 `json:"posicao"`
}

type Carga struct {
	Tipo        string  `json:"tipo"`
	Intensidade float64 `json:"intensidade"`
	Posicao     float64 `json:"posicao"`
}

type VigaRequest struct {
	Comprimento float64 `json:"comprimento"`
	Apoio       Apoio   `json:"apoio"`
	Carga       Carga   `json:"carga"`
}

type VigaResponse struct {
	Reacao float64 `json:"reacao"`
}
