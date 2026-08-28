import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, ShieldCheck, Droplets, Sparkles, Maximize2, X, 
  CheckCircle2, Cpu, Activity, Gauge, Thermometer, Radio,
  Shield, Layers
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
    { label: 'MAX OUTPUT POWER', value: '160 kW', highlight: true, icon: Zap },
    { label: 'OUTPUT VOLTAGE RANGE', value: '200 – 1000 V DC', highlight: false, icon: Gauge },
    { label: 'MAX OUTPUT CURRENT', value: '520 A', highlight: false, icon: Zap },
    { label: 'CONNECTOR TYPES', value: 'Dual Gun (CCS2 + CHAdeMO)', highlight: true, icon: Cpu },
    { label: 'CABLE & THERMAL SYSTEM', value: 'Liquid Cooled 5m Active Loop', highlight: false, icon: Droplets, sub: '5m Active Loop' },
    { label: 'SYSTEM EFFICIENCY', value: '≥ 95% Peak Efficiency', highlight: true, icon: Sparkles, sub: 'Peak Efficiency' },
    { label: 'INGRESS PROTECTION', value: 'IP65 Weather & Dust Sealed', highlight: true, icon: ShieldCheck, sub: 'Weather & Dust Sealed' },
    { label: 'OPERATING CLIMATE', value: '-30°C to +55°C (Coastal Ready)', highlight: false, icon: Thermometer, sub: '(Coastal Ready)' },
    { label: 'NETWORK / PROTOCOL', value: '4G / Ethernet / OCPP 1.6J & 2.0.1', highlight: false, icon: Radio, sub: 'OCPP 1.6J & 2.0.1' },
    { label: 'USER INTERFACE', value: '15" High-Bright Touchscreen', highlight: false, icon: Activity, sub: 'Touchscreen' },
  ]

  const keyHighlights = [
    {
      title: '160 kW High-Speed Dual Output',
      desc: 'Simultaneous rapid charging via dual liquid-cooled guns with real-time dynamic load sharing.',
      icon: Zap,
      tag: 'DYNAMIC DLM'
    },
    {
      title: 'Active Liquid Cooling Loop',
      desc: 'Continuous 520A delivery with active thermal dissipation, preventing throttling in tropical heat.',
      icon: Droplets,
      tag: 'ZERO THROTTLING'
    },
    {
      title: 'Marine-Grade Coastal Shield',
      desc: 'IP65 certified casing with anti-corrosive metal, built for harsh coastal conditions.',
      icon: ShieldCheck,
      tag: 'IP65 RUGGED'
    },
    {
      title: 'Smart Cloud & Solar Grid Ready',
      desc: 'Native OCPP 1.6J & 2.0.1 compliant with seamless integration for rooftop solar PV and BESS storage.',
      icon: Sparkles,
      tag: 'OCPP 2.0.1 & SOLAR'
    },
  ]

  const bottomFeatures = [
    {
      icon: Layers,
      title: 'High Power Density',
      desc: 'Compact. Efficient. Scalable.'
    },
    {
      icon: Radio,
      title: 'Smart Connectivity',
      desc: 'Cloud, OCPP & Fleet Ready.'
    },
    {
      icon: Shield,
      title: 'Built for the Future',
      desc: 'Reliable. Sustainable. Powerful.'
    }
  ]

  return (
    <section className="relative py-20 sm:py-28 bg-[#040806] text-white overflow-hidden selection:bg-[#00D66C] selection:text-black">
      {/* Background Ambience, Radial Glows & Grid Accent */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-[#00D66C]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[500px] bg-[#059669]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00D66C_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* Main Expansive Container with Enhanced Max Width */}
      <div className="relative z-10 max-w-[1440px] 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12 sm:space-y-16">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#061D12] text-[#00D66C] text-xs font-black uppercase tracking-widest border border-[#00D66C]/30 shadow-[0_0_20px_rgba(0,214,108,0.15)]"
          >
            <Zap className="h-3.5 w-3.5 fill-[#00D66C] text-[#00D66C]" /> POWERING THE FUTURE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-black text-white tracking-tight leading-[1.08]"
          >
            160 kW Station <span className="text-[#00D66C] drop-shadow-[0_0_35px_rgba(0,214,108,0.35)]">Architecture.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-300/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal"
          >
            Engineered for high-throughput public charging hubs and highway corridors. Explore the technical blueprint, liquid-cooled power delivery, and coastal-grade thermal architecture of Indish eVolt's <span className="text-[#00D66C] font-semibold">160kW</span> station.
          </motion.p>
        </div>

        {/* ── Main Showcase Grid (Blueprint Hardware Card + Technical Specs Card) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 xl:gap-9 items-stretch">
          
          {/* Left Column: High-Tech Blueprint Image Frame (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#050C08]/95 rounded-[2.2rem] sm:rounded-[2.5rem] p-5 sm:p-7 md:p-8 border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between group backdrop-blur-md"
          >
            {/* Ambient Interior Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D66C]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#059669]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-6 flex-1 flex flex-col justify-between">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D66C]/15 border border-[#00D66C]/40 text-[#00D66C] text-xs font-black uppercase tracking-wider shadow-sm">
                    <Zap className="h-3.5 w-3.5 fill-[#00D66C]" /> HIGH-DENSITY DC POWER
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0A1610] border border-slate-800 text-slate-300 text-xs font-bold">
                    Dual Gun 160kW
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-[#0A1610] border border-slate-800/80 px-3 py-1.5 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-[#00D66C] shadow-[0_0_8px_#00D66C]" />
                  <span>IEC & OCPP Certified</span>
                </div>
              </div>

              {/* Main Image Frame with Smooth Hover Interaction */}
              <div
                onClick={openModal}
                className="relative rounded-2xl overflow-hidden bg-[#07120C]/80 border border-slate-800/90 cursor-pointer group/img transition-all duration-500 hover:border-[#00D66C]/70 hover:shadow-2xl hover:shadow-[#00D66C]/10 flex items-center justify-center p-2 sm:p-4 flex-1 min-h-[380px] sm:min-h-[440px]"
              >
                <img
                  src="/indish-hardware-technology-180kw.webp"
                  alt="Indish 160 KW Station Architecture Blueprint & Technical Specifications"
                  className="w-full h-auto max-h-[520px] object-contain rounded-xl transition-transform duration-700 ease-out group-hover/img:scale-[1.02]"
                  loading="eager"
                />

                {/* Hover Click-to-Inspect Action Overlay */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-[#00D66C] text-slate-950 px-5 py-2.5 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <Maximize2 className="h-4 w-4" /> Click to Inspect Full Blueprint
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300">
                  <span className="flex items-center gap-1.5 text-[#00D66C] font-bold">
                    <Droplets className="h-4 w-4 text-[#00D66C]" /> Liquid Cooled Dispenser
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300 font-medium">520A Sustained Output</span>
                </div>

                <button
                  type="button"
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-[#00D66C] text-slate-200 hover:text-white text-xs font-black hover:bg-[#00D66C]/15 transition-all shadow-sm"
                >
                  <Maximize2 className="h-3.5 w-3.5 text-[#00D66C]" /> High-Res Inspection
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Technical Datasheet & Specs Matrix (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-white text-slate-900 rounded-[2.2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-9 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            <div className="space-y-5 sm:space-y-6">
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-2xl sm:text-[1.7rem] font-black text-slate-950 tracking-tight">Technical Specifications</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Commercial Standard Station Datasheet</p>
                </div>
                <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] border border-[#059669]/20 shadow-xs">
                  160 kW DC Model
                </span>
              </div>

              {/* 10 Spec Items Grid (2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {specs.map((spec, i) => {
                  const Icon = spec.icon
                  return (
                    <div
                      key={i}
                      className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                        spec.highlight
                          ? 'bg-[#F2FAF4] border-emerald-200/80 shadow-xs hover:border-emerald-300'
                          : 'bg-[#F8FAFC] border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${
                          spec.highlight ? 'bg-[#00D66C]/20 text-[#059669]' : 'bg-slate-200/80 text-slate-700'
                        }`}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider truncate">
                          {spec.label}
                        </span>
                      </div>
                      
                      <div className="space-y-0.5">
                        {spec.label === 'CONNECTOR TYPES' ? (
                          <div>
                            <span className="text-sm font-black text-[#059669] block">Dual Gun</span>
                            <span className="text-xs font-bold text-[#059669]">(CCS2 + CHAdeMO)</span>
                          </div>
                        ) : spec.label === 'CABLE & THERMAL SYSTEM' ? (
                          <div>
                            <span className="text-sm font-black text-slate-900 block">Liquid Cooled</span>
                            <span className="text-xs font-semibold text-slate-600">5m Active Loop</span>
                          </div>
                        ) : spec.label === 'SYSTEM EFFICIENCY' ? (
                          <div>
                            <span className="text-sm font-black text-[#059669] block">≥ 95%</span>
                            <span className="text-xs font-bold text-[#059669]">Peak Efficiency</span>
                          </div>
                        ) : spec.label === 'INGRESS PROTECTION' ? (
                          <div>
                            <span className="text-sm font-black text-[#059669] block">IP65</span>
                            <span className="text-xs font-semibold text-slate-700">Weather & Dust Sealed</span>
                          </div>
                        ) : spec.label === 'OPERATING CLIMATE' ? (
                          <div>
                            <span className="text-sm font-black text-slate-900 block">-30°C to +55°C</span>
                            <span className="text-xs font-semibold text-slate-600">(Coastal Ready)</span>
                          </div>
                        ) : spec.label === 'NETWORK / PROTOCOL' ? (
                          <div>
                            <span className="text-sm font-black text-slate-900 block">4G / Ethernet /</span>
                            <span className="text-xs font-semibold text-slate-600">OCPP 1.6J & 2.0.1</span>
                          </div>
                        ) : spec.label === 'USER INTERFACE' ? (
                          <div>
                            <span className="text-sm font-black text-slate-900 block">15" High-Bright</span>
                            <span className="text-xs font-semibold text-slate-600">Touchscreen</span>
                          </div>
                        ) : (
                          <span className={`text-sm sm:text-base font-black ${
                            spec.highlight ? 'text-[#059669]' : 'text-slate-900'
                          }`}>
                            {spec.value}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bottom Footer inside White Card */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                <span className="font-semibold">Certified for IEC 61851 & ISO 15118</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Zap className="h-4 w-4 text-[#059669]" />
                <span>Dual Gun Simultaneous Charging</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── 4 Architecture Highlights Cards (Dark High-Tech Glass) ── */}
        <div className="pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {keyHighlights.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#07100B]/95 p-6 rounded-3xl border border-slate-800/90 hover:border-[#00D66C]/60 shadow-lg hover:shadow-[0_12px_32px_rgba(0,214,108,0.12)] transition-all duration-400 flex flex-col justify-between space-y-4 group backdrop-blur-md"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-2xl bg-[#00D66C]/15 border border-[#00D66C]/30 flex items-center justify-center text-[#00D66C] group-hover:scale-105 transition-transform duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#0A1610] text-slate-300 border border-slate-800">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="font-black text-white text-base leading-snug group-hover:text-[#00D66C] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold text-[#00D66C]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Station Verified</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Bottom Ribbon Bar (4-Column Feature & Brand Strip) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#060D08]/95 border border-slate-800/90 rounded-2xl sm:rounded-full p-4 sm:px-8 sm:py-5 shadow-2xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#00D66C]/10 border border-[#00D66C]/25 flex items-center justify-center shrink-0 text-[#00D66C]">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-white font-black text-sm">High Power Density</h5>
                <p className="text-slate-400 text-xs font-medium">Compact. Efficient. Scalable.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#00D66C]/10 border border-[#00D66C]/25 flex items-center justify-center shrink-0 text-[#00D66C]">
                <Radio className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-white font-black text-sm">Smart Connectivity</h5>
                <p className="text-slate-400 text-xs font-medium">Cloud, OCPP & Fleet Ready.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#00D66C]/10 border border-[#00D66C]/25 flex items-center justify-center shrink-0 text-[#00D66C]">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-white font-black text-sm">Built for the Future</h5>
                <p className="text-slate-400 text-xs font-medium">Reliable. Sustainable. Powerful.</p>
              </div>
            </div>

            {/* Brand Logo & Tagline */}
            <div className="flex items-center justify-start lg:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <img
                  src="/Updated-INDISH-LOGO.png"
                  alt="Indish eVolt"
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* ── High-Resolution Blueprint Lightbox Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md p-3 sm:p-6 lg:p-8 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#07100B] border border-slate-700/90 rounded-3xl p-4 sm:p-6 max-w-6xl w-full shadow-2xl relative space-y-4 my-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#00D66C] shadow-[0_0_8px_#00D66C]" />
                  <div>
                    <h3 className="text-white font-black text-base sm:text-lg">
                      160 KW Station Architecture Blueprint
                    </h3>
                    <p className="text-xs text-slate-400">
                      Indish eVolt 160kW DC Fast Charger • Complete Engineering Schematic
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

              {/* Full Image Display Container with pan/zoom */}
              <div className="rounded-2xl overflow-auto bg-black/90 border border-slate-800 flex items-center justify-center p-2 sm:p-6 max-h-[72vh] min-h-[300px]">
                <img
                  src="/indish-hardware-technology-180kw.webp"
                  alt="Indish eVolt 160KW Station Architecture High Resolution Blueprint"
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
                  className="w-full sm:w-auto px-6 py-2 rounded-xl bg-[#00D66C] text-slate-950 font-black hover:bg-[#00C060] transition-all shadow-md"
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
