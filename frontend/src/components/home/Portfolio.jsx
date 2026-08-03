import { projects } from '../../data/portfolio.js'
import SectionHead from './SectionHead.jsx'
import FlipCard from './FlipCard.jsx'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <SectionHead tag="// 03 — портфолио" title="Проекты">
          Клик по карточке переворачивает её — на обороте детали реализации.
        </SectionHead>

        <div className={`${styles.grid} reveal`}>
          {projects.map((project) => (
            <FlipCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}