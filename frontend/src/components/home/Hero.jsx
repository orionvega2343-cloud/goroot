import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

const COMMANDS = [
  { cmd: 'go build ./...', out: '✓ build ok — 0 errors' },
  { cmd: 'go run cmd/api/main.go', out: '🚀 listening on :8080' },
]

function TypingCommand() {
  const [cmdIndex, setCmdIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | showOut | deleting
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (reducedMotion.current) {
      setText(COMMANDS[0].cmd)
      setPhase('showOut')
      return
    }

    const current = COMMANDS[cmdIndex]
    let timer

    if (phase === 'typing') {
      if (text.length < current.cmd.length) {
        timer = setTimeout(() => setText(current.cmd.slice(0, text.length + 1)), 60)
      } else {
        timer = setTimeout(() => setPhase('showOut'), 550)
      }
    } else if (phase === 'showOut') {
      timer = setTimeout(() => setPhase('deleting'), 1500)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 28)
      } else {
        timer = setTimeout(() => {
          setCmdIndex((i) => (i + 1) % COMMANDS.length)
          setPhase('typing')
        }, 350)
      }
    }

    return () => clearTimeout(timer)
  }, [text, phase, cmdIndex])

  const current = COMMANDS[cmdIndex]

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <span className={styles.cmd}>$</span> {text}
        <span className={styles.cursor}></span>
      </div>
      {phase === 'showOut' && <div className={styles.out}>{current.out}</div>}
    </>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`wrap ${styles.grid}`}>
        <div className="reveal">
          <div className={styles.eyebrow}>
            <span className={styles.ping}></span>открыт к предложениям · Москва
          </div>
          <h1 className={styles.title}>
            Пишу backend на <span>Go</span>,<br />а не просто учу синтаксис.
          </h1>
          <p className={styles.lead}>
            Junior Go Developer. Самостоятельно спроектировал и поддерживаю два
            pet-проекта: бэкенд финансового сервиса и Telegram-бота со своим API —
            70+ коммитов в активной разработке.
          </p>
          <div className={styles.actions}>
            <a href="#portfolio" className="btn btn-primary">
              Смотреть проекты →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Связаться
            </a>
          </div>
        </div>

        <div className={`${styles.terminal} reveal`}>
          <div className={styles.termBar}>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className={styles.termBody}>
            <div>
              <span className={styles.cmd}>$</span> whoami
            </div>
            <div className={styles.out}>goroot_dev</div>
            <div style={{ marginTop: 10 }}>
              <span className={styles.cmd}>$</span> cat role.txt
            </div>
            <div className={styles.out}>Junior Go Developer</div>
            <div style={{ marginTop: 10 }}>
              <span className={styles.cmd}>$</span> ls stack/
            </div>
            <div className={styles.out}>
              <span className={styles.key}>go</span>{' '}
              <span className={styles.key}>postgresql</span>{' '}
              <span className={styles.key}>docker</span>{' '}
              <span className={styles.key}>jwt</span>{' '}
              <span className={styles.key}>rest-api</span>
            </div>
            <TypingCommand />
          </div>
        </div>
      </div>
    </section>
  )
}
