package main

import (
	"calculadora-de-vigas/app/handler"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	r.Static("/static", "./web/static")

	r.LoadHTMLGlob("web/templates/*")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	r.POST("/viga/calcular", handler.CalcularViga)

	r.Run(":8080")
}
