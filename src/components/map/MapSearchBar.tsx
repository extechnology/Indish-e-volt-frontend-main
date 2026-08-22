import { useState, useRef, useEffect } from 'react'
import { Search, SlidersHorizontal, MapPin, X, Zap, ChevronRight, Loader2 } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ChargingStation } from '../../types/station.types'

interface MapSearchBarProps {
  searchQuery: string
  onSearchChange: (q: string) => void
  onOpenFilter: () => void
  activeFilterCount: number
  onLocateMe: () => void
  totalCount: number
  matchingStations: ChargingStation[]
  onSelectStation: (station: ChargingStation) => void
  isLoading?: boolean
}

export default function MapSearchBar({
  searchQuery,
  onSearchChange,
  onOpenFilter,
  activeFilterCount,
  onLocateMe,
  totalCount,
  matchingStations,
  onSelectStation,
  isLoading,
}: MapSearchBarProps) {
  const [isFocused, setIsFocused] = useState(false)
  const wrapperRef   = useRef<HTMLDivElement>(null)
  const droplistRef  = useRef<HTMLDivElement>(null)
  const inputRef     = useRef<HTMLInputElement>(null)

  const showDropdown = isFocused

  /* ── Close on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* ── Prevent scroll bleeding into map ── */
  useEffect(() => {
    const el = droplistRef.current
    if (!el || !showDropdown) return

    const onWheel = (e: WheelEvent) => {
      e.stopPropagation()
      const atTop    = el.scrollTop <= 0
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) e.preventDefault()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [showDropdown])

  return (
    <div ref={wrapperRef} className="relative w-full pointer-events-auto">
      {/* ── Main Search Row ── */}
      <div className="relative">
        <div className="flex items-center gap-2.5">
          {/* Search Input Box */}
          <div
            className={`relative flex flex-1 items-center rounded-2xl bg-[#0B1220]/95 backdrop-blur-xl border shadow-2xl px-4 py-3 transition-all ${
              showDropdown
                ? 'border-[#00D66C] ring-2 ring-[#00D66C]/30 rounded-b-none border-b-transparent shadow-none'
                : 'border-slate-800'
            }`}
          >
            {isLoading ? (
              <Loader2 className="h-4.5 w-4.5 text-[#00D66C] animate-spin shrink-0 mr-3" />
            ) : (
              <Search className="h-4.5 w-4.5 text-slate-400 shrink-0 mr-3" />
            )}
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onFocus={() => setIsFocused(true)}
              onChange={(e) => {
                onSearchChange(e.target.value)
                setIsFocused(true)
              }}
              placeholder="Search area, city or station..."
              className="w-full bg-transparent text-sm font-semibold text-white placeholder:text-slate-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  onSearchChange('')
                  setIsFocused(true)
                }}
                className="ml-2 p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Filter Button */}
          <button
            onClick={onOpenFilter}
            className={`relative flex items-center justify-center h-12 w-12 shrink-0 rounded-2xl transition-all shadow-xl active:scale-95 cursor-pointer ${
              activeFilterCount > 0
                ? 'bg-[#00D66C] text-slate-950 shadow-[#00D66C]/30 font-black'
                : 'bg-[#0B1220]/95 backdrop-blur-xl border border-slate-800 text-slate-300 hover:text-white'
            }`}
            title="Filter Stations"
          >
            <SlidersHorizontal className="h-4.5 w-4.5" />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 text-white text-[10px] font-black border-2 border-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Locate Me Button */}
          <button
            onClick={onLocateMe}
            className="flex items-center justify-center h-12 w-12 shrink-0 rounded-2xl bg-[#0B1220]/95 backdrop-blur-xl border border-slate-800 text-slate-300 shadow-xl active:scale-95 transition-all hover:text-[#00D66C] hover:border-[#00D66C]/40 cursor-pointer"
            title="Near Me"
          >
            <MapPin className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* ── Live Search Dropdown ── */}
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 sm:right-[7.25rem] top-full z-50 bg-[#0B1220] border border-[#00D66C] border-t-0 rounded-b-2xl shadow-2xl overflow-hidden"
            >
              <div
                ref={droplistRef}
                className="max-h-72 overflow-y-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {matchingStations.length > 0 ? (
                  <ul className="divide-y divide-slate-800/80">
                    {matchingStations.slice(0, 8).map((station) => {
                      const maxPower = Math.max(...station.connectors.map((c) => c.power))

                      return (
                        <li key={station.id}>
                          <button
                            onClick={() => {
                              onSelectStation(station)
                              setIsFocused(false)
                            }}
                            className="w-full flex items-center gap-3.5 px-4 py-3 hover:bg-[#00D66C]/10 transition-colors group text-left"
                          >
                            {/* Bolt icon */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00D66C] text-slate-950 font-black shadow-sm">
                              <Zap className="h-5 w-5 fill-slate-950 stroke-none" />
                            </div>

                            {/* Station Info */}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-extrabold text-white truncate group-hover:text-[#00D66C] transition-colors">
                                {station.name}
                              </p>
                              <p className="text-[11px] text-slate-400 truncate">
                                {station.address}, {station.city}
                              </p>
                            </div>

                            {/* kW badge */}
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-xs font-black px-3 py-1 rounded-full bg-[#00D66C] text-slate-950 shadow-sm">
                                {maxPower} kW
                              </span>
                              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <div className="py-8 text-center">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-slate-600 fill-slate-600 stroke-none" />
                    <p className="text-sm font-semibold text-slate-400">No matching stations found</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
