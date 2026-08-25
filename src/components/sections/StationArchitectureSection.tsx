import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, ShieldCheck, Droplets, Sparkles, Maximize2, X, 
  CheckCircle2, Cpu, Activity, Gauge, Thermometer, Radio
} from 'lucide-react'

export default function StationArchitectureSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  const openModal = () => {
    setZoomLevel(1)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setZoomLevel(1)
  }

  const specs = [
    { label: 'Max Output Power', value: '180 kW', highlight: true, icon: Zap },
    { label: 'Output Voltage Range', value: '200 – 1000 V DC', highlight: false, icon: Gauge },
    { label: 'Max Output Current', value: '520 A', highlight: false, icon: Activity },
    { label: 'Connector Types', value: 'Dual Gun (CCS2 + CHAdeMO)', highlight: true, icon: Cpu },
    { label: 'Cable & Thermal System', value: 'Liquid Cooled 5m Active Loop', highlight: false, icon: Droplets },
    { label: 'System Efficiency', value: '≥ 95% Peak Efficiency', highlight: true, icon: Sparkles },
    { label: 'Ingress Protection', value: 'IP65 Weather & Dust Sealed', highlight: true, icon: ShieldCheck },
    { label: 'Operating Climate', value: '-30°C to +55°C (Coastal Ready)', highlight: false, icon: Thermometer },
    { label: 'Network / Protocol', value: '4G / Ethernet / OCPP 1.6J & 2.0.1', highlight: false, icon: Radio },
    { label: 'User Interface', value: '15" High-Bright Touchscreen', highlight: false, icon: Activity },
  ]

  const keyHighlights = [
    {
      title: '180 kW High-Speed Dual Output',
      desc: 'Simultaneous rapid charging via dual liquid-cooled guns with real-time dynamic load sharing.',
      icon: Zap,
      tag: 'Dynamic DLM'
    },
    {
      title: 'Active Liquid Cooling Loop',
      desc: 'Continuous 520A delivery with active thermal dissipation, preventing throttling in tropical heat.',
      icon: Droplets,
      tag: 'Zero Throttling'
    },
    {
      title: 'Marine-Grade Coastal Shield',
      desc: 'IP65 certified casing with anti-corrosive multi-layer powder coating built for harsh coastal conditions.',
      icon: ShieldCheck,
      tag: 'IP65 Rugged'
    },
    {
      title: 'Smart Cloud & Solar Grid Ready',
      desc: 'Native OCPP 1.6J & 2.0.1 compliant with seamless integration for rooftop solar PV and BESS storage.',
      icon: Sparkles,
      tag: 'OCPP 2.0.1 & Solar'
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#F7FAF7] via-white to-[#F0F7ED] overflow-hidden">
      {/* Background Ambience & Grid Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00D66C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider border border-[#059669]/20 shadow-sm"
          >
            <Zap className="h-3.5 w-3.5 fill-[#00D66C]" /> Commercial Hardware Specifications
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-black text-slate-900 tracking-tight leading-tight"
          >
            180 KW Station <span className="text-[#059669]">Architecture.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Engineered for high-throughput public charging hubs and highway corridors. Explore the technical blueprint, liquid-cooled power delivery, and coastal-grade thermal architecture of Indish eVolt's 180kW station.
          </motion.p>
        </div>

        {/* ── Main Showcase Grid (Blueprint Image + Technical Specs) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: High-Tech Blueprint Image Frame (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-slate-950 rounded-[2.5rem] p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Ambient Interior Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D66C]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#059669]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-6 flex-1 flex flex-col justify-between">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D66C]/20 border border-[#00D66C]/40 text-[#00D66C] text-xs font-black uppercase tracking-wider">
                    <Zap className="h-3.5 w-3.5" /> High-Density DC Power
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold">
                    Dual Gun 180kW
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-[#00D66C] animate-ping" />
                  <span>IEC & OCPP Certified</span>
                </div>
              </div>

              {/* Main Image Frame with Smooth Hover Interaction */}
              <div
                onClick={openModal}
                className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800/90 cursor-pointer group/img transition-all duration-300 hover:border-[#00D66C]/70 hover:shadow-2xl hover:shadow-[#00D66C]/10 flex items-center justify-center p-3 sm:p-5 flex-1 min-h-[360px]"
              >
                <img
                  src="/indish-hardware-technology-180kw.webp"
                  alt="Indish 180 KW Station Architecture Blueprint & Technical Specifications"
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-[1.02]"
                  loading="eager"
                />

                {/* Hover Click-to-Inspect Action Overlay */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-[#00D66C] text-slate-950 px-5 py-2.5 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <Maximize2 className="h-4 w-4" /> Click to Inspect Full Blueprint
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800/60">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-[#00D66C] font-semibold">
                    <CheckCircle2 className="h-4 w-4" /> Liquid Cooled Dispenser
                  </span>
                  <span className="hidden sm:inline text-slate-700">•</span>
                  <span className="text-slate-300">520A Sustained Output</span>
                </div>

                <button
                  type="button"
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-black hover:bg-[#00D66C] hover:text-slate-950 hover:border-[#00D66C] transition-all"
                >
                  <Maximize2 className="h-3.5 w-3.5" /> High-Res Inspection
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Technical Datasheet & Specs Matrix (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white rounded-[2.5rem] p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Technical Specifications</h3>
                  <p className="text-xs text-slate-500 font-medium">Commercial Standard Station Datasheet</p>
                </div>
                <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] border border-[#059669]/20">
                  180 kW DC Model
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specs.map((spec, i) => {
                  const Icon = spec.icon
                  return (
                    <div
                      key={i}
                      className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-all ${
                        spec.highlight
                          ? 'bg-emerald-50/70 border-emerald-200 shadow-xs'
                          : 'bg-slate-50/80 border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${
                          spec.highlight ? 'bg-[#00D66C]/20 text-[#059669]' : 'bg-slate-200 text-slate-700'
                        }`}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider truncate">
                          {spec.label}
                        </span>
                      </div>
                      <span className={`text-sm font-black ${
                        spec.highlight ? 'text-[#059669]' : 'text-slate-900'
                      }`}>
                        {spec.value}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                <span>Certified for IEC 61851 & ISO 15118</span>
              </div>
              <span className="font-semibold text-slate-700">Dual Gun Simultaneous Charging</span>
            </div>
          </motion.div>

        </div>

        {/* ── 4 Architecture Highlights Cards Straight in a Row at the Last ── */}
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {keyHighlights.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-[#00D66C] transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-2xl bg-[#E8F8C8] flex items-center justify-center text-[#059669] group-hover:scale-105 transition-transform">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="font-black text-slate-900 text-base leading-snug group-hover:text-[#059669] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#059669]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Station Verified</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>

      {/* ── High-Resolution Blueprint Lightbox Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md p-3 sm:p-6 lg:p-8 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-6 max-w-6xl w-full shadow-2xl relative space-y-4 my-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#00D66C] animate-pulse" />
                  <div>
                    <h3 className="text-white font-black text-base sm:text-lg">
                      180 KW Station Architecture Blueprint
                    </h3>
                    <p className="text-xs text-slate-400">
                      Indish eVolt 180kW DC Fast Charger • Complete Engineering Schematic
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((prev) => (prev >= 1.5 ? 1 : prev + 0.25))}
                    className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all"
                  >
                    Zoom: {Math.round(zoomLevel * 100)}%
                  </button>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="h-10 w-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Full Image Display Container with optional pan/zoom */}
              <div className="rounded-2xl overflow-auto bg-slate-950 border border-slate-800 flex items-center justify-center p-2 sm:p-6 max-h-[72vh] min-h-[300px]">
                <img
                  src="/indish-hardware-technology-180kw.webp"
                  alt="Indish eVolt 180KW Station Architecture High Resolution Blueprint"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                  className="max-h-[66vh] w-auto object-contain rounded-xl transition-transform duration-200"
                />
              </div>

              {/* Modal Footer Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-400">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 text-[#00D66C] font-bold">
                    <CheckCircle2 className="h-4 w-4" /> IP65 Coastal Ruggedized
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Droplets className="h-4 w-4 text-[#00D66C]" /> Liquid Cooled Dual Dispenser
                  </span>
                  <span className="text-slate-400">
                    520A Peak Output Current
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:w-auto px-6 py-2 rounded-xl bg-[#00D66C] text-slate-950 font-black hover:bg-[#00C060] transition-all"
                >
                  Close Blueprint
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
