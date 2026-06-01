import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.about.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="glass rounded-3xl p-8 md:p-10 card-luxury">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">{t.about.p1}</p>
              <p className="text-gray-300 leading-relaxed text-lg">{t.about.p2}</p>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Based In', value: '🇦🇪 Dubai, UAE' },
                  { label: 'Languages', value: 'AR · EN · ES' },
                  { label: 'Experience', value: '10+ Years' },
                  { label: 'Platforms', value: 'Meta · TikTok · Google' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-sm font-semibold text-amber-400">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-5">
            {t.about.values.map((v, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-6 card-luxury transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">{v.icon}</span>
                  <h3 className="text-lg font-bold text-gold">{v.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
