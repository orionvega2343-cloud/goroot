package notifier

import (
	"backend/internal/models"
	"context"
	"fmt"
	"log"
	"os"
	"strconv"

	tele "gopkg.in/telebot.v3"
)

type Notifier interface {
	Notify(ctx context.Context, m models.Application) error
}
type NotifierImpl struct {
	bot *tele.Bot
}

func NewNotifier(bot *tele.Bot) *NotifierImpl {
	return &NotifierImpl{bot: bot}
}

func (n *NotifierImpl) Notify(ctx context.Context, m models.Application) error {
	msg := fmt.Sprintf("Новая заявка от: \n Имя: %s,\n Контакт: %s,\n Описание: %s \n", m.Name, m.Contact, m.Text)
	envId := os.Getenv("USER_ID")

	userId, err := strconv.Atoi(envId)
	if err != nil {
		log.Println(err)
		return err
	}
	_, err = n.bot.Send(tele.ChatID(userId), msg)
	if err != nil {
		log.Println("Ошибка отправки:", err)
		return err
	}
	return nil
}
