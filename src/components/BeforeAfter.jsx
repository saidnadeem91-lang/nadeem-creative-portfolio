import { useState, useRef, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Slider({ item }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const update = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100))
    setPos(pct)
  }, [])

  return (
    <div
      ref={containerRef}
      className="before-after-container rounded-2xl overflow-hidden aspect-video relative"
      onMouseDown={() => { dragging.current = true }}
      onMouseUp={() => { dragging.current = false }}
      onMouseMove={(e) => { if (dragging.current) update(e.clientX) }}
      onMouseLeave={() => { dragging.current = false }}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      {/* Before */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center px-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Before</p>
          <p className="text-gray-400 text-sm">{item.before}</p>
        </div>
      </div>

      {/* After */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-950 to-black flex items-center justify-center overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <div className="text-center px-8">
          <p className="text-xs text-amber-500 uppercase tracking-widest mb-2">After</p>
          <p className="text-amber-200 text-sm">{item.after}</p>
        </div>
      </div>

      {/* Handle */}
      <div
        className="before-after-handle"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center glow-gold z-20">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H1M15 8H11M5 8L7 6M5 8L7 10M11 8L9 6M11 8L9 10" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 text-xs font-bold text-gray-400 pointer-events-none">BEFORE</div>
      <div className="absolute bottom-3 right-3 text-xs font-bold text-amber-400 pointer-events-none">AFTER</div>
    </div>
  )
}

export default function BeforeAfter({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.beforeAfter.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.beforeAfter.title}
          </h2>
          <p className="text-gray-400">{t.beforeAfter.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.beforeAfter.items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.15 * i}s` }}
            >
              <h3 className="text-center text-sm font-semibold text-amber-400 mb-3 uppercase tracking-widest">{item.title}</h3>
              <Slider item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
