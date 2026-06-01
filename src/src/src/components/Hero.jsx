import { useEffect, useState } from 'react'
import { ChevronDown, MessageCircle, Camera, Instagram, Mail } from 'lucide-react'
import { WHATSAPP_NUMBER, INSTAGRAM_CREATES, INSTAGRAM_PH, EMAIL } from '../data/content'

export default function Hero({ t }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const roles = t.hero.roles

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let i = typing ? 0 : current.length
    const speed = typing ? 60 : 30

    const timer = setInterval(() => {
      if (typing) {
        i++
        setDisplayed(current.slice(0, i))
        if (i >= current.length) {
          clearInterval(timer)
          setTimeout(() => setTyping(false), 1800)
        }
      } else {
        i--
        setDisplayed(current.slice(0, i))
        if (i <= 0) {
          clearInterval(timer)
          setRoleIndex((r) => (r + 1) % roles.length)
          setTyping(true)
        }
      }
    }, speed)

    return () => clearInterval(timer)
  }, [roleIndex, typing, roles])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-20"
    >
      {/* Ambient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/15 via-black/60 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-amber-950/10 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Label */}
        <p className="section-label animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          {t.hero.label}
        </p>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gold text-glow-gold leading-none mb-4 animate-fade-in-up"
          style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.25s', opacity: 0 }}
        >
          {t.hero.name}
        </h1>

        {/* Tagline */}
        <h2
          className="text-2xl md:text-4xl font-light text-gray-200 mb-4 max-w-4xl mx-auto leading-snug animate-fade-in-up whitespace-pre-line"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          {t.hero.tagline}
        </h2>

        {/* Typewriter role */}
        <div className="h-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <span className="text-base md:text-lg text-blue font-semibold">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-sky-400 ml-1 animate-pulse" />
          </span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-600 text-black font-bold rounded-full
                       hover:shadow-2xl hover:shadow-amber-500/40 transition-all transform hover:scale-105 text-sm tracking-wide"
          >
            {t.hero.cta_portfolio}
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass rounded-full font-bold text-white hover:glow-gold transition-all text-sm tracking-wide"
          >
            {t.hero.cta_contact}
          </button>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-green-700 rounded-full font-bold
                       hover:shadow-2xl hover:shadow-green-500/40 transition-all transform hover:scale-105 text-sm tracking-wide"
          >
            <MessageCircle size={18} />
            {t.hero.cta_whatsapp}
          </a>
        </div>

        {/* Social icons */}
        <div
          className="flex gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '1s', opacity: 0 }}
        >
          {[
            { href: INSTAGRAM_CREATES, Icon: Instagram, label: '@nadim.creates' },
            { href: INSTAGRAM_PH,      Icon: Camera,    label: '@nadem.ph' },
            { href: `mailto:${EMAIL}`, Icon: Mail,      label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank" rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400
                         hover:text-amber-400 hover:glow-gold transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-xs text-gray-500 tracking-widest uppercase">{t.hero.scroll}</span>
        <ChevronDown size={20} className="text-amber-500" />
      </div>
    </section>
  )
}
