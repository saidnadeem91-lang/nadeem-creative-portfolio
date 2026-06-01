import { createContext, useContext, useState, useEffect } from 'react'
import { content } from '../data/content'

const LanguageContext = createContext(null)

/**
 * Wrap your app with <LanguageProvider> and consume with useLanguage().
 *
 * Usage:
 *   const { language, setLanguage, t, isRTL } = useLanguage()
 */
export function LanguageProvider({ children }) {
  // Persist preference in localStorage
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem('nc_lang') || 'en'
    } catch {
      return 'en'
    }
  })

  const isRTL = language === 'ar'
  const t     = content[language]

  const setLanguage = (lang) => {
    setLanguageState(lang)
    try { localStorage.setItem('nc_lang', lang) } catch {}
  }

  // Keep <html> dir + lang in sync
  useEffect(() => {
    document.documentElement.dir  = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language, isRTL])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
