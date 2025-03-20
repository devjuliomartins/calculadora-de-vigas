package main

import (
	"calculadora-de-vigas/api/app/handler"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	r.Static("/api/web/static", "./api/web/static")

	r.LoadHTMLGlob("api/web/templates/*")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	r.POST("/viga/calcular", handler.CalcularViga)

	r.Run(":8080")
}
