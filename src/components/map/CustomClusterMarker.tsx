import { motion } from 'framer-motion'

interface CustomClusterMarkerProps {
  count: number
  hasAvailable?: boolean
  onClick?: () => void
}

export default function CustomClusterMarker({ count, hasAvailable = true, onClick }: CustomClusterMarkerProps) {
  const badgeColor = hasAvailable ? '#00D66C' : '#f97316'

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative flex items-center justify-center cursor-pointer select-none"
    >
      {/* Outer pulsing glow */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: badgeColor, animationDuration: '2.5s' }}
      />

      {/* Cluster container */}
      <div
        className="relative flex items-center justify-center rounded-full font-black text-slate-950 shadow-xl border-2 border-white/80"
        style={{
          width: count > 10 ? 48 : 42,
          height: count > 10 ? 48 : 42,
          background: `radial-gradient(circle at 35% 35%, ${badgeColor}, ${badgeColor}dd)`,
          boxShadow: `0 0 20px ${badgeColor}60, 0 4px 12px rgba(0,0,0,0.3)`,
        }}
      >
        <span className="text-sm font-extrabold text-slate-950">{count}</span>

        {/* Small EV badge icon inside cluster */}
        <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-1 border border-white/40">
          <svg className="w-2.5 h-2.5 text-[#00D66C] fill-current" viewBox="0 0 24 24">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}
