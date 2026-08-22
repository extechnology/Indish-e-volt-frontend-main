import { motion } from 'framer-motion'
import { X, MapPin, Star, Zap, Navigation, Clock } from 'lucide-react'
import type { ChargingStation } from '../../types/station.types'

const STATUS_LABEL = {
  available: { text: 'Available', color: '#00D66C' },
  busy: { text: 'All Busy', color: '#f97316' },
  offline: { text: 'Offline', color: '#64748b' },
  coming_soon: { text: 'Coming Soon', color: '#a855f7' },
}

interface StationCardProps {
  station: ChargingStation
  onClose: () => void
  onDirections: (station: ChargingStation) => void
}

export default function StationCard({ station, onClose, onDirections }: StationCardProps) {
  const status = STATUS_LABEL[station.status]
  const totalAvailable = station.connectors.reduce((s, c) => s + c.available, 0)
  const totalConnectors = station.connectors.reduce((s, c) => s + c.total, 0)
  const maxPower = Math.max(...station.connectors.map((c) => c.power))

  return (
    <div className="relative flex flex-col h-full max-h-[80vh] md:max-h-[calc(100vh-130px)] bg-white overflow-hidden text-slate-900">
      {/* ── Header image container ─── */}
      <div className="relative h-36 sm:h-40 shrink-0 overflow-hidden">
        <img
          src={station.image}
          alt={station.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors z-10"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Power Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#00D66C] px-2.5 py-1 text-[11px] font-black text-slate-950 shadow-md">
            <Zap className="h-3 w-3 fill-slate-950 stroke-none" />
            {maxPower} kW
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute bottom-3 left-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-black backdrop-blur-md"
            style={{ color: status.color, background: 'rgba(15, 23, 42, 0.75)' }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: status.color, boxShadow: `0 0 6px ${status.color}` }}
            />
            {status.text}
          </span>
        </div>
      </div>

      {/* ── Scrollable Body Content ─── */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar">
        {/* Title & Address */}
        <div>
          <h3 className="text-base font-black text-slate-900 leading-tight mb-1">
            {station.name}
          </h3>
          <p className="flex items-center gap-1 text-xs text-slate-500 font-medium truncate">
            <MapPin className="h-3.5 w-3.5 text-[#059669] shrink-0" />
            {station.address}, {station.city}
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-2 text-center">
            <span className="text-sm font-black text-[#059669]">
              {totalAvailable}/{totalConnectors}
            </span>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
              Ports Free
            </span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-2 text-center">
            <span className="text-sm font-black text-slate-900 flex items-center gap-0.5">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {station.rating}
            </span>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
              {station.reviews} reviews
            </span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-2 text-center">
            <span className="text-sm font-black text-slate-900">
              ₹{station.pricePerKwh}
            </span>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
              per kWh
            </span>
          </div>
        </div>

        {/* Connectors */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
            Connectors
          </p>
          <div className="space-y-1.5">
            {station.connectors.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 px-3 py-2 text-xs"
              >
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>{c.type}</span>
                  <span className="text-slate-400 font-normal">{c.power} kW</span>
                </div>
                <span
                  className="font-extrabold text-[11px]"
                  style={{ color: c.available > 0 ? '#059669' : '#f97316' }}
                >
                  {c.available}/{c.total} free
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        {station.amenities.length > 0 && (
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
              Amenities
            </p>
            <div className="flex flex-wrap gap-1.5">
              {station.amenities.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                >
                  ✓ {a}
                </span>
              ))}
              {station.isOpen24h && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-[#00D66C]/20 text-[#3b6b00] px-2 py-0.5 text-[11px] font-bold">
                  <Clock className="h-3 w-3" /> 24/7
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Footer CTA Button (Always visible at bottom) ─── */}
      <div className="shrink-0 p-3 bg-white border-t border-slate-100">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onDirections(station)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D66C] py-3 text-xs sm:text-sm font-extrabold text-slate-950 hover:bg-[#9BE500] hover:shadow-md transition-all"
        >
          <Navigation className="h-4 w-4" />
          Get Directions
        </motion.button>
      </div>
    </div>
  )
}
