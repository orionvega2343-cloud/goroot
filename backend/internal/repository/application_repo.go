package repository

import (
	"backend/internal/models"
	"context"

	"github.com/jmoiron/sqlx"
)

type ApplicationRepo interface {
	CreateApplication(ctx context.Context, m models.Application) (models.Application, error)
}

type ApplicationRepoImpl struct {
	db *sqlx.DB
}

func NewApplicationRepo(db *sqlx.DB) *ApplicationRepoImpl {
	return &ApplicationRepoImpl{db: db}
}

func (r *ApplicationRepoImpl) CreateApplication(ctx context.Context, m models.Application) (models.Application, error) {
	err := r.db.GetContext(ctx, &m, `INSERT INTO form(name, contact, text) VALUES ($1, $2, $3) RETURNING id`, m.Name, m.Contact, m.Text)
	if err != nil {
		return models.Application{}, err
	}
	return m, nil
}
