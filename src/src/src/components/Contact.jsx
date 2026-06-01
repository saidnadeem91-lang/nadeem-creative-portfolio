import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact({ t }) {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]     = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Real integration: replace this with EmailJS / Resend / Formspree
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="section-label">{t.contact.label}</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.contact.title}
          </h2>
          <p className="text-gray-400">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="glass rounded-3xl p-8 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <CheckCircle size={56} className="text-green-400 mb-4" />
                  <p className="text-lg font-semibold text-green-400">{t.contact.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      required
                      type="text"
                      placeholder={t.contact.form.name}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-5 py-4 glass rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-transparent text-sm"
                    />
                    <input
                      required
                      type="email"
                      placeholder={t.contact.form.email}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-5 py-4 glass rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-transparent text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={t.contact.form.subject}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-5 py-4 glass rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-transparent text-sm"
                  />
                  <textarea
                    required
                    rows={6}
                    placeholder={t.contact.form.message}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-4 glass rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-transparent resize-none text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4
                               bg-gradient-to-r from-amber-700 via-amber-500 to-amber-600 text-black font-bold rounded-xl
                               hover:shadow-2xl hover:shadow-amber-500/40 transition-all transform hover:scale-[1.02] text-sm"
                  >
                    <Send size={18} />
                    {t.contact.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info cards */}
          <div
            className={`lg:col-span-2 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '0.35s' }}
          >
            {t.contact.info.map(({ icon, label, value, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 card-luxury group"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-gray-200 group-hover:text-amber-400 transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
