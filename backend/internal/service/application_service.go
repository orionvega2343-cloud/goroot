package service

import (
	"backend/internal/models"
	"backend/internal/notifier"
	"backend/internal/repository"
	"context"
	"log"
)

type ApplicationService interface {
	CreateApplication(ctx context.Context, m models.Application) (models.Application, error)
}

type ApplicationServiceImpl struct {
	repo repository.ApplicationRepo
	not  notifier.Notifier
}

func NewApplicationService(repo repository.ApplicationRepo, not notifier.Notifier) *ApplicationServiceImpl {
	return &ApplicationServiceImpl{repo: repo, not: not}
}

func (s *ApplicationServiceImpl) CreateApplication(ctx context.Context, m models.Application) (models.Application, error) {
	application, err := s.repo.CreateApplication(ctx, m)
	if err != nil {
		return models.Application{}, err
	}
	err = s.not.Notify(ctx, m)
	if err != nil {
		log.Println(err)
	}

	return application, nil
}
