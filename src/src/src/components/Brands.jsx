import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Award } from 'lucide-react'

const sectorColor = {
  Medical: 'text-blue',   طبي: 'text-blue',
  Beauty: 'text-red',     تجميل: 'text-red',
}

export default function Brands({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="brands" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.brands.label}</p>
          <h2 className="text-4xl md:text-6xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.brands.title}
          </h2>
          <p className="text-gray-400">{t.brands.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {t.brands.items.map(({ name, sector }, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-6 card-luxury text-center group transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${0.06 * i}s` }}
            >
              <Award
                size={28}
                className={`mx-auto mb-3 ${sectorColor[sector] ?? 'text-amber-500'} group-hover:scale-110 transition-transform`}
              />
              <p className="text-sm font-semibold text-gray-200 group-hover:text-amber-400 transition-colors">{name}</p>
              <p className="text-xs text-gray-500 mt-1">{sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
