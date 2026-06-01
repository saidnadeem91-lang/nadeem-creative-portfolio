/**
 * SectionDivider
 * A thin luxury gold line with a centred diamond accent.
 * Drop it between any two sections for visual rhythm.
 *
 * Usage:
 *   <SectionDivider />
 *   <SectionDivider color="blue" />   ← uses electric-blue variant
 */
export default function SectionDivider({ color = 'gold' }) {
  const lineColor = color === 'blue'
    ? 'from-transparent via-sky-500/40 to-transparent'
    : 'from-transparent via-amber-500/40 to-transparent'

  const dotColor  = color === 'blue' ? 'bg-sky-500' : 'bg-amber-500'
  const glowColor = color === 'blue'
    ? 'shadow-[0_0_12px_rgba(14,165,233,0.6)]'
    : 'shadow-[0_0_12px_rgba(212,175,55,0.6)]'

  return (
    <div className="flex items-center justify-center py-2 px-6 pointer-events-none select-none">
      <div className={`flex-1 h-px bg-gradient-to-r ${lineColor}`} />
      <div className={`mx-4 w-2 h-2 rotate-45 ${dotColor} ${glowColor}`} />
      <div className={`flex-1 h-px bg-gradient-to-l ${lineColor}`} />
    </div>
  )
}
