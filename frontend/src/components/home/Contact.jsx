import { useState } from 'react'
import { contacts } from '../../data/portfolio.js'
import SectionHead from './SectionHead.jsx'
import styles from './Contact.module.css'

const EMPTY = { name: '', contact: '', task: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    // Бэкенд ещё не подключён: пока просто показываем подтверждение.
    // TODO: отправить POST /api/leads на VITE_API_URL.
    setSent(true)
    setForm(EMPTY)
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead tag="// 05 — связь со мной" title="Напишите, если есть задача" />

        <div className={`${styles.grid} reveal`}>
          <div className={styles.info}>
            <a className={styles.item} href={`mailto:${contacts.email}`}>
              <span className={styles.ico}>✉️</span> {contacts.email}
            </a>
            <a className={styles.item} href={contacts.telegramUrl} target="_blank" rel="noreferrer">
              <span className={styles.ico}>✈️</span> {contacts.telegram}
            </a>
            <a className={styles.item} href={contacts.githubUrl} target="_blank" rel="noreferrer">
              <span className={styles.ico}>🐙</span> {contacts.github}
            </a>
            <div className={styles.item}>
              <span className={styles.ico}>📍</span> {contacts.location}
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
            <button type="submit" className={`btn btn-primary ${styles.submit}`}>
              Отправить заявку →
            </button>
            {sent && <p className={styles.sent}>Заявка отправлена — спасибо! Свяжусь с вами в ближайшее время.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
