import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, RotateCcw, Zap, MapPin } from 'lucide-react'
import type { StationFilters } from '../../services/stationsService'
import type { ConnectorType } from '../../types/station.types'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  filters: StationFilters
  onApplyFilters: (newFilters: StationFilters) => void
}

const CONNECTOR_OPTIONS: ConnectorType[] = [
  'CCS2', 'CHAdeMO', 'Type2', 'Tesla', 'Bharat DC', 'Bharat AC',
]

const POWER_OPTIONS = [
  { label: 'Any Power', value: 0 },
  { label: '50+ kW  Fast', value: 50 },
  { label: '150+ kW  Ultra', value: 150 },
  { label: '300+ kW  Hyper', value: 300 },
]

const DISTANCE_OPTIONS = [
  { label: 'All Locations', value: 0 },
  { label: 'Within 10 km', value: 10 },
  { label: 'Within 25 km', value: 25 },
  { label: 'Within 50 km', value: 50 },
]

export default function FilterModal({ isOpen, onClose, filters, onApplyFilters }: FilterModalProps) {
  const [localStatus,      setLocalStatus]      = useState<'all' | 'available'>(filters.status ?? 'all')
  const [localMinPower,    setLocalMinPower]     = useState<number>(filters.minPower ?? 0)
  const [localMaxDistance, setLocalMaxDistance]  = useState<number>(filters.maxDistance ?? 0)
  const [localConnectors,  setLocalConnectors]   = useState<string[]>(filters.connectorTypes ?? [])

  // Sync when opened
  useEffect(() => {
    setLocalStatus(filters.status ?? 'all')
    setLocalMinPower(filters.minPower ?? 0)
    setLocalMaxDistance(filters.maxDistance ?? 0)
    setLocalConnectors(filters.connectorTypes ?? [])
  }, [filters, isOpen])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else        document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const toggle = (type: string) =>
    setLocalConnectors(prev =>
      prev.includes(type) ? prev.filter(c => c !== type) : [...prev, type],
    )

  const handleReset = () => {
    setLocalStatus('all')
    setLocalMinPower(0)
    setLocalMaxDistance(0)
    setLocalConnectors([])
  }

  const handleApply = () => {
    onApplyFilters({
      status:         localStatus,
      minPower:       localMinPower,
      maxDistance:    localMaxDistance,
      connectorTypes: localConnectors,
      searchQuery:    filters.searchQuery,
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Panel — no overflow-y-auto, fixed height fits all content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 bg-white rounded-3xl shadow-2xl border border-slate-200 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[520px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#00D66C]/20">
                  <Zap className="h-5 w-5 fill-[#00D66C] stroke-none" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Filter Stations</h3>
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Body — all filters stacked, NO scroll */}
            <div className="px-6 py-4 space-y-5">

              {/* Status */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Station Status
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { label: 'All Stations', value: 'all' as const },
                    { label: 'Available Now', value: 'available' as const },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setLocalStatus(opt.value)}
                      className={`py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${
                        localStatus === opt.value
                          ? opt.value === 'available'
                            ? 'bg-[#00D66C] text-slate-950 border-[#00D66C]'
                            : 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt.value === 'available' && (
                        <span className="inline-block h-2 w-2 rounded-full bg-slate-950 mr-1.5 animate-pulse" />
                      )}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Distance */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-[#059669]" /> Distance from Me
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {DISTANCE_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setLocalMaxDistance(opt.value)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        localMaxDistance === opt.value
                          ? 'bg-[#059669] text-white border-[#059669]'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Power */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Minimum Power (kW)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {POWER_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setLocalMinPower(opt.value)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all border text-left px-3 ${
                        localMinPower === opt.value
                          ? 'bg-[#00D66C] text-slate-950 border-[#00D66C]'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Connectors */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Connector Types
                </label>
                <div className="flex flex-wrap gap-2">
                  {CONNECTOR_OPTIONS.map(conn => {
                    const sel = localConnectors.includes(conn)
                    return (
                      <button
                        key={conn}
                        onClick={() => toggle(conn)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                          sel
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {sel && <Check className="h-3 w-3" />}
                        {conn}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="flex items-center gap-3 px-6 pb-5 pt-2 border-t border-slate-100">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 text-slate-600 font-bold text-xs hover:bg-slate-200 transition-all"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
              <button
                onClick={handleApply}
                className="flex-1 py-3 rounded-2xl bg-[#00D66C] text-slate-950 font-black text-sm hover:bg-[#9BE500] shadow-lg shadow-[#00D66C]/20 transition-all"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
