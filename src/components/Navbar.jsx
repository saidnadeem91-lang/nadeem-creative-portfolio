import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const SECTION_IDS = [
  'home', 'about', 'experience', 'skills',
  'services', 'portfolio', 'brands', 'stats',
  'testimonials', 'contact',
]

export default function Navbar({ t, language, setLanguage, isRTL }) {
  const [open, setOpen] = useState(false)
  const { activeSection, scrolled } = useScrollSpy(SECTION_IDS, 80)

  const scroll = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Build nav items from translation keys that match a real section id
  const navItems = SECTION_IDS
    .filter((id) => t.nav[id])
    .map((id)   => ({ id, label: t.nav[id] }))

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scroll('home')}
          className="text-xl md:text-2xl font-black text-gold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          NadeemCreative
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <button
                key={id}
                onClick={() => scroll(id)}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors relative group ${
                  isActive ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} h-px bg-amber-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            )
          })}

          {/* Language toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-4 py-2 glass rounded-full
                       text-xs font-bold text-amber-400 hover:glow-gold transition-all"
          >
            <Globe size={14} />
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="p-2 glass rounded-full text-amber-400"
            aria-label="Toggle language"
          >
            <Globe size={16} />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 glass rounded-lg text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden glass-strong mx-4 mb-4 rounded-2xl p-6 animate-fade-in-up">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scroll(id)}
              className={`block w-full py-3 text-sm font-medium transition-colors
                          border-b border-white/5 last:border-0 text-start ${
                activeSection === id
                  ? 'text-amber-400'
                  : 'text-gray-300 hover:text-amber-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
