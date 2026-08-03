package config

import (
	"log"

	"github.com/ilyakaznacheev/cleanenv"
	"github.com/joho/godotenv"
)

type DB struct {
	Name     string `yaml:"name"`
	Host     string `yaml:"host"`
	Port     string `yaml:"port"`
	User     string `yaml:"user"`
	Password string `env:"password" required:"true"`
}

type Config struct {
	DB *DB `yaml:"db"`
}

func MustLoad() *Config {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	cfg := &Config{}

	err = cleanenv.ReadConfig("config/config.yml", cfg)
	if err != nil {
		log.Fatal("Error loading config")
	}
	return cfg
}
