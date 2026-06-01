import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Timeline({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-grid-blue pointer-events-none opacity-50" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.timeline.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.timeline.title}
          </h2>
          <p className="text-gray-400">{t.timeline.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line hidden md:block" />

          {t.timeline.events.map((ev, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={i}
                className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-none gap-4 md:gap-0`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div
                    className={`glass rounded-2xl p-6 card-luxury transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{ev.icon}</span>
                      <span className="text-2xl font-black text-gold">{ev.year}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">{ev.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{ev.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full glow-gold border-2 border-black z-10" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
