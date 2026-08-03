package main

import (
	"backend/internal/config"
	"backend/internal/db"
	"backend/internal/handler"
	"backend/internal/notifier"
	"backend/internal/repository"
	"backend/internal/service"
	"log"
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

	r.POST("/application", hndlr.PostApplication)
	r.Run(":8080")
}
