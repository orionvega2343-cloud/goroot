import { useState } from 'react'
import styles from './Portfolio.module.css'

export default function FlipCard({ project }) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((v) => !v)
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className={`${styles.flipCard} ${flipped ? styles.flipped : ''}`}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className={styles.flipInner}>
        <div className={`${styles.flipFace} ${styles.flipFront}`}>
          <span className={styles.projTag}>{project.tag}</span>
          <div>
            <h3>{project.title}</h3>
            {project.subtitle && <p className={styles.projSubtitle}>{project.subtitle}</p>}
          </div>
          <span className={styles.hint}>нажмите, чтобы посмотреть детали ↻</span>
        </div>

        <div className={`${styles.flipFace} ${styles.flipBack}`}>
          <h4>{project.title}</h4>
          {project.stackLine && <p className={styles.stackLine}>{project.stackLine}</p>}
          <ul>
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          {project.repo ? (
            <span className={styles.repoLink}>🔗 {project.repo}</span>
          ) : (
            <span className={styles.repoLink}>
              {project.inProgress ? '🚧 в разработке' : '🔒 закрытый репозиторий'}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}