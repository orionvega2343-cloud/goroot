package notifier

import (
	"backend/internal/models"
	"fmt"
	"log"
	"os"
	"strconv"

	tele "gopkg.in/telebot.v3"
)

type Notifier struct {
	bot *tele.Bot
}

func NewNotifier(bot *tele.Bot) *Notifier {
	return &Notifier{bot: bot}
}

func (n *Notifier) Notifier(m models.Application) {
	msg := fmt.Sprintf("Новая заявка от: \n Имя: %s,\n Контакт: %s,\n Описание: %s \n", m.Name, m.Contact, m.Text)
	envId := os.Getenv("USER_ID")

	userId, err := strconv.Atoi(envId)
	if err != nil {
		log.Println(err)
	}
	_, err = n.bot.Send(tele.ChatID(userId), msg)
	if err != nil {
		log.Println("Ошибка отправки:", err)
	}
}
