// Демо-данные кабинета. Заменяются вызовами API после готовности бэкенда.

export const user = {
  name: 'Клиент',
  email: 'demo@example.com',
  telegram: '@demo_user',
  initials: 'КЛ',
}

export const navItems = [
  { view: 'dashboard', icon: '▦', label: 'Дашборд' },
  { view: 'orders', icon: '▤', label: 'Мои заказы' },
  { view: 'messages', icon: '✉', label: 'Сообщения' },
  { view: 'profile', icon: '◍', label: 'Профиль' },
]

export const stats = [
  { num: 2, label: 'активных заказа' },
  { num: 1, label: 'на согласовании' },
  { num: 5, label: 'завершено' },
  { num: 3, label: 'новых сообщения' },
]

export const currentProject = {
  title: 'REST API для CRM',
  timeline: [
    { title: 'Заявка принята', date: '12 июня', done: true },
    { title: 'Архитектура согласована', date: '15 июня', done: true },
    { title: 'Разработка эндпоинтов', date: 'в процессе', done: false },
    { title: 'Тестирование и сдача', date: 'ожидается', done: false },
  ],
}

export const orders = [
  { id: 'ORD-1042', title: 'REST API для CRM', status: 'progress', statusLabel: 'в работе' },
  {
    id: 'ORD-1038',
    title: 'Telegram-бот «Напоминалка»',
    status: 'review',
    statusLabel: 'на согласовании',
  },
  {
    id: 'ORD-0996',
    title: 'Полный бэкенд интернет-магазина',
    status: 'done',
    statusLabel: 'завершено',
  },
  {
    id: 'ORD-0981',
    title: 'REST API для мобильного приложения',
    status: 'done',
    statusLabel: 'завершено',
  },
]

export const messages = [
  {
    text: 'Готов прислать промежуточный билд по REST API сегодня вечером.',
    meta: 'сегодня, 14:02',
  },
  { text: 'Принял правки по схеме базы данных, обновлю миграции.', meta: 'вчера, 19:40' },
  { text: 'Бот развёрнут на тестовом сервере, можно проверять.', meta: '3 дня назад' },
]
