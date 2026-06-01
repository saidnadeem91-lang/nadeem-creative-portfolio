import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return p + Math.random() * 15
      })
    }, 120)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="loading-screen">
      <div className="text-center px-6">
        {/* Logo */}
        <div
          className="shimmer-text text-5xl md:text-7xl font-black mb-2 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          NadeemCreative
        </div>

        <p className="text-gray-500 text-sm tracking-widest uppercase mb-12">
          Visual Storytelling & Digital Branding
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-px bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-amber-500 text-xs mt-3 text-right tabular-nums">
            {Math.min(Math.floor(progress), 100)}%
          </p>
        </div>
      </div>
    </div>
  )
}
