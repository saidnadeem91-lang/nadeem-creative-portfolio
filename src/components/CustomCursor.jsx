import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos]         = useState({ x: -100, y: -100 })
  const [hover, setHover]     = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e) => setHover(!!e.target.closest('a, button, [data-hover]'))

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <>
      <div
        className={`cursor-ring hidden md:block ${hover ? 'cursor-hover' : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="cursor-dot hidden md:block"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  )
}
