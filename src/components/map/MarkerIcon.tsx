/* ── Custom animated EV charging bolt marker ────────────────── */
import type { StationStatus } from '../../types/station.types'

interface MarkerIconProps {
  status: StationStatus
  size?: number
  pulse?: boolean
}

const STATUS_COLOR: Record<StationStatus, string> = {
  available: '#00D66C',
  busy: '#f97316',
  offline: '#64748b',
  coming_soon: '#a855f7',
}

export default function MarkerIcon({ status, size = 42, pulse = true }: MarkerIconProps) {
  const color = STATUS_COLOR[status]
  const isAvailable = status === 'available'

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: size, height: size }}
    >
      {/* Pulse ring for available stations */}
      {pulse && isAvailable && (
        <>
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ backgroundColor: `${color}30`, animationDuration: '2s' }}
          />
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ backgroundColor: `${color}18`, animationDuration: '2.6s', animationDelay: '0.4s' }}
          />
        </>
      )}

      {/* Marker body */}
      <div
        className="relative flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 35% 35%, ${color}ff, ${color}cc)`,
          boxShadow: `0 0 0 3px ${color}40, 0 4px 16px ${color}50`,
        }}
      >
        {/* Lightning bolt SVG */}
        <svg
          width={size * 0.44}
          height={size * 0.44}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0f172a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#0f172a" stroke="none" />
        </svg>
      </div>

      {/* Pointy tail */}
      <div
        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: `10px solid ${color}cc`,
        }}
      />
    </div>
  )
}
