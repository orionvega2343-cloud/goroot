import { useEffect, useState } from 'react'
import { navLinks } from '../../data/portfolio.js'
import styles from './Header.module.css'
import moonIcon from '../../assets/icons8-месяц-50.png'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

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
          className={styles.themeToggle}
          aria-label="сменить тему"
          onClick={toggleTheme}
        >
          <img src={moonIcon} alt="" className={styles.themeIcon} />
        </button>

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