import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Search, 
  Info, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react'

export interface EVChargingData {
  id: string
  model: string
  brand: 'Tata' | 'Mahindra' | 'Hyundai' | 'Kia' | 'BYD' | 'Maruti'
  battery: string
  batteryKwh: number
  maxDcIntake: string
  maxDcIntakeKw: number
  times: {
    kw30: string
    kw60: string
    kw120: string
    kw160: string
    kw180: string
  }
  highlight160?: boolean
  highlight180?: boolean
  voltagePlatform: string
}

export const evChargingReferenceData: EVChargingData[] = [
  {
    id: 'nexon-ev',
    model: 'Tata Nexon EV',
    brand: 'Tata',
    battery: '45 kWh',
    batteryKwh: 45,
    maxDcIntake: '60 kW',
    maxDcIntakeKw: 60,
    times: {
      kw30: '1h 40m',
      kw60: '50m',
      kw120: '50m',
      kw160: '50m',
      kw180: '50m',
    },
    voltagePlatform: '400V Ziptron',
  },
  {
    id: 'xuv400',
    model: 'Mahindra XUV400',
    brand: 'Mahindra',
    battery: '39.4 kWh',
    batteryKwh: 39.4,
    maxDcIntake: '50 kW',
    maxDcIntakeKw: 50,
    times: {
      kw30: '1h 28m',
      kw60: '53m',
      kw120: '53m',
      kw160: '53m',
      kw180: '53m',
    },
    voltagePlatform: '400V EV Platform',
  },
  {
    id: 'curvv-ev',
    model: 'Tata Curvv EV',
    brand: 'Tata',
    battery: '55 kWh',
    batteryKwh: 55,
    maxDcIntake: '70 kW',
    maxDcIntakeKw: 70,
    times: {
      kw30: '2h 2m',
      kw60: '1h 1m',
      kw120: '52m',
      kw160: '52m',
      kw180: '52m',
    },
    voltagePlatform: 'acti.ev 400V',
  },
  {
    id: 'atto-3',
    model: 'BYD Atto 3',
    brand: 'BYD',
    battery: '60.5 kWh',
    batteryKwh: 60.5,
    maxDcIntake: '80 kW',
    maxDcIntakeKw: 80,
    times: {
      kw30: '2h 14m',
      kw60: '1h 7m',
      kw120: '50m',
      kw160: '50m',
      kw180: '50m',
    },
    voltagePlatform: 'e-Platform 3.0 (400V Blade)',
  },
  {
    id: 'e-vitara',
    model: 'Maruti e Vitara',
    brand: 'Maruti',
    battery: '61 kWh',
    batteryKwh: 61,
    maxDcIntake: '100 kW',
    maxDcIntakeKw: 100,
    times: {
      kw30: '2h 16m',
      kw60: '1h 8m',
      kw120: '41m',
      kw160: '41m',
      kw180: '41m',
    },
    voltagePlatform: 'Heartect-e (400V)',
  },
  {
    id: 'harrier-ev',
    model: 'Tata Harrier EV',
    brand: 'Tata',
    battery: '65 kWh',
    batteryKwh: 65,
    maxDcIntake: '120 kW',
    maxDcIntakeKw: 120,
    times: {
      kw30: '2h 24m',
      kw60: '1h 12m',
      kw120: '36m',
      kw160: '36m',
      kw180: '36m',
    },
    voltagePlatform: 'acti.ev Plus (400V High-Current)',
  },
  {
    id: 'ioniq-5',
    model: 'Hyundai IONIQ 5',
    brand: 'Hyundai',
    battery: '72.6 kWh',
    batteryKwh: 72.6,
    maxDcIntake: '350 kW',
    maxDcIntakeKw: 350,
    times: {
      kw30: '2h 41m',
      kw60: '1h 21m',
      kw120: '40m',
      kw160: '30m',
      kw180: '27m',
    },
    highlight160: true,
    highlight180: true,
    voltagePlatform: 'E-GMP 800V Ultra-Fast Architecture',
  },
  {
    id: 'ev6',
    model: 'Kia EV6',
    brand: 'Kia',
    battery: '77.4 kWh',
    batteryKwh: 77.4,
    maxDcIntake: '350 kW',
    maxDcIntakeKw: 350,
    times: {
      kw30: '2h 52m',
      kw60: '1h 26m',
      kw120: '43m',
      kw160: '32m',
      kw180: '29m',
    },
    highlight160: true,
    highlight180: true,
    voltagePlatform: 'E-GMP 800V Ultra-Fast Architecture',
  },
  {
    id: 'be-6',
    model: 'Mahindra BE 6',
    brand: 'Mahindra',
    battery: '79 kWh',
    batteryKwh: 79,
    maxDcIntake: '175 kW',
    maxDcIntakeKw: 175,
    times: {
      kw30: '2h 56m',
      kw60: '1h 28m',
      kw120: '44m',
      kw160: '33m',
      kw180: '30m',
    },
    highlight160: true,
    highlight180: true,
    voltagePlatform: 'INGLO 800V High-Power Architecture',
  },
]

const brandFilters = [
  { id: 'all', label: 'All Models' },
  { id: 'Tata', label: 'Tata' },
  { id: 'Mahindra', label: 'Mahindra' },
  { id: 'Hyundai-Kia', label: 'Hyundai & Kia' },
  { id: 'BYD-Maruti', label: 'BYD & Maruti' },
]

export default function EVChargingReferenceGuide() {
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  const filteredData = useMemo(() => {
    return evChargingReferenceData.filter((item) => {
      // Brand filter
      let brandMatch = true
      if (selectedBrand === 'Tata') brandMatch = item.brand === 'Tata'
      else if (selectedBrand === 'Mahindra') brandMatch = item.brand === 'Mahindra'
      else if (selectedBrand === 'Hyundai-Kia') brandMatch = item.brand === 'Hyundai' || item.brand === 'Kia'
      else if (selectedBrand === 'BYD-Maruti') brandMatch = item.brand === 'BYD' || item.brand === 'Maruti'

      // Search filter
      const searchMatch =
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.battery.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.maxDcIntake.toLowerCase().includes(searchQuery.toLowerCase())

      return brandMatch && searchMatch
    })
  }, [selectedBrand, searchQuery])

  return (
    <section id="ev-charging-reference-guide" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* ─── SECTION HEADER & META ─── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F9EE] text-[#00D66C] text-xs font-black uppercase tracking-wider mb-1"
          >
            <Sparkles className="h-3.5 w-3.5" /> Benchmarked Charging Data
          </motion.div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            EV Charging Quick Reference Guide
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#0284C7]">
            Charging Time Estimates vs. DC Fast Charger Capacity
          </p>
        </div>

        {/* Right Meta Badges */}
        <div className="flex flex-col sm:flex-row md:flex-col md:items-end gap-1.5 text-xs text-slate-500 font-semibold shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold border border-slate-200">
            <SlidersHorizontal className="h-3.5 w-3.5 text-[#0284C7]" />
            Station Planning Reference
          </span>
          <span className="text-[11px] text-slate-400 font-medium pl-1">
            Investor & Infrastructure Insights
          </span>
        </div>
      </div>

      {/* ─── SEARCH & FILTER CONTROLS ─── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        {/* Brand Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
          {brandFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedBrand(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedBrand === tab.id
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search EV model or battery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00D66C]/40 focus:border-[#00D66C] transition-all"
          />
        </div>
      </div>

      {/* ─── MAIN CHARGING SPEED REFERENCE TABLE ─── */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
        
        {/* Scrollable Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[780px]">
            
            {/* Table Header (Deep Slate / Dark Navy matching reference) */}
            <thead>
              <tr className="bg-[#0B132A] text-white text-xs sm:text-sm font-black tracking-wide border-b border-slate-800">
                <th className="py-4 px-4 sm:px-6 w-[22%]">Car Model</th>
                <th className="py-4 px-3 sm:px-4 w-[11%]">Battery</th>
                <th className="py-4 px-3 sm:px-4 w-[13%]">Max DC Intake</th>
                <th className="py-4 px-3 sm:px-4 text-center w-[10%]">30 kW</th>
                <th className="py-4 px-3 sm:px-4 text-center w-[10%]">60 kW</th>
                <th className="py-4 px-3 sm:px-4 text-center w-[11%]">120 kW</th>
                <th className="py-4 px-3 sm:px-4 text-center w-[11%] bg-[#122244] border-x border-slate-700/50">
                  <div className="inline-flex flex-col items-center">
                    <span>160 kW</span>
                    <span className="text-[9px] font-extrabold text-[#00D66C] uppercase tracking-wider">Indish Standard</span>
                  </div>
                </th>
                <th className="py-4 px-3 sm:px-4 text-center w-[12%] bg-[#122244]/80">
                  <div className="inline-flex flex-col items-center">
                    <span>180 kW</span>
                    <span className="text-[9px] font-extrabold text-[#00D66C] uppercase tracking-wider">Ultra Hub</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm font-semibold text-slate-800">
              {filteredData.length > 0 ? (
                filteredData.map((row, idx) => {
                  const isHovered = hoveredRow === row.id

                  return (
                    <motion.tr
                      key={row.id}
                      onMouseEnter={() => setHoveredRow(row.id)}
                      onMouseLeave={() => setHoveredRow(null)}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03, duration: 0.3 }}
                      className={`transition-colors cursor-default ${
                        isHovered
                          ? 'bg-slate-50/90'
                          : idx % 2 === 0
                          ? 'bg-white'
                          : 'bg-[#FAFBFD]'
                      }`}
                    >
                      {/* Car Model Column */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex flex-col">
                          <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                            {row.model}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {row.voltagePlatform}
                          </span>
                        </div>
                      </td>

                      {/* Battery Column (Vibrant Blue accent as in reference) */}
                      <td className="py-4 px-3 sm:px-4 font-bold text-[#0284C7] whitespace-nowrap">
                        {row.battery}
                      </td>

                      {/* Max DC Intake */}
                      <td className="py-4 px-3 sm:px-4 font-bold text-slate-700 whitespace-nowrap">
                        {row.maxDcIntake}
                      </td>

                      {/* 30 kW Column */}
                      <td className="py-4 px-3 sm:px-4 text-center text-slate-600 font-medium whitespace-nowrap">
                        {row.times.kw30}
                      </td>

                      {/* 60 kW Column */}
                      <td className="py-4 px-3 sm:px-4 text-center text-slate-700 font-semibold whitespace-nowrap">
                        {row.times.kw60}
                      </td>

                      {/* 120 kW Column */}
                      <td className="py-4 px-3 sm:px-4 text-center text-slate-800 font-semibold whitespace-nowrap">
                        {row.times.kw120}
                      </td>

                      {/* 160 kW Column (Highlighted in light emerald green for 800V fast models) */}
                      <td
                        className={`py-4 px-3 sm:px-4 text-center whitespace-nowrap border-x border-slate-200/60 ${
                          row.highlight160
                            ? 'bg-[#E6F9EE] text-[#00A854] font-black'
                            : 'text-slate-800 font-semibold'
                        }`}
                      >
                        <span className="inline-flex items-center justify-center gap-1">
                          {row.times.kw160}
                          {row.highlight160 && (
                            <Zap className="h-3 w-3 fill-[#00D66C] text-[#00D66C] inline-block shrink-0" />
                          )}
                        </span>
                      </td>

                      {/* 180 kW Column (Highlighted in light emerald green for 800V fast models) */}
                      <td
                        className={`py-4 px-3 sm:px-4 text-center whitespace-nowrap ${
                          row.highlight180
                            ? 'bg-[#E6F9EE] text-[#00A854] font-black'
                            : 'text-slate-800 font-semibold'
                        }`}
                      >
                        <span className="inline-flex items-center justify-center gap-1">
                          {row.times.kw180}
                          {row.highlight180 && (
                            <Zap className="h-3 w-3 fill-[#00D66C] text-[#00D66C] inline-block shrink-0" />
                          )}
                        </span>
                      </td>
                    </motion.tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400 font-medium">
                    No EV models found matching "{searchQuery}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Visual Legend Note */}
        <div className="bg-slate-50 px-4 sm:px-6 py-3.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 font-semibold">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-[#E6F9EE] border border-[#00D66C]/40 inline-block" />
              <strong className="text-slate-700">Green Highlight:</strong> Sub-35m Ultra-Fast Charging (800V High-Speed Architecture)
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Clock className="h-3 w-3" /> Standard DC Fast Test Window: 10% → 80% State of Charge (SoC)
            </span>
          </div>

          <span className="text-[#0284C7] font-bold">
            Showing {filteredData.length} of {evChargingReferenceData.length} EV Models
          </span>
        </div>
      </div>

      {/* ─── KEY TAKEAWAYS FOR EV CHARGING STATION PLANNING (Bottom Callout Card) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md p-6 sm:p-8 border-l-[6px] border-l-[#0284C7] space-y-5"
      >
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-[#EBF5FB] text-[#0284C7] flex items-center justify-center shrink-0">
            <Info className="h-4 w-4" />
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 tracking-tight">
            Key Takeaways for EV Charging Station Planning
          </h3>
        </div>

        <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0" />
            <div>
              <strong className="text-slate-900 font-extrabold">Vehicle Acceptance Limits:</strong>{' '}
              A vehicle's charging speed is bottlenecked by its maximum DC intake rate (e.g., Nexon EV caps at 60 kW and XUV400 at 50 kW, yielding no extra speed benefit on &gt;60 kW guns).
            </div>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0" />
            <div>
              <strong className="text-slate-900 font-extrabold">Optimal Station Mix:</strong>{' '}
              60 kW to 120 kW dual-gun dispensers offer the best ROI for mainstream Indian market vehicles, while 160–180+ kW ultra-fast chargers future-proof locations for 800V platforms (IONIQ 5, EV6, BE 6).
            </div>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0" />
            <div>
              <strong className="text-slate-900 font-extrabold">Turnaround Efficiency:</strong>{' '}
              High-capacity chargers (120 kW+) reduce bay dwell time down to 30–45 minutes for next-gen models, doubling turnover capacity.
            </div>
          </li>
        </ul>

        {/* Quick Driver Action Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <CheckCircle2 className="h-4 w-4 text-[#00D66C]" />
            <span>Indish-e-Volt stations auto-negotiate maximum allowable power via intelligent OCPP 2.0.1 smart handshake.</span>
          </div>
          <span className="inline-flex items-center gap-1 font-bold text-[#00D66C]">
            <TrendingUp className="h-3.5 w-3.5" /> 160kW Liquid-Cooled Active Loop
          </span>
        </div>
      </motion.div>

    </section>
  )
}
