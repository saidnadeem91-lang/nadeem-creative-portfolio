import { useEffect, useState } from 'react'

/**
 * useScrollSpy
 * ------------
 * Returns:
 *   activeSection  — id of the section currently in the viewport
 *   scrolled       — true once the page has scrolled past `threshold` px
 *
 * Usage (in Navbar):
 *   const { activeSection, scrolled } = useScrollSpy(sectionIds, 80)
 */
export function useScrollSpy(sectionIds = [], threshold = 80) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')
  const [scrolled,      setScrolled]      = useState(false)

  useEffect(() => {
    // ── Scroll depth flag ──────────────────────────────────────────────
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── Intersection observer for sections ────────────────────────────
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        {
          // Trigger when the top 30 % of the section enters the viewport
          rootMargin: '-10% 0px -60% 0px',
          threshold: 0,
        }
      )
      obs.observe(el)
      observers.push({ obs, el })
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observers.forEach(({ obs, el }) => obs.unobserve(el))
    }
  }, [sectionIds, threshold])

  return { activeSection, scrolled }
}
