import { Instagram, Mail, MessageCircle, Camera } from 'lucide-react'
import { WHATSAPP_NUMBER, EMAIL, INSTAGRAM_CREATES, INSTAGRAM_PH } from '../data/content'

export default function Footer({ t }) {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-black text-gold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              NadeemCreative
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creative Visual Storytelling & Digital Branding.<br />
              Based in Dubai, UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {['home', 'about', 'services', 'portfolio', 'brands', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scroll(id)}
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors capitalize text-start"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { href: INSTAGRAM_CREATES,         Icon: Instagram,     label: 'Instagram' },
                { href: INSTAGRAM_PH,              Icon: Camera,        label: 'Photography' },
                { href: `mailto:${EMAIL}`,         Icon: Mail,          label: 'Email' },
                { href: `https://wa.me/${WHATSAPP_NUMBER}`, Icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400
                             hover:text-amber-400 hover:glow-gold transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">{t.footer.copy}</p>
          <p className="text-gray-600 text-xs">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
