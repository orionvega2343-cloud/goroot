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
    tag: 'AI-БРОКЕР МИКРОСЕРВИС',
    title: 'AiGateway',
    subtitle: 'Брокер-микросервис для AI-обогащения событий',
    stackLine: 'Go, Gin, gRPC, PostgreSQL, Redis, Docker',
    details: [
      'Спроектировал брокер: Producer отправляет события по REST, сервис обогащает их через AI API, Consumer получает результат по gRPC — стороны не знают друг о друге',
      'Транспортные слои REST и gRPC — тонкие адаптеры над общим ядром internal/',
      'Переиспользовал паттерны: Redis-дедупликация, fan-in / fan-out pipeline, graceful shutdown',
    ],
    repo: null,
  },
  {
    tag: 'TELEGRAM-БОТ + VPN + ОПЛАТА',
    title: 'NorthlaneVPN',
    subtitle: 'Telegram-бот для продажи VPN-подписок',
    stackLine: 'Go, PostgreSQL, sqlx, Redis, telebot.v3, Xray-core (VLESS + Reality), Docker',
    details: [
      'Слоистая архитектура Repository → Service → Handler с доменными сущностями User, Subscription, Tariff, Payment, Server, Referral',
      'Генерирую subscription-ссылки VLESS + Reality через Xray-core, совместимые с Happ / v2rayNG / NekoBox',
      'Асинхронный поллинг статуса платежей фоновыми горутинами (time.Ticker + context.WithTimeout), без блокировки основного потока',
      'TCP health-check серверов через net.DialTimeout при добавлении в пул; рассылка уведомлений об истекающих подписках с изоляцией ошибок по получателям',
      'Реферальная система защищена от повторного начисления бонусов unique-constraint и проверкой на уровне сервиса',
    ],
    repo: null,
  },
]

export const orderPlans = [
  {
    title: 'REST API',
    price: 'от 15 000 ₽',
    features: ['Эндпоинты под вашу логику', 'Слоистая архитектура', 'Базовые тесты'],
    featured: false,
    ribbon: 'выгодная цена',
  },
  {
    title: 'Полный бэкенд',
    price: 'от 45 000 ₽',
    features: ['API + БД + миграции', 'JWT-авторизация', 'Docker для деплоя', 'Unit-тесты'],
    featured: true,
    ribbon: 'популярно',
  },
  {
    title: 'Telegram-бот под ключ',
    price: 'от 30 000 ₽',
    features: ['Бот + собственный backend', 'Интеграция с вашим API или AI', 'Контейнеризация'],
    featured: false,
  },
]
