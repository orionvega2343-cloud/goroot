import { contacts } from '../../data/portfolio.js'
import SectionHead from './SectionHead.jsx'
import styles from './About.module.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead tag="// 01 — обо мне" title="Из практики, а не с курсов" />

        <div className={`${styles.card} reveal`}>
          <div className={styles.avatar}>АС</div>
          <div>
            <h3 className={styles.name}>Соколов Артём</h3>
            <p className={styles.bio}>
              Backend-разработчик на Go. Проектирую сервисы со слоистой архитектурой
              (handlers / service / repository), выношу бизнес-логику из транспорта и
              покрываю её unit-тестами с моками. Строю микросервисы на REST и gRPC,
              работаю с PostgreSQL и Redis, конкурентность — на goroutines и каналах.
              Ищу первую коммерческую позицию Junior Go Developer.
            </p>
            <div className={styles.meta}>
              <span>📍 Москва</span>
              <span>✈️ {contacts.telegram}</span>
              <span>✉️ {contacts.email}</span>
              <span>🐙 {contacts.github}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
