import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Services({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.services.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.services.title}
          </h2>
          <p className="text-gray-400">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.services.items.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-8 card-luxury group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5
                              group-hover:bg-amber-500/20 group-hover:glow-gold transition-all">
                <Icon size={24} className="text-amber-400" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gold">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
