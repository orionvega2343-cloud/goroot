import { useState } from 'react'
import { navLinks } from '../../data/portfolio.js'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoDot}></span>goroot
          <span className={styles.blink}>_</span>
        </a>

        <nav>
          <ul className={`${styles.links} ${open ? styles.open : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.burger}
          aria-label="меню"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}