package models

type Application struct {
	Id      int    `json:"id"`
	Name    string `db:"name" json:"name"`
	Contact string `db:"contact" json:"contact"`
	Text    string `db:"text" json:"text"`
}
