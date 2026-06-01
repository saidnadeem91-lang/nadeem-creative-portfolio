import { useScrollAnimation, useCounter } from '../hooks/useScrollAnimation'

function StatItem({ item, start }) {
  const count = useCounter(item.number, 2000, start)
  const suffix = item.number.replace(/[\d+٠-٩]/g, '')

  return (
    <div className="glass rounded-2xl p-8 card-luxury text-center">
      <div className="text-4xl md:text-5xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        {start ? `${count}${suffix}` : item.number}
      </div>
      <p className="text-sm text-gray-400 uppercase tracking-widest">{item.label}</p>
    </div>
  )
}

export default function Stats({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="stats" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/10 to-black pointer-events-none" />

      {/* Large decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[20vw] font-black text-white/[0.02]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          10+
        </span>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.stats.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.stats.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {t.stats.items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <StatItem item={item} start={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
