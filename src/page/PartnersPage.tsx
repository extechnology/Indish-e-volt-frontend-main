import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, CheckCircle2, ArrowRight, ShieldCheck, Zap, TrendingUp, 
  MapPin, BatteryCharging, Users, Target, Activity, Maximize2, X,
  Droplets, Cpu, Sparkles
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'

export default function PartnersPage() {
  const [activeDiagramTab, setActiveDiagramTab] = useState<'station' | 'exploded'>('station')
  const [modalDiagram, setModalDiagram] = useState<'station' | 'exploded' | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const marketIndicators = [
    { value: '1.58M', label: 'Charging market volume by 2035 (Projected ~22% CAGR)', prefix: '1.56M →' },
    { value: '7.29%', label: 'EV penetration of total auto sales in India, Q3FY26', prefix: '' },
    { value: '+51%', label: 'YOY Growth in EV car sales, January 2026', prefix: '' },
    { value: '29,000+', label: 'Public charging stations nationwide, in under 3 years', prefix: '5,151 →' },
    { value: '72,000', label: 'PM E-DRIVE target chargers, backed by ₹2,000 Cr allocation', prefix: '' },
    { value: '~29%', label: 'Of FAME-II sanctioned chargers still nonoperational', prefix: '' },
  ]

  const specs = [
    { label: 'Max Output Power', value: '180 kW', highlight: true },
    { label: 'Output Voltage', value: '200 – 1000 V DC', highlight: false },
    { label: 'Max Output Current', value: '520 A', highlight: false },
    { label: 'Connector Types', value: 'CCS2 + CHAdeMO (Dual Gun)', highlight: true },
    { label: 'Cable Technology', value: 'Liquid Cooled 5m Cables', highlight: false },
    { label: 'User Interface', value: '15" High-Bright Touchscreen', highlight: false },
    { label: 'Authentication', value: 'RFID / NFC / QR Mobile App', highlight: false },
    { label: 'Ingress Protection', value: 'IP65 Weather & Dust Resistant', highlight: true },
    { label: 'Operating Temp', value: '-30°C to +55°C (Coastal Ready)', highlight: false },
    { label: 'Network / Protocol', value: '4G / Ethernet / OCPP 1.6J & 2.0.1', highlight: false },
    { label: 'System Efficiency', value: '≥ 95% Peak Efficiency', highlight: true },
    { label: 'Dimensions (WxDxH)', value: '900 × 620 × 2150 mm', highlight: false },
  ]

  const hardwareHighlights = [
    {
      title: '180kW Dual Gun Fast Charging',
      desc: 'Liquid-cooled CCS2 & CHAdeMO dual guns ensure simultaneous fast-charging and complete vehicle compatibility.',
      icon: Zap,
    },
    {
      title: 'Engineered for Coastal Reliability',
      desc: 'Marine-grade anti-corrosion coating, stainless steel hardware, and IP65 sealing withstand humidity and heat.',
      icon: ShieldCheck,
    },
    {
      title: 'Advanced Liquid Cooling System',
      desc: 'Liquid-cooled cables and power modules prevent thermal throttling, sustaining continuous 520A output.',
      icon: Droplets,
    },
    {
      title: '100% Solar & Smart Grid Ready',
      desc: 'Seamless integration with rooftop solar PV, ESS battery storage, and 24/7 cloud remote telemetry via OCPP.',
      icon: Sparkles,
    },
  ]

  const explodedModules = [
    {
      title: 'Head Module',
      desc: 'Integrated high-visibility LED lighting, multi-status indicator, and illuminated branding.',
      tag: 'Display & Branding'
    },
    {
      title: 'Power Module Stack',
      desc: '180 kW DC high-density power stack with hot-swappable, scalable architecture.',
      tag: 'Scalable Core'
    },
    {
      title: 'Control & Safety Module',
      desc: 'Advanced control electronics, dual-layer insulation monitoring, and high-speed telemetry.',
      tag: 'Smart Logic'
    },
    {
      title: 'Liquid Cooled Dispenser',
      desc: 'Heavy-duty dual dispenser modules with active coolant flow for CCS2 & CHAdeMO guns.',
      tag: 'Thermal Management'
    },
  ]

  const futureReadyFeatures = [
    'Dynamic Load Management (DLM)',
    'OCPP 2.0.1 Future Protocol Ready',
    'Payment Terminal (RFID / Card / QR)',
    'MID-Certified Energy Metering',
    'Battery Buffer Storage Integration'
  ]

  const targetCustomers = [
    'Individual EV Owners', 'Fleet Operators', 'Corporate Campuses', 
    'Malls & Retail Hubs', 'Hotels & Hospitality', 'Highway Rest Stops', 
    'Residential Associations (RWAs)', 'Government & Public Agencies'
  ]

  return (
    <div className="w-full overflow-hidden bg-[#FAFCFA]">
      <PageHero
        badge="Indish Business Model"
        badgeIcon={<TrendingUp className="h-3.5 w-3.5 fill-[#00D66C]" />}
        title="INDIA'S EV CHARGING"
        titleHighlight="OPPORTUNITY."
        description="India's EV charging market is in a structural growth phase, driven by rapid EV adoption, strong government policy support, and rising private-sector participation."
        image="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Indish eVolt Partnership"
      />

      {/* Market Validation */}
      <section className="py-20 px-5 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 tracking-tight leading-tight"
          >
            Market <span className="text-[#059669]">Indicators.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketIndicators.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#00D66C] transition-all"
            >
              {stat.prefix && <span className="text-sm font-bold text-slate-400 block mb-1">{stat.prefix}</span>}
              <div className="text-4xl font-black text-[#059669] mb-3">{stat.value}</div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-3xl p-8 sm:p-12 border border-slate-800 text-white shadow-2xl relative overflow-hidden mt-12"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00D66C]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-2xl font-black text-[#00D66C] mb-4 flex items-center gap-3">
              <MapPin className="h-6 w-6" /> Regional Opportunity
            </h3>
            <p className="text-slate-300 leading-relaxed sm:text-lg">
              South India is the fastest-growing region for EV adoption, with Kerala posting one of the country's highest EV penetration rates. Government targets are ambitious but execution has lagged — creating room for a disciplined, partnership-driven operator like Indish eVolt to move quickly where public rollout has been slow.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
             <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-xs font-extrabold uppercase tracking-wider"
            >
              <Users className="h-3.5 w-3.5" /> Collaboration
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 tracking-tight leading-tight"
            >
              Partnership <span className="text-[#059669]">Models.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 shadow-xl"
            >
              <div className="h-16 w-16 rounded-2xl bg-[#E8F8C8] flex items-center justify-center mb-8">
                <Building2 className="h-8 w-8 text-[#059669]" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Location Partner</h3>
              <p className="text-[#059669] font-bold text-sm mb-6 uppercase tracking-wide">Partner with your space, power the future</p>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Provide your space for an Indish eVolt charging station and earn <strong className="text-slate-900">₹2 per unit charged</strong>, with no machine investment required.</p>
                <div className="h-px w-full bg-slate-100 my-4" />
                <h4 className="font-bold text-slate-900">Machine Investment Partner</h4>
                <p>Invest approximately <strong>₹30 lakh</strong> in one charging machine. After ₹7/unit KSEB cost and ₹5/unit maintenance, the investor receives <strong>₹13 per unit</strong> as the projected net share.</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm mt-4">
                  <span className="font-bold text-slate-900 block mb-1">Example Projection:</span>
                  10,000 units/month × ₹13 = ₹1.30 lakh/month
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 border border-slate-800 shadow-xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00D66C]/15 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-[#00D66C]/20 flex items-center justify-center mb-8">
                  <Activity className="h-8 w-8 text-[#00D66C]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Investment Partner</h3>
                <p className="text-[#00D66C] font-bold text-sm mb-6 uppercase tracking-wide">Grow with India's Green Energy Network</p>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>Invest in Indish eVolt's charging infrastructure: the EV charging machine, transformer and associated assets — protected under a legal investment agreement.</p>
                  <p>Investment Partners earn two ways:</p>
                  <ul className="list-disc pl-5 space-y-2 text-white font-medium">
                    <li>A fixed 1% monthly return on their invested amount</li>
                    <li>Plus a share of 20% of Indish eVolt's overall company profit</li>
                  </ul>
                  <p className="text-sm text-slate-400 mt-4 italic">
                    * Paid per the agreed schedule; investment rights are transferable to another eligible person, subject to agreement terms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hardware & Engineering Showcase */}
      <section className="py-20 px-5 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider"
          >
            <Zap className="h-3.5 w-3.5" /> Next-Gen Hardware & Engineering
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,4vw,3.25rem)] font-black text-slate-900 tracking-tight leading-tight"
          >
            Engineered for <span className="text-[#059669]">Speed & Scalability.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base max-w-2xl mx-auto"
          >
            Explore our commercial 180kW fast charger architecture and our next-generation exploded modular engineering stack.
          </motion.p>

          {/* Interactive View Switcher Tabs */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/60 shadow-inner mt-4">
            <button
              type="button"
              onClick={() => setActiveDiagramTab('station')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeDiagramTab === 'station'
                  ? 'bg-slate-950 text-[#00D66C] shadow-lg'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Zap className="h-4 w-4" /> 180kW Station Architecture
            </button>
            <button
              type="button"
              onClick={() => setActiveDiagramTab('exploded')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeDiagramTab === 'exploded'
                  ? 'bg-slate-950 text-[#00D66C] shadow-lg'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Cpu className="h-4 w-4" /> Exploded Modular Concept
            </button>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Product Image & Blueprint Viewer Card (6 cols) */}
          <motion.div
            key={activeDiagramTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 bg-slate-950 rounded-[2.5rem] p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#00D66C]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#059669]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D66C]/20 border border-[#00D66C]/40 text-[#00D66C] text-xs font-black uppercase tracking-wider">
                  {activeDiagramTab === 'station' ? (
                    <>
                      <Zap className="h-3 w-3" /> Commercial Deployment Model
                    </>
                  ) : (
                    <>
                      <Cpu className="h-3 w-3" /> Exploded Modular Architecture
                    </>
                  )}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {activeDiagramTab === 'station' ? 'IEC & OCPP 1.6J Certified' : 'Future-Ready Scalable Rack'}
                </span>
              </div>

              {/* Main Image Container with Hover Inspect Overlay */}
              <div 
                onClick={() => setModalDiagram(activeDiagramTab)}
                className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60 cursor-pointer group/img transition-all duration-300 hover:border-[#00D66C]/60 hover:shadow-2xl hover:shadow-[#00D66C]/10"
              >
                <img 
                  src={activeDiagramTab === 'station' ? '/indish-hardware-technology-180kw.webp' : '/indish-exploded-engineering-concept.webp'} 
                  alt={activeDiagramTab === 'station' ? 'Indish eVolt 180kW DC Fast Charger Technical Specifications' : 'Indish eVolt Exploded Modular Engineering Concept'} 
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 group-hover/img:scale-[1.02]"
                />

                {/* Hover Click-to-Enlarge Banner */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-[#00D66C] text-slate-950 px-5 py-2.5 rounded-full font-black text-xs flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <Maximize2 className="h-4 w-4" /> Click to Inspect Full Blueprint
                  </div>
                </div>
              </div>

              {/* Dual Thumbnail Switcher Bar */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveDiagramTab('station')}
                  className={`p-2.5 rounded-xl border flex items-center gap-3 transition-all text-left ${
                    activeDiagramTab === 'station'
                      ? 'bg-slate-900 border-[#00D66C] text-white shadow-md'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <img src="/indish-hardware-technology-180kw.webp" alt="Station Spec" className="w-10 h-10 object-contain rounded-lg bg-slate-950" />
                  <div>
                    <span className="text-xs font-bold block text-white">180kW Station</span>
                    <span className="text-[10px] text-slate-400">Technical Datasheet</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveDiagramTab('exploded')}
                  className={`p-2.5 rounded-xl border flex items-center gap-3 transition-all text-left ${
                    activeDiagramTab === 'exploded'
                      ? 'bg-slate-900 border-[#00D66C] text-white shadow-md'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <img src="/indish-exploded-engineering-concept.webp" alt="Exploded Spec" className="w-10 h-10 object-contain rounded-lg bg-slate-950" />
                  <div>
                    <span className="text-xs font-bold block text-white">Exploded Concept</span>
                    <span className="text-[10px] text-slate-400">Modular Stack</span>
                  </div>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setModalDiagram(activeDiagramTab)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-extrabold hover:bg-[#00D66C] hover:text-slate-950 hover:border-[#00D66C] transition-all"
              >
                <Maximize2 className="h-3.5 w-3.5" /> View High-Resolution Full Blueprint
              </button>
            </div>
          </motion.div>

          {/* Right: Dynamic Information based on Active Tab (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {activeDiagramTab === 'station' ? (
              <>
                              {/* Technical Specifications Matrix */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="text-lg font-black text-slate-900">Technical Specifications</h3>
                      <p className="text-xs text-slate-500">Commercial Standard Hardware Datasheet</p>
                    </div>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#E8F8C8] text-[#059669]">
                      180kW Model
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specs.map((spec, i) => (
                      <div 
                        key={i} 
                        className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                          spec.highlight 
                            ? 'bg-emerald-50/50 border-emerald-200' 
                            : 'bg-slate-50/70 border-slate-100'
                        }`}
                      >
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          {spec.label}
                        </span>
                        <span className={`text-sm font-black ${
                          spec.highlight ? 'text-[#059669]' : 'text-slate-900'
                        }`}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Key Advantages Cards */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hardwareHighlights.map((item, idx) => {
                    const IconComponent = item.icon
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00D66C] hover:shadow-md transition-all space-y-2"
                      >
                        <div className="h-10 w-10 rounded-xl bg-[#E8F8C8] flex items-center justify-center text-[#059669]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h4 className="font-black text-slate-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    )
                  })}
                </div> */}

              </>
            ) : (
              <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
                
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#00D66C]/20 flex items-center justify-center text-[#00D66C]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-white">Next-Gen Upgrade Capabilities</h3>
                      <p className="text-xs text-slate-400">Future-proofed hardware expansion options from exploded blueprint</p>
                    </div>
                  </div>
                  {/* <span className="text-xs font-black px-3 py-1 rounded-full bg-[#00D66C]/20 border border-[#00D66C]/40 text-[#00D66C]">
                    Future Architecture
                  </span> */}
                </div>

                {/* 5 Future-Ready Features with Detailed Descriptions */}
                <div className="space-y-6 sm:space-y-3">
                  <div className="flex items-center gap-3.5 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 hover:border-[#00D66C]/50 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#00D66C]/15 flex items-center justify-center text-[#00D66C] shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-black text-white">Dynamic Load Management (DLM)</h4>
                        <span className="text-[10px] font-bold text-[#00D66C] uppercase">Grid Balancing</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Intelligent real-time power redistribution across simultaneous vehicle sessions.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 hover:border-[#00D66C]/50 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#00D66C]/15 flex items-center justify-center text-[#00D66C] shrink-0">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-black text-white">OCPP 2.0.1 & ISO 15118</h4>
                        <span className="text-[10px] font-bold text-[#00D66C] uppercase">Plug & Charge</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Next-gen encryption, vehicle-to-grid (V2G) ready, and automated billing.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 hover:border-[#00D66C]/50 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#00D66C]/15 flex items-center justify-center text-[#00D66C] shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-black text-white">Integrated POS & Multi-Pay Terminal</h4>
                        <span className="text-[10px] font-bold text-[#00D66C] uppercase">Instant Access</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Universal tap-to-pay via credit/debit card, RFID, NFC, and dynamic QR.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 hover:border-[#00D66C]/50 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#00D66C]/15 flex items-center justify-center text-[#00D66C] shrink-0">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-black text-white">MID-Certified Energy Metering</h4>
                        <span className="text-[10px] font-bold text-[#00D66C] uppercase">Utility Grade</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Legal-for-trade revenue grade metering with precision per-kWh audit trails.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 hover:border-[#00D66C]/50 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#00D66C]/15 flex items-center justify-center text-[#00D66C] shrink-0">
                      <BatteryCharging className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-black text-white">Battery Buffer (BESS) Integration</h4>
                        <span className="text-[10px] font-bold text-[#00D66C] uppercase">Peak Shaving</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Direct DC microgrid buffering to minimize grid demand charges during peak traffic.</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Modular Architecture Highlights Metric Strip */}
                <div className="pt-2 border-t border-slate-800 space-y-3">
                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Power Stack</span>
                      <span className="text-xs font-black text-[#00D66C]">Hot-Swappable</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Scalability</span>
                      <span className="text-xs font-black text-white">Up to 360 kW</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Thermal</span>
                      <span className="text-xs font-black text-[#00D66C]">Dual Liquid Loop</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center italic">
                    * Modular rack architecture allows partners to scale output power without replacing floor foundations.
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* Blueprint Lightbox Modal */}
      <AnimatePresence>
        {modalDiagram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalDiagram(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-6 max-w-5xl w-full shadow-2xl relative space-y-4 my-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#00D66C] animate-pulse" />
                  <div>
                    <h3 className="text-white font-black text-base sm:text-lg">
                      {modalDiagram === 'station'
                        ? 'INDISH eVOLT 180kW Dual Gun DC Fast Charging Station'
                        : 'INDISH eVOLT DC Fast Charger — Exploded Engineering Concept'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {modalDiagram === 'station'
                        ? 'Complete Hardware Architecture & Commercial Technical Specifications'
                        : 'Internal Sub-System Breakdown & Scalable Power Architecture'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* In-Modal Toggle Buttons */}
                  <div className="hidden sm:flex items-center bg-slate-800 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setModalDiagram('station')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        modalDiagram === 'station' ? 'bg-[#00D66C] text-slate-950' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      180kW Station
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalDiagram('exploded')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        modalDiagram === 'exploded' ? 'bg-[#00D66C] text-slate-950' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Exploded Concept
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setModalDiagram(null)}
                    className="h-10 w-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Full Image Display */}
              <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-2 sm:p-4 max-h-[72vh]">
                <img
                  src={modalDiagram === 'station' ? '/indish-hardware-technology-180kw.webp' : '/indish-exploded-engineering-concept.webp'}
                  alt={modalDiagram === 'station' ? 'Indish eVolt 180kW DC Fast Charger Blueprint' : 'Indish eVolt Exploded Concept Blueprint'}
                  className="max-h-[68vh] w-auto object-contain rounded-xl"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-[#00D66C] font-bold">
                    <CheckCircle2 className="h-4 w-4" /> 100% Coastal Ruggedized
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Droplets className="h-4 w-4 text-[#00D66C]" /> Liquid Cooled CCS2 + CHAdeMO
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setModalDiagram(null)}
                  className="px-5 py-2 rounded-xl bg-[#00D66C] text-slate-950 font-black hover:bg-[#00C060] transition-all"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Competitive Landscape & Target Segments */}
      <section className="py-20 bg-slate-950 text-white px-5 sm:px-8 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00D66C]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D66C]/15 border border-[#00D66C]/30 text-[#00D66C] text-xs font-extrabold uppercase tracking-wider mb-6"
              >
                <Target className="h-3.5 w-3.5" /> Competitive Edge
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">Where Indish eVolt Stands Out</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                India's EV charging market includes established national networks (Tata Power EZ Charge, Statiq, Charge Zone, Ather Grid) as well as regional operators. Indish eVolt differentiates on flexible site deployment, transparent per-unit pricing, and a partnership-first model.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <ShieldCheck className="h-6 w-6 text-[#00D66C] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg">Profit-Sharing Partnerships</h4>
                    <p className="text-sm text-slate-400">Most competitors don't offer investors a direct stake in company revenue.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BatteryCharging className="h-6 w-6 text-[#00D66C] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg">Full Charger Range</h4>
                    <p className="text-sm text-slate-400">3.3 kW to 480 kW, covering every site type from residential to highway fast-charging.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Building2 className="h-6 w-6 text-[#00D66C] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg">Group Backing</h4>
                    <p className="text-sm text-slate-400">Operational discipline inherited from Indish World's 29-year track record.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 sm:p-10 border border-slate-800 shadow-xl">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <Users className="h-6 w-6 text-[#00D66C]" /> Target Customers & Segments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targetCustomers.map((customer, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-[#00D66C] shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{customer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-5 sm:px-8 max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 tracking-tight leading-tight"
          >
            Join the <span className="text-[#059669]">Movement.</span>
          </motion.h2>
          <p className="text-slate-600 max-w-xl mx-auto">Fill out your details below to get a free site assessment and customized host revenue share plan.</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[2rem] bg-white p-12 border border-slate-200 shadow-xl text-center space-y-4"
          >
            <CheckCircle2 className="mx-auto h-16 w-16 text-[#059669]" />
            <h2 className="text-2xl font-bold text-slate-900">Application Submitted!</h2>
            <p className="text-slate-500">
              Our infrastructure engineering team will review your application and contact you shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-8 sm:p-12 border border-slate-200 shadow-xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">First Name</label>
                <input type="text" required placeholder="Sarah" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Last Name</label>
                <input type="text" required placeholder="Jenkins" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Email Address</label>
                <input type="email" required placeholder="sarah@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Phone Number</label>
                <input type="tel" required placeholder="+91 90000 00000" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Partnership Interest</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none">
                <option>Location Partner (Host a Station)</option>
                <option>Machine Investment Partner</option>
                <option>Investment Partner (Profit Sharing)</option>
              </select>
            </div>

            <button type="submit" className="flex w-full items-center justify-center gap-2 py-4 rounded-xl bg-[#00D66C] text-slate-950 font-black text-sm hover:bg-[#00C060] hover:shadow-lg transition-all mt-4">
              <span>Submit Application</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </section>

    </div>
  )
}
