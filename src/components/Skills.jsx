import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Skills({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.skills.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.skills.title}
          </h2>
          <p className="text-gray-400">{t.skills.subtitle}</p>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {t.skills.items.map((skill, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
                <span className="text-xs text-amber-500 font-bold">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-700 via-amber-400 to-amber-600 rounded-full transition-all duration-1000"
                  style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${0.05 * i + 0.3}s` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-3 justify-center mt-16 max-w-4xl mx-auto">
          {t.skills.items.map((skill, i) => (
            <span
              key={i}
              className={`px-5 py-2 glass rounded-full text-sm font-medium text-gray-300 hover:text-amber-400 hover:glow-gold
                         cursor-default transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${0.03 * i + 0.5}s` }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
