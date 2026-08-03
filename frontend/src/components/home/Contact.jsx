import { useState } from 'react'
import { contacts } from '../../data/portfolio.js'
import SectionHead from './SectionHead.jsx'
import styles from './Contact.module.css'
import emailIcon from '../../assets/free-icon-at-symbol-74642.png'
import telegramIcon from '../../assets/free-icon-telegram-2111646.png'
import githubIcon from '../../assets/free-icon-github-logo-25231.png'
import locationIcon from '../../assets/free-icon-placeholder-filled-point-58960.png'

const EMPTY = { name: '', contact: '', task: '' }

// Базовый адрес Go-бэкенда, берётся из frontend/.env (VITE_API_URL)
const API_URL = import.meta.env.VITE_API_URL

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const update = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    setSending(true)

    try {
      // POST /application — единственный эндпоинт бэкенда (backend/cmd/main.go).
      // Модель backend/internal/models/application.go ждёт поля name/contact/text,
      // поэтому поле формы "task" маппится в "text".
      const res = await fetch(`${API_URL}/application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          text: form.task,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `Ошибка запроса: ${res.status}`)
      }

      // Бэкенд возвращает созданную заявку с id (models.Application), но фронту
      // для формы подтверждения тело ответа не нужно.
      setSent(true)
      setForm(EMPTY)
    } catch (err) {
      setError(err.message || 'Не удалось отправить заявку. Попробуйте позже.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead tag="// 05 — связь со мной" title="Напишите, если есть задача" />

        <div className={`${styles.grid} reveal`}>
          <div className={styles.info}>
            <a className={styles.item} href={`mailto:${contacts.email}`}>
              <span className={styles.ico}><img src={emailIcon} alt="" className={styles.icoImg} /></span> {contacts.email}
            </a>
            <a className={styles.item} href={contacts.telegramUrl} target="_blank" rel="noreferrer">
              <span className={styles.ico}><img src={telegramIcon} alt="" className={styles.icoImg} /></span> {contacts.telegram}
            </a>
            <a className={styles.item} href={contacts.githubUrl} target="_blank" rel="noreferrer">
              <span className={styles.ico}><img src={githubIcon} alt="" className={styles.icoImg} /></span> {contacts.github}
            </a>
            <div className={styles.item}>
              <span className={styles.ico}><img src={locationIcon} alt="" className={styles.icoImg} /></span> {contacts.location}
            </div>
          </div>

          <form className={styles.form} onSubmit={submit}>
            <div className={styles.field}>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                placeholder="Как к вам обращаться"
                value={form.name}
                onChange={update}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact">Telegram или e-mail</label>
              <input
                type="text"
                id="contact"
                placeholder="@username или почта"
                value={form.contact}
                onChange={update}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="task">Что нужно сделать</label>
              <textarea
                id="task"
                placeholder="Коротко опишите задачу или продукт"
                value={form.task}
                onChange={update}
              />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={sending}>
              {sending ? 'Отправка...' : 'Отправить заявку →'}
            </button>
            {error && <p className={styles.error}>{error}</p>}
            {sent && <p className={styles.sent}>Заявка отправлена — спасибо! Свяжусь с вами в ближайшее время.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
