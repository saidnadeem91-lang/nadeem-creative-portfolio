import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Instagram, ExternalLink } from 'lucide-react'

export default function InstagramSection({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.instagram.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.instagram.title}
          </h2>
          <p className="text-gray-400">{t.instagram.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.instagram.handles.map((handle, i) => (
            <a
              key={i}
              href={handle.url}
              target="_blank" rel="noopener noreferrer"
              className={`glass rounded-3xl p-10 card-luxury group text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.2 * i}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 flex items-center justify-center
                              group-hover:glow-gold transition-all group-hover:scale-110">
                <Instagram size={36} className="text-black" />
              </div>
              <h3 className="text-2xl font-black text-gold mb-2">{handle.username}</h3>
              <p className="text-gray-400 text-sm mb-6">{handle.desc}</p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
                Follow <ExternalLink size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
