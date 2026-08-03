# goroot_

Монорепозиторий проекта **goroot_** — портфолио Junior Go Developer с личным
кабинетом клиента.

Репозиторий разбит на две независимые части:

| Папка        | Назначение                                   | Стек                | Статус |
|--------------|----------------------------------------------|---------------------|--------|
| [`frontend/`](./frontend) | SPA: лендинг-портфолио + кабинет | React + Vite        | готов  |
| [`backend/`](./backend)   | REST API для кабинета и заявок   | Go (пишется отдельно)| scaffold |

## Структура

```
goroot/
├── frontend/   # React + Vite приложение (этот слой реализован)
└── backend/    # Go-бэкенд (каркас + README, реализуется вручную)
```

## Быстрый старт (frontend)

```bash
cd frontend
npm install
npm run dev
```

Подробности — в [`frontend/README.md`](./frontend/README.md) и
[`backend/README.md`](./backend/README.md).

## Ветки

`main` защищена. Вся разработка идёт в feature-ветках и попадает в `main`
через Pull Request.
