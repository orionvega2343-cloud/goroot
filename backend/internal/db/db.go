package db

import (
	"backend/internal/config"
	"fmt"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func ConnDB(cfg config.Config) (*sqlx.DB, error) {
	connStr := fmt.Sprintf("name: %s, host, %s, port: %d, username: %s, password: %s, ssl_mode: %s", cfg.DB.Name, cfg.DB.Host, cfg.DB.Port, cfg.DB.User, cfg.DB.Password, cfg.DB.SslMode)

	db, err := sqlx.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}
	return db, err
}
