import { useEffect } from 'react'

/**
 * Scroll-reveal: добавляет класс `is-visible` элементам с классом `.reveal`,
 * когда они попадают во вьюпорт. Повторяет поведение исходной вёрстки.
 *
 * @param {Array} deps - зависимости, при изменении которых надо пересканировать DOM
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
