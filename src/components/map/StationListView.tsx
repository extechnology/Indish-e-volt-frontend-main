import { motion } from 'framer-motion'
import { MapPin, Star, Zap, Navigation, ArrowRight } from 'lucide-react'
import type { ChargingStation } from '../../types/station.types'

interface StationListViewProps {
  stations: ChargingStation[]
  onSelectStation: (station: ChargingStation) => void
  onDirections: (station: ChargingStation) => void
}

export default function StationListView({ stations, onSelectStation, onDirections }: StationListViewProps) {
  if (stations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-slate-500">
        <MapPin className="h-12 w-12 text-slate-300 mb-3" />
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">No charging stations found</h3>
        <p className="text-sm text-slate-400 mt-1 max-w-sm">
          Try broadening your search query or resetting your filters.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8 max-w-7xl mx-auto overflow-y-auto">
      {stations.map((s, idx) => {
        const availablePorts = s.connectors.reduce((acc, c) => acc + c.available, 0)
        const totalPorts = s.connectors.reduce((acc, c) => acc + c.total, 0)
        const maxPower = Math.max(...s.connectors.map((c) => c.power))

        return (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#00D66C] px-2.5 py-1 text-[11px] font-black text-slate-950">
                    <Zap className="h-3 w-3 fill-slate-950 stroke-none" />
                    {maxPower} kW
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-extrabold backdrop-blur-md ${
                      s.status === 'available'
                        ? 'bg-[#00D66C]/90 text-slate-950'
                        : 'bg-orange-500/90 text-white'
                    }`}
                  >
                    {s.status === 'available' ? 'Available' : 'Busy'}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-bold">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {s.rating} ({s.reviews})
                  </span>
                  <span className="font-extrabold text-[#00D66C]">
                    ₹{s.pricePerKwh}/kWh
                  </span>
                </div>
              </div>

              {/* Station Details */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#00D66C] transition-colors leading-tight">
                  {s.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#00D66C] shrink-0" />
                  {s.address}, {s.city}
                </p>

                {/* Ports list */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.connectors.map((c, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] font-extrabold text-slate-700 dark:text-slate-300"
                    >
                      {c.type} · {c.power}kW ({c.available} free)
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-5 pt-0 flex items-center gap-2">
              <button
                onClick={() => onSelectStation(s)}
                className="flex-1 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-extrabold text-xs hover:bg-[#00D66C] hover:text-slate-950 transition-all flex items-center justify-center gap-1"
              >
                View on Map
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => onDirections(s)}
                className="py-3 px-4 rounded-2xl bg-[#00D66C] text-slate-950 font-extrabold text-xs hover:bg-[#9BE500] transition-all flex items-center justify-center gap-1"
                title="Get Directions"
              >
                <Navigation className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
