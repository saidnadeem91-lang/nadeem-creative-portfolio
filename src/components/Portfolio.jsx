import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ExternalLink } from 'lucide-react'

export default function Portfolio({ t }) {
  const { ref, isVisible } = useScrollAnimation()
  const [active, setActive] = useState('All')

  const categories = t.portfolio.categories
  const items = t.portfolio.items

  const filtered = active === 'All' || active === 'الكل'
    ? items
    : items.filter((item) => item.category === active)

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.portfolio.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.portfolio.title}
          </h2>
          <p className="text-gray-400">{t.portfolio.subtitle}</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? 'bg-gradient-to-r from-amber-700 to-amber-500 text-black glow-gold'
                  : 'glass text-gray-400 hover:text-amber-400 hover:glow-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`glass rounded-2xl overflow-hidden card-luxury group transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${0.07 * i}s` }}
            >
              {/* Placeholder visual */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 glass-strong rounded-full flex items-center justify-center">
                    <ExternalLink size={20} className="text-amber-400" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <span className="text-xs text-amber-500 font-semibold uppercase tracking-widest">{item.type}</span>
                <h3 className="text-base font-bold mt-1 text-white group-hover:text-amber-400 transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
