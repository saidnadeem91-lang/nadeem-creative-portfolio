import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../data/content'

export default function WhatsAppCTA({ t }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div
          className={`max-w-4xl mx-auto glass-strong rounded-3xl p-12 md:p-20 text-center card-luxury transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl pointer-events-none" />

          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-700 flex items-center justify-center animate-pulse-glow">
              <MessageCircle size={36} />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.whatsapp.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto">{t.whatsapp.subtitle}</p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-green-700 rounded-full font-bold text-lg
                         hover:shadow-2xl hover:shadow-green-500/40 transition-all transform hover:scale-105"
            >
              <MessageCircle size={24} />
              {t.whatsapp.cta}
            </a>

            <p className="text-xs text-gray-500 mt-6">+971 58 277 4519</p>
          </div>
        </div>
      </div>
    </section>
  )
}
