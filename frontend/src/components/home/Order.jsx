import { orderPlans } from '../../data/portfolio.js'
import SectionHead from './SectionHead.jsx'
import styles from './Order.module.css'

export default function Order() {
  return (
    <section className="section alt" id="order">
      <div className="wrap">
        <SectionHead tag="// 04 — оформить заказ" title="Что можно заказать">
          Готовые форматы услуг — для тех, кому нужен backend под конкретную задачу.
        </SectionHead>

        <div className={`${styles.grid} reveal`}>
          {orderPlans.map((plan) => (
            <div
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
              key={plan.title}
            >
              {plan.ribbon && <div className={styles.ribbon}>{plan.ribbon}</div>}
              <h3>{plan.title}</h3>
              <div className={styles.price}>{plan.price}</div>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                Обсудить
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
