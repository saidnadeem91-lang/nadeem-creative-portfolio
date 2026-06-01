import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Star, Quote } from 'lucide-react'

export default function Testimonials({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.testimonials.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.testimonials.title}
          </h2>
          <p className="text-gray-400">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-8 card-luxury flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <Quote size={28} className="text-amber-500/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className="text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic flex-1 mb-6">"{item.text}"</p>

              <div className="pt-5 border-t border-white/10">
                <p className="font-bold text-gold">{item.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
