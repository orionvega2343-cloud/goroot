import { stackGroups } from '../../data/portfolio.js'
import SectionHead from './SectionHead.jsx'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <section className="section alt" id="stack">
      <div className="wrap">
        <SectionHead tag="// 02 — стек" title="Технологии, с которыми работаю">
          Стек выстроен вокруг REST API на Go: от слоя хранения до контейнеризации
          и интеграции с AI-сервисами.
        </SectionHead>

        <div className={`${styles.groups} reveal`}>
          {stackGroups.map((group) => (
            <div className={styles.card} key={group.title}>
              <h4>{group.title}</h4>
              <div className={styles.pills}>
                {group.pills.map((pill) => (
                  <span
                    className={`${styles.pill} ${group.learning ? styles.learning : ''}`}
                    key={pill}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
