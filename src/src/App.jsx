import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useLanguage }       from './context/LanguageContext'
import { WHATSAPP_NUMBER }   from './data/content'

import CustomCursor      from './components/CustomCursor'
import Particles         from './components/Particles'
import LoadingScreen     from './components/LoadingScreen'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import About             from './components/About'
import Timeline          from './components/Timeline'
import Skills            from './components/Skills'
import Services          from './components/Services'
import Portfolio         from './components/Portfolio'
import BeforeAfter       from './components/BeforeAfter'
import Brands            from './components/Brands'
import Stats             from './components/Stats'
import Testimonials      from './components/Testimonials'
import InstagramSection  from './components/Instagram'
import WhatsAppCTA       from './components/WhatsAppCTA'
import Contact           from './components/Contact'
import Footer            from './components/Footer'
import ScrollToTop       from './components/ScrollToTop'
import SectionDivider    from './components/SectionDivider'

export default function App() {
  const { language, setLanguage, t, isRTL } = useLanguage()
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <div
      className={`min-h-screen bg-black text-white overflow-x-hidden ${
        isRTL ? 'font-arabic' : 'font-body'
      }`}
    >
      {/* Global helpers */}
      <CustomCursor />
      <Particles count={18} />

      {/* Navigation */}
      <Navbar
        t={t}
        language={language}
        setLanguage={setLanguage}
        isRTL={isRTL}
      />

      {/* Page sections */}
      <main>
        <Hero        t={t} />
        <SectionDivider />
        <About       t={t} />
        <SectionDivider color="blue" />
        <Timeline    t={t} />
        <SectionDivider />
        <Skills      t={t} />
        <SectionDivider color="blue" />
        <Services    t={t} />
        <SectionDivider />
        <Portfolio   t={t} />
        <SectionDivider color="blue" />
        <BeforeAfter t={t} />
        <SectionDivider />
        <Brands      t={t} />
        <SectionDivider color="blue" />
        <Stats       t={t} />
        <SectionDivider />
        <Testimonials t={t} />
        <SectionDivider color="blue" />
        <InstagramSection t={t} />
        <SectionDivider />
        <WhatsAppCTA t={t} />
        <SectionDivider color="blue" />
        <Contact     t={t} />
      </main>

      <Footer t={t} />

      {/* ── Floating buttons ──────────────────────────────── */}

      {/* WhatsApp — bottom-right (or bottom-left in RTL) */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed ${isRTL ? 'left-6' : 'right-6'} bottom-6 z-50
                    w-14 h-14 bg-green-600 rounded-full
                    flex items-center justify-center shadow-2xl
                    animate-pulse-glow hover:bg-green-500 hover:scale-110 transition-all`}
      >
        <MessageCircle size={26} />
      </a>

      {/* Scroll-to-top — bottom-left (or bottom-right in RTL) */}
      <ScrollToTop />
    </div>
  )
}
