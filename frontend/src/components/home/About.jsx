import { contacts } from '../../data/portfolio.js'
import SectionHead from './SectionHead.jsx'
import styles from './About.module.css'
import avatarPhoto from '../../assets/photo_2026-07-30_21-16-02.jpg'
import locationIcon from '../../assets/free-icon-placeholder-filled-point-58960.png'
import telegramIcon from '../../assets/free-icon-telegram-2111646.png'
import emailIcon from '../../assets/free-icon-at-symbol-74642.png'
import githubIcon from '../../assets/free-icon-github-logo-25231.png'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead tag="// 01 — обо мне" title="Из практики, а не с курсов" />

        <div className={`${styles.card} reveal`}>
          <img className={styles.avatar} src={avatarPhoto} alt="Артём" />
          <div>
            <h3 className={styles.name}>Артём</h3>
            <p className={styles.bio}>
              Backend-разработчик на Go. Проектирую сервисы со слоистой архитектурой
              (handlers / service / repository), выношу бизнес-логику из транспорта и
              покрываю её unit-тестами с моками. Строю микросервисы на REST и gRPC,
              работаю с PostgreSQL и Redis, конкурентность — на goroutines и каналах.
              Ищу первую коммерческую позицию Junior Go Developer.
            </p>
            <div className={styles.meta}>
              <span><img src={locationIcon} alt="" className={styles.metaIcon} /> Москва</span>
              <span><img src={telegramIcon} alt="" className={styles.metaIcon} /> {contacts.telegram}</span>
              <span><img src={emailIcon} alt="" className={styles.metaIcon} /> {contacts.email}</span>
              <span><img src={githubIcon} alt="" className={styles.metaIcon} /> {contacts.github}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
