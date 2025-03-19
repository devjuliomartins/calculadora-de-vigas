package main

import (
	"calculadora-de-vigas/handler"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Static("/static", "./static")

	r.LoadHTMLGlob("templates/*")
	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	r.POST("/viga/calcular", handler.CalcularViga)

	r.Run(":8080")
}
