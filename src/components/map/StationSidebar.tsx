import { useRef, useEffect } from 'react'
import { MapPin, Star, Zap, Navigation, Clock, X, Wifi, Coffee, Car, Shield, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ChargingStation, StationStatus } from '../../types/station.types'

/* ─── Status config ──────────────────────────────────────────────── */
const STATUS_CFG = {
  available:   { label: 'Available',   glow: '#00D66C', text: '#00D66C' },
  busy:        { label: 'Busy',        glow: '#f97316', text: '#f97316' },
  offline:     { label: 'Offline',     glow: '#94a3b8', text: '#94a3b8' },
  coming_soon: { label: 'Coming Soon', glow: '#a855f7', text: '#a855f7' },
} satisfies Record<StationStatus, { label: string; glow: string; text: string }>

/* ─── Connector bubble styles ───────────────────────────────────── */
const CONN_BUBBLE: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  CCS2:       { bg: 'bg-[#121B2D]', border: 'border-blue-500/30', text: 'text-blue-400', iconBg: 'bg-blue-500/20 text-blue-400' },
  CHAdeMO:    { bg: 'bg-[#121B2D]', border: 'border-rose-500/30', text: 'text-rose-400', iconBg: 'bg-rose-500/20 text-rose-400' },
  Type2:      { bg: 'bg-[#121B2D]', border: 'border-purple-500/30', text: 'text-purple-400', iconBg: 'bg-purple-500/20 text-purple-400' },
  Tesla:      { bg: 'bg-[#121B2D]', border: 'border-red-500/30', text: 'text-red-400', iconBg: 'bg-red-500/20 text-red-400' },
  'Bharat DC':{ bg: 'bg-[#121B2D]', border: 'border-amber-500/30', text: 'text-amber-400', iconBg: 'bg-amber-500/20 text-amber-400' },
  'Bharat AC':{ bg: 'bg-[#121B2D]', border: 'border-emerald-500/30', text: 'text-emerald-400', iconBg: 'bg-emerald-500/20 text-emerald-400' },
}
const fallbackBubble = { bg: 'bg-[#121B2D]', border: 'border-slate-700', text: 'text-slate-300', iconBg: 'bg-slate-700/40 text-slate-300' }

interface StationSidebarProps {
  station: ChargingStation
  onClose: () => void
  onDirections: (s: ChargingStation) => void
}

export default function StationSidebar({ station, onClose, onDirections }: StationSidebarProps) {
  const st = STATUS_CFG[station.status]
  const maxKw = Math.max(...station.connectors.map((c) => c.power))
  const bodyRef = useRef<HTMLDivElement>(null)

  /* Prevent scroll bleeding */
  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.stopPropagation()
      const atTop = el.scrollTop <= 0
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) e.preventDefault()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [station.id])

  return (
    <div className="flex flex-col w-full h-full bg-[#0B101D] text-white overflow-hidden border-r border-slate-800/80">
      
      {/* ── Hero Image Slider + Close Button Overlay ── */}
      <div className="relative h-44 shrink-0 overflow-hidden bg-slate-950">
        <img
          src={station.image}
          alt={station.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B101D] via-black/20 to-transparent pointer-events-none" />

        {/* Close Button top-right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 flex items-center justify-center h-8 w-8 rounded-full bg-black/60 backdrop-blur-md text-slate-300 hover:text-white hover:bg-black/80 transition-all shadow-lg"
          title="Close station details"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Bottom Left Available Badge */}
        <div className="absolute bottom-3 left-3">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black backdrop-blur-md"
            style={{ background: 'rgba(5, 15, 10, 0.8)', color: st.glow }}
          >
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: st.glow }} />
            {st.label}
          </span>
        </div>

        {/* Bottom Right Distance Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-bold">
            <Navigation className="h-3 w-3 text-[#00D66C]" />
            2.4 km
          </span>
        </div>
      </div>

      {/* ── Scrollable Body ── */}
      <div
        ref={bodyRef}
        className="flex-1 overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overscrollBehavior: 'contain' }}
      >
        <div className="px-5 py-4 space-y-4">
          
          {/* Station Title & Rating */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#059669] block mb-1">
                {station.network}
              </span>
              <h2 className="text-lg font-black text-white leading-snug truncate">
                {station.name}
              </h2>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#131C2E] border border-amber-500/30 text-amber-400 shrink-0">
              <Star className="h-3.5 w-3.5 fill-amber-400" />
              <span className="text-xs font-black">{station.rating}</span>
              <span className="text-[9px] text-slate-400">({station.reviews})</span>
            </div>
          </div>

          {/* Address */}
          <p className="flex items-start gap-1.5 text-xs text-slate-400 leading-relaxed">
            <MapPin className="h-3.5 w-3.5 text-[#059669] shrink-0 mt-0.5" />
            {station.address}, {station.city}, {station.state}
          </p>

          {/* 2 Stat Cards side-by-side */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#121B2D] border border-slate-800">
              <div className="h-9 w-9 rounded-xl bg-[#00D66C]/15 flex items-center justify-center text-[#00D66C] shrink-0">
                <Zap className="h-5 w-5 fill-[#00D66C] stroke-none" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-black text-white leading-tight">{maxKw} kW</p>
                <p className="text-[10px] font-bold text-slate-400">Ultra Speed</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#121B2D] border border-slate-800">
              <div className="h-9 w-9 rounded-xl bg-[#059669]/15 flex items-center justify-center text-[#059669] shrink-0">
                <Clock className="h-5 w-5 text-[#059669]" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-black text-white leading-tight">24/7</p>
                <p className="text-[10px] font-bold text-slate-400">Always Open</p>
              </div>
            </div>
          </div>

          {/* CHARGING RATE */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
              Charging Rate
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white">₹{station.pricePerKwh}</span>
              <span className="text-xs font-semibold text-slate-400">Per kWh</span>
            </div>
          </div>

          {/* CONNECTORS — Small Compact Bubble Pills */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              Available Connectors
            </p>
            <div className="flex flex-wrap gap-2">
              {station.connectors.map((c, i) => {
                const b = CONN_BUBBLE[c.type] ?? fallbackBubble
                return (
                  <div
                    key={i}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl ${b.bg} border ${b.border} shadow-sm`}
                  >
                    <div className={`p-1 rounded-lg ${b.iconBg}`}>
                      <Zap className="h-3.5 w-3.5 fill-current stroke-none" />
                    </div>
                    <span className="text-xs font-black text-white">{c.type}</span>
                    <span className="text-[11px] font-bold text-slate-400">{c.power} kW</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* STATION AMENITIES — Small Bubble Chips with Icons */}
          {station.amenities.length > 0 && (
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Station Amenities
              </p>
              <div className="flex flex-wrap gap-2">
                {station.amenities.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121B2D] border border-slate-800 text-xs font-semibold text-slate-300"
                  >
                    {a === 'WiFi' && <Wifi className="h-3.5 w-3.5 text-blue-400" />}
                    {(a === 'Coffee Lounge' || a === 'Cafe') && <Coffee className="h-3.5 w-3.5 text-amber-400" />}
                    {a === 'EV Wash' && <Car className="h-3.5 w-3.5 text-emerald-400" />}
                    {a === 'Valet' && <Shield className="h-3.5 w-3.5 text-purple-400" />}
                    {a !== 'WiFi' && a !== 'Coffee Lounge' && a !== 'Cafe' && a !== 'EV Wash' && a !== 'Valet' && (
                      <Check className="h-3.5 w-3.5 text-[#00D66C]" />
                    )}
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="h-2" />
        </div>
      </div>

      {/* ── Sticky Bottom Get Directions Button ── */}
      <div className="shrink-0 p-4 bg-[#080C17] border-t border-slate-800/80">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onDirections(station)}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00D66C] py-3.5 text-sm font-black text-slate-950 hover:bg-[#9BE500] transition-all shadow-lg shadow-[#00D66C]/20"
        >
          <Navigation className="h-4.5 w-4.5 fill-slate-950 stroke-none" />
          Get Directions
        </motion.button>
      </div>
    </div>
  )
}
