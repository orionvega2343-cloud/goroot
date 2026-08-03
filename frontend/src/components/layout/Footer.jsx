import { contacts } from '../../data/portfolio.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>goroot_</div>
            <p className={styles.tagline}>Junior Go Developer, открыт к предложениям</p>
          </div>

          <div className={styles.links}>
            <div className={styles.col}>
              <h5>Навигация</h5>
              <a href="#about">Обо мне</a>
              <a href="#stack">Стек</a>
              <a href="#portfolio">Портфолио</a>
            </div>
            <div className={styles.col}>
              <h5>Сервис</h5>
              <a href="#order">Оформить заказ</a>
              <a href="#contact">Связь со мной</a>
            </div>
            <div className={styles.col}>
              <h5>Контакты</h5>
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              <a href={contacts.telegramUrl}>{contacts.telegram}</a>
              <a href={contacts.githubUrl}>GitHub</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Все права защищены</span>
          <span>Москва · Go developer</span>
        </div>
      </div>
    </footer>
  )
}
