package main

import (
	"backend/internal/config"
	"backend/internal/db"
	"backend/internal/handler"
	"backend/internal/notifier"
	"backend/internal/repository"
	"backend/internal/service"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	tele "gopkg.in/telebot.v3"
)

func main() {
	//Загрузка конфига
	cfg := config.MustLoad()

	//Покдлючение БД
	database, err := db.ConnDB(*cfg)
	if err != nil {
		panic(err)
	}

	pref := tele.Settings{
		Token: os.Getenv("BOT_TOKEN"),
	}
	b, err := tele.NewBot(pref)
	if err != nil {
		log.Fatal(err)
	}

	not := notifier.NewNotifier(b)
	repo := repository.NewApplicationRepo(database)
	svc := service.NewApplicationService(repo, not)
	hndlr := handler.NewApplicationHandler(svc)

	//Роутер
	r := gin.New()

	// CORS: фронтенд (localhost:5173) и бэкенд (localhost:8080) — разные origin для браузера
	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "http://localhost:5173")
		c.Header("Access-Control-Allow-Methods", "POST, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Content-Type")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	})

	r.POST("/application", hndlr.PostApplication)
	// Явный маршрут для preflight-запроса браузера (OPTIONS) —
	// без него Gin отдаёт 404 без CORS-заголовков, и браузер блокирует POST.
	r.OPTIONS("/application", func(c *gin.Context) {
		c.Status(http.StatusNoContent)
	})
	r.Run(":8080")
}
