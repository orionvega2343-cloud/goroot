// Данные лендинга. Вынесены отдельно, чтобы разметка оставалась чистой.

export const navLinks = [
  { href: '#about', label: 'обо мне' },
  { href: '#stack', label: 'стек' },
  { href: '#portfolio', label: 'портфолио' },
  { href: '#order', label: 'заказать' },
  { href: '#contact', label: 'связь' },
]

export const contacts = {
  email: 'ao0004@mail.ru',
  telegram: '@weobo',
  telegramUrl: 'https://t.me/weobo',
  github: 'github.com/orionvega2343-cloud',
  githubUrl: 'https://github.com/orionvega2343-cloud',
  location: 'Москва, удалённо по РФ',
}

export const stackGroups = [
  {
    title: 'Языки',
    pills: ['Go', 'net/http', 'Gin', 'telebot', 'стандартная библиотека'],
  },
  {
    title: 'Базы данных',
    pills: ['PostgreSQL', 'Redis', 'sqlx', 'миграции', 'SQL — JOIN', 'транзакции'],
  },
  {
    title: 'API',
    pills: ['REST', 'gRPC'],
  },
  {
    title: 'Архитектура и паттерны',
    pills: ['слоистая архитектура', 'Repository', 'Middleware', 'Dependency Injection'],
  },
  {
    title: 'Конкурентность',
    pills: ['goroutines', 'channels', 'worker pool', 'fan-in / fan-out', 'graceful shutdown'],
  },
  {
    title: 'Тестирование',
    pills: ['unit-тесты с моками', 'изоляция слоёв'],
  },
  {
    title: 'Инфраструктура',
    pills: ['Docker', 'docker-compose', 'Git Flow'],
  },
  {
    title: 'Интеграции',
    pills: ['OpenAI API', 'Gemini API'],
  },
]

export const projects = [
  {
    tag: 'МИКРОСЕРВИСНЫЙ BACKEND',
    title: 'FlowMoney',
    subtitle: 'Backend для учёта финансов',
    stackLine: 'Go, PostgreSQL, sqlx, JWT, Docker',
    details: [
      'Разделил приложение на два независимых сервиса: api (HTTP backend) и bot',
      'Вынес аутентификацию и обработку ошибок в middleware — хендлеры остаются чистыми',
      'Покрыл service и handlers unit-тестами с моками репозитория — без обращений к реальной БД',
      'Реализовал REST API с JWT и миграциями БД, подключение к PostgreSQL через sqlx',
      'Настроил docker-compose для сборки и локального запуска со всеми зависимостями',
    ],
    repo: 'github.com/orionvega2343-cloud/flowmoney',
  },
  {
    tag: 'КОНКУРЕНТНЫЙ МОНИТОРИНГ',
    title: 'VacancyMonitor',
    subtitle: 'Мониторинг вакансий hh.ru с уведомлениями в Telegram',
    stackLine: 'Go, goroutines, channels, Redis, telebot, cleanenv, Docker',
    details: [
      'Построил worker pool (dispatcher + processor): вакансии передаются через общий канал в обработчик',
      'Реализовал дедупликацию и rate limiting на Redis (SAdd, INCR / EXPIRE)',
      'Добавил graceful shutdown; ошибки логируются без остановки цикла мониторинга',
    ],
    repo: 'github.com/orionvega2343-cloud/VacancyMonitor',
  },
  {
    tag: 'REST API + AI',
    title: 'Insightly',
    subtitle: 'REST API для AI-анализа CSV',
    stackLine: 'Go, Gin, PostgreSQL, Redis, JWT, OpenAI, Docker',
    details: [
      'Реализовал приём CSV и анализ данных через OpenAI с выдачей результата по REST',
      'Построил слоистую архитектуру handlers → services → repositories',
      'Написал 22 unit-теста с ручными моками; изолировал слои при тестировании',
      'Добавил JWT-аутентификацию, rate limiting на Redis, контейнеризацию через Docker',
    ],
    repo: null,
  },
  {
    tag: 'В РАЗРАБОТКЕ',
    title: 'AiGateway',
    subtitle: 'Брокер-микросервис для AI-обогащения событий',
    stackLine: 'Go, Gin, gRPC, PostgreSQL, Redis, Docker',
    details: [
      'Проектирую брокер: Producer отправляет события по REST, сервис обогащает их через AI API, Consumer получает результат по gRPC — стороны не знают друг о друге',
      'Транспортные слои REST и gRPC — тонкие адаптеры над общим ядром internal/',
      'Переиспользую паттерны: Redis-дедупликация, fan-in / fan-out pipeline, graceful shutdown',
    ],
    repo: null,
    inProgress: true,
  },
]

export const orderPlans = [
  {
    title: 'REST API',
    price: 'от ___ ₽',
    features: ['Эндпоинты под вашу логику', 'Слоистая архитектура', 'Базовые тесты'],
    featured: false,
  },
  {
    title: 'Полный бэкенд',
    price: 'от ___ ₽',
    features: ['API + БД + миграции', 'JWT-авторизация', 'Docker для деплоя', 'Unit-тесты'],
    featured: true,
    ribbon: 'популярно',
  },
  {
    title: 'Telegram-бот под ключ',
    price: 'от ___ ₽',
    features: ['Бот + собственный backend', 'Интеграция с вашим API или AI', 'Контейнеризация'],
    featured: false,
  },
]
