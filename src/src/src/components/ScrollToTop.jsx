import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed left-6 bottom-6 z-50 w-12 h-12 glass rounded-full
                  flex items-center justify-center text-amber-400
                  border border-amber-500/30 hover:glow-gold transition-all duration-300
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <ChevronUp size={20} />
    </button>
  )
}
