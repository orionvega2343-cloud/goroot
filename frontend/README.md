# goroot_ — Frontend

SPA на **React + Vite**: лендинг-портфолио и личный кабинет клиента.
Перенос статичной вёрстки (`portfolio.html`, `cabinet.html`) в компонентную
архитектуру.

## Стек

- **React 18** + **React Router** (две страницы: лендинг и кабинет)
- **Vite** — dev-сервер и сборка
- **CSS Modules** — стили инкапсулированы по компонентам
- Глобальные дизайн-токены (CSS-переменные) в `src/styles/variables.css`

## Запуск

```bash
npm install
npm run dev      # дев-сервер на http://localhost:5173
npm run build    # прод-сборка в dist/
npm run preview  # предпросмотр прод-сборки
npm run lint     # ESLint
```

Перед запуском можно скопировать переменные окружения:

```bash
cp .env.example .env
```

## Маршруты

| Путь          | Страница            | Компонент              |
|---------------|---------------------|------------------------|
| `/`           | Лендинг-портфолио   | `pages/Home.jsx`       |
| `/cabinet`    | Личный кабинет      | `pages/Cabinet.jsx`    |

## Структура

```
frontend/
├── index.html
├── vite.config.js
├── eslint.config.js
├── .env.example
└── src/
    ├── main.jsx                 # точка входа, роутер
    ├── App.jsx                  # описание маршрутов
    ├── styles/
    │   ├── variables.css        # дизайн-токены (цвета, радиусы)
    │   └── global.css           # базовые стили, reset, утилиты
    ├── hooks/
    │   └── useReveal.js         # scroll-reveal через IntersectionObserver
    ├── data/
    │   ├── portfolio.js         # данные лендинга (стек, проекты)
    │   └── cabinet.js           # демо-данные кабинета (заказы, сообщения)
    ├── pages/
    │   ├── Home.jsx             # сборка секций лендинга
    │   └── Cabinet.jsx          # каркас кабинета + переключение вкладок
    └── components/
        ├── layout/              # Header, Footer
        ├── home/                # Hero, About, Stack, Portfolio, Order, Contact, FlipCard
        └── cabinet/             # TopBar, Sidebar, Dashboard, Orders, Messages, Profile
```

## Данные и бэкенд

Сейчас кабинет работает на демо-данных из `src/data/`. Когда бэкенд
(см. [`../backend`](../backend)) будет готов, эти модули заменяются на вызовы
API по адресу из `VITE_API_URL`.
