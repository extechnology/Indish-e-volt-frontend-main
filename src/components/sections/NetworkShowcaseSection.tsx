import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Sun, Building2, MapPin, ArrowUpRight, Navigation, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NetworkShowcaseSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-16 sm:py-24 px-5 sm:px-8 bg-slate-950 overflow-hidden text-white">
      {/* Background SVG Grid Pattern & Glows */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="ns-hex" width="60" height="52" patternUnits="userSpaceOnUse">
            <path d="M30 2 L55 17 L55 47 L30 62 L5 47 L5 17 Z" fill="none" stroke="#00D66C" strokeWidth="0.3" strokeOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ns-hex)" />
      </svg>

      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#059669]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#00D66C]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">

        {/* ── Section Header ── */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D66C]/15 border border-[#00D66C]/30 text-[#00D66C] text-xs font-extrabold uppercase tracking-wider"
            >
              <Zap className="h-3.5 w-3.5" /> India's Premier EV Network
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.2rem,5vw,3.75rem)] font-black tracking-tight leading-[1.05]"
            >
              Charging Infrastructure
              <br />
              <span className="text-[#00D66C]">Built for India.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-md font-medium"
          >
            Explore our state-of-the-art charging network spanning 40+ metro cities and highway corridors.
          </motion.p>
        </div>

        {/* ── Image Gallery Grid (Exact Layout of Image 4) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: 160kW Ultra-Fast Chargers (Spans 2 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 lg:col-span-2 h-[340px] sm:h-[400px] flex flex-col justify-between p-6 cursor-pointer"
          >
            <img
              src="/top-1.jpeg"
              alt="160kW Ultra-Fast Chargers"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Top Badge */}
            <div className="relative z-10 flex justify-end">
              <span className="inline-flex items-center gap-1 text-xs font-black px-3.5 py-1.5 rounded-full bg-[#00D66C] text-slate-950 shadow-lg">
                ⚡ Fastest in India
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                160kW Ultra-Fast Chargers
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Fastest commercially available speed in India
              </p>
              <Link to="/map" className="inline-flex items-center gap-1 text-xs font-bold text-[#00D66C] pt-1 group-hover:gap-2 transition-all">
                Explore <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Plug & Charge Technology (1 col on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 h-[340px] sm:h-[400px] flex flex-col justify-between p-6 cursor-pointer"
          >
            <img
              src="/top-2.jpeg"
              alt="Plug & Charge Technology"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative z-10 flex justify-end">
              <span className="inline-flex items-center gap-1 text-xs font-black px-3.5 py-1.5 rounded-full bg-[#059669] text-white shadow-lg">
                ✓ VIN Auto-Auth
              </span>
            </div>

            <div className="relative z-10 space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Plug & Charge Technology
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                Seamless. Secure. Effortless.
              </p>
            </div>
          </motion.div>

          {/* Cards 3 & 4 Stacked (1 col on LG) */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Card 3: Solar-Powered Stations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between h-[190px] hover:border-[#00D66C]/40 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <Sun className="h-6 w-6 text-[#00D66C]" />
                <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-[#00D66C]/15 border border-[#00D66C]/30 text-[#00D66C]">
                  🌿 100% Renewable
                </span>
              </div>
              <div>
                <h4 className="text-base font-black text-white">Solar-Powered Stations</h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  100% clean energy from on-site solar canopies and wind turbines.
                </p>
                <Link to="/sustainability" className="inline-flex items-center gap-1 text-xs font-bold text-[#00D66C] pt-2 group-hover:gap-2 transition-all">
                  Explore <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Fleet & Corporate Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between h-[190px] hover:border-[#00D66C]/40 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <Building2 className="h-6 w-6 text-[#00D66C]" />
                <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-[#059669]/20 border border-[#059669]/40 text-[#00D66C]">
                  🏢 Enterprise Ready
                </span>
              </div>
              <div>
                <h4 className="text-base font-black text-white">Fleet & Corporate Solutions</h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Centralised billing, dedicated account managers, and 99.9% SLA.
                </p>
                <Link to="/become-partner" className="inline-flex items-center gap-1 text-xs font-bold text-[#00D66C] pt-2 group-hover:gap-2 transition-all">
                  Explore <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Card 5: Highway Charging Hubs (Spans 2 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 lg:col-span-2 h-[260px] sm:h-[300px] flex flex-col justify-between p-6 cursor-pointer"
          >
            <img
              src="/bottom-2.jpeg"
              alt="Highway Charging Hubs"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative z-10 flex justify-end">
              <span className="inline-flex items-center gap-1 text-xs font-black px-3.5 py-1.5 rounded-full bg-[#059669] text-white shadow-lg">
                🛣️ 40+ Cities
              </span>
            </div>

            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl font-black text-white leading-tight">
                Highway Charging Hubs
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Strategically placed at motorway rest stops across 40+ metro corridors
              </p>
              <Link to="/map" className="inline-flex items-center gap-1 text-xs font-bold text-[#00D66C] pt-1 group-hover:gap-2 transition-all">
                Explore <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 6: Smart Navigation & Map with Phone Mockup (Spans 2 cols on LG) (Exact to Image 4 bottom-right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 lg:col-span-2 h-[260px] sm:h-[300px] flex items-center justify-between p-6 cursor-pointer"
          >
            <img
              src="/bottom-1.jpeg"
              alt="Smart Navigation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/10 to-transparent" />

            {/* Left Content */}
            <div className="relative z-10 space-y-3 max-w-[55%]">
              <span className="inline-flex items-center gap-1 text-xs font-black px-3.5 py-1.5 rounded-full bg-[#00D66C]/20 border border-[#00D66C]/40 text-[#00D66C]">
                📍 Find Nearby
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Smart Navigation & Map
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Real-time charger availability, routing, and trip planning.
              </p>
              <Link to="/map" className="inline-flex items-center gap-1 text-xs font-bold text-[#00D66C] group-hover:gap-2 transition-all">
                Explore <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Right Phone UI Mockup inside card (Exact to Image 4) */}
            <div className="relative z-10 w-[140px] sm:w-[180px] h-[220px] rounded-2xl bg-slate-950 border-2 border-slate-700 shadow-2xl overflow-hidden flex flex-col justify-between p-3 shrink-0">
              <div className="flex items-center justify-between text-[9px] text-slate-400 font-bold">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <Navigation className="h-2.5 w-2.5 text-[#00D66C]" />
                  <span>GPS</span>
                </div>
              </div>

              {/* Map Route Graphic */}
              <div className="my-auto relative h-24 w-full rounded-xl bg-slate-900 border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
                  <path d="M 10 50 Q 40 10 90 30" fill="none" stroke="#00D66C" strokeWidth="2.5" strokeDasharray="4 2" />
                  <circle cx="10" cy="50" r="4" fill="#00D66C" />
                  <circle cx="90" cy="30" r="4" fill="#00D66C" />
                </svg>
                <div className="relative z-10 text-center space-y-0.5">
                  <Compass className="h-4 w-4 text-[#00D66C] mx-auto animate-spin" style={{ animationDuration: '8s' }} />
                  <span className="text-[9px] font-black text-white block">Nearest Charger</span>
                  <span className="text-[8px] text-slate-400 block">2.4 km away</span>
                </div>
              </div>

              {/* Phone Action Button */}
              <div className="w-full py-1.5 rounded-lg bg-[#00D66C] text-slate-950 text-[10px] font-black text-center shadow-md">
                Start Navigation
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
