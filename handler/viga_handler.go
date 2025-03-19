package handler

import (
	"calculadora-de-vigas/model"
	"calculadora-de-vigas/resource"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CalcularViga(c *gin.Context) {
	var req model.VigaRequest

	if err := c.ShouldBind(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	resultado := resource.CalcularReacoes(req)

	c.JSON(http.StatusOK, resultado)
}
