import { useMemo } from 'react'

export default function Particles({ count = 20 }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size:  Math.random() * 3 + 1,
      left:  Math.random() * 100,
      top:   Math.random() * 100,
      delay: Math.random() * 8,
      dur:   Math.random() * 8 + 8,
      opacity: Math.random() * 0.5 + 0.2,
    })), [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width:  p.size,
            height: p.size,
            left:  `${p.left}%`,
            top:   `${p.top}%`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.9) 0%, transparent 70%)',
            opacity: p.opacity,
            animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
