import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, CreditCard, Bell, Route, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const appFeatures = [
  {
    icon: Route,
    title: 'Smart Route Planning',
    desc: 'Plan your entire journey with automatic charging stops. Our AI calculates the optimal route and reserves stations in advance so you never wait.',
    accent: '#00D66C',
  },
  {
    icon: Bell,
    title: 'Real-Time Notifications',
    desc: 'Get push alerts when your charge is ready, when a nearby station becomes available, or when our new hubs open in your area.',
    accent: '#059669',
  },
  {
    icon: CreditCard,
    title: 'Auto-Billing & Wallet',
    desc: 'Your digital wallet auto-charges after every session. Get itemized receipts, track monthly spend, and manage fleet billing from one dashboard.',
    accent: '#00D66C',
  },
]

function FeatureItem({ feature, idx }: { feature: typeof appFeatures[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group flex gap-5 p-5 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm hover:border-[#00D66C]/40 hover:shadow-lg hover:shadow-[#00D66C]/10 transition-all duration-300"
    >
      <div
        className="shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110"
        style={{ background: `${feature.accent}18`, border: `1.5px solid ${feature.accent}35` }}
      >
        <Icon className="h-5 w-5" style={{ color: feature.accent }} />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-black text-slate-900 tracking-tight">{feature.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  )
}

export default function AppFeaturesSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-slate-950 overflow-hidden">
      {/* Rich dark background SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="app-center-glow" cx="60%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#00D66C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00D66C" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="app-left-glow" cx="10%" cy="80%" r="35%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0" />
          </radialGradient>
          <pattern id="app-hex-grid" width="60" height="52" patternUnits="userSpaceOnUse">
            <path
              d="M30 2 L55 17 L55 47 L30 62 L5 47 L5 17 Z"
              fill="none" stroke="#00D66C" strokeWidth="0.3" strokeOpacity="0.07"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#app-hex-grid)" />
        <rect width="100%" height="100%" fill="url(#app-center-glow)" />
        <rect width="100%" height="100%" fill="url(#app-left-glow)" />
        {/* Animated circuit lines */}
        <motion.path
          d="M 0 200 H 300 V 350 H 600 V 200 H 900"
          stroke="#00D66C" strokeWidth="0.8" strokeOpacity="0.15" fill="none" strokeDasharray="6 14"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -400 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 0 500 H 400 V 350 H 700 V 500 H 1200"
          stroke="#059669" strokeWidth="0.8" strokeOpacity="0.12" fill="none" strokeDasharray="8 18"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 400 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            {/* Glow behind phone */}
            <div className="absolute w-64 h-64 bg-[#00D66C]/20 rounded-full blur-[80px]" />

            {/* Phone Frame */}
            <div className="relative z-10 w-[260px] sm:w-[300px]">
              <div className="rounded-[3rem] overflow-hidden border-[6px] border-slate-700 shadow-2xl shadow-black/80 bg-slate-900">
                {/* Notch */}
                <div className="relative bg-slate-950 pt-6 pb-2 px-4 flex justify-center">
                  <div className="w-24 h-5 bg-slate-900 rounded-full" />
                </div>
                {/* App UI */}
                <div className="bg-slate-900 px-4 pb-6 space-y-4">
                  {/* Status bar */}
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1">
                    <span>9:41</span>
                    <span>◼◼◼</span>
                  </div>
                  {/* App header */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#00D66C]">Good Morning, Arjun</p>
                    <h4 className="text-lg font-black text-white leading-tight">Find Your <span className="text-[#00D66C]">Charge.</span></h4>
                  </div>
                  {/* Map placeholder */}
                  <div className="rounded-2xl overflow-hidden h-40 bg-slate-800 relative">
                    <img
                      src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80"
                      alt="Map"
                      className="w-full h-full object-cover opacity-60"
                    />
                    {/* Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                      <div className="w-5 h-5 bg-[#00D66C] rounded-full border-2 border-white shadow-lg shadow-[#00D66C]/50" />
                      <div className="w-2 h-2 bg-[#00D66C]/40 rounded-full mx-auto -mt-0.5" />
                    </div>
                    {/* "Nearest" badge */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-black/70 backdrop-blur-md rounded-xl px-3 py-1.5 flex items-center justify-between">
                        <span className="text-[10px] text-white font-bold">MG Road Hub</span>
                        <span className="text-[10px] text-[#00D66C] font-extrabold">0.3 km</span>
                      </div>
                    </div>
                  </div>
                  {/* Charging status card */}
                  <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400">Active Session</span>
                      <span className="text-[10px] font-extrabold text-[#00D66C]">285 kW ⚡</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00D66C] to-[#059669] rounded-full"
                        initial={{ width: '45%' }}
                        animate={{ width: ['45%', '72%', '45%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                      <span>72% SoC</span>
                      <span>~12 min left</span>
                    </div>
                  </div>
                  {/* Quick action buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    {['Route', 'Pay', 'History'].map((label) => (
                      <div key={label} className="bg-slate-800 rounded-xl py-2 text-center">
                        <span className="text-[9px] font-extrabold text-slate-300">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Reflection */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#00D66C]/10 rounded-full blur-xl" />
            </div>

            {/* Floating badges around phone */}
            <motion.div
              className="absolute -top-4 -right-2 sm:-right-8 bg-white rounded-2xl px-3 py-2 shadow-xl border border-slate-200"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-[10px] font-extrabold text-slate-900">⚡ 80% in 15 min</p>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-2 sm:-left-8 bg-slate-900 border border-[#00D66C]/30 rounded-2xl px-3 py-2 shadow-xl"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <p className="text-[10px] font-extrabold text-[#00D66C]">✅ 99.9% Uptime</p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text + Features */}
          <div className="space-y-8 order-1 lg:order-2">
            <div ref={headerRef} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D66C]/15 border border-[#00D66C]/25 text-[#00D66C] text-xs font-extrabold uppercase tracking-wider"
              >
                <Smartphone className="h-3.5 w-3.5" /> Mobile App Experience
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2rem,4.5vw,3.25rem)] font-black text-white tracking-tight leading-tight"
              >
                Charge Smarter.
                <br />
                <span className="text-[#00D66C]">Drive Farther.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md"
              >
                The Indish-e-Volt app puts a complete charging ecosystem right in your pocket — real-time availability, route planning, auto-billing, and station booking all in one place.
              </motion.p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              {appFeatures.map((feature, idx) => (
                <FeatureItem key={feature.title} feature={feature} idx={idx} />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/drivers"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00D66C] text-slate-950 font-extrabold text-sm hover:bg-[#00C060] hover:shadow-[0_0_36px_rgba(0,214,108,0.55)] active:scale-95 transition-all duration-300 group"
              >
                Explore Driver Benefits
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/map"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 text-white font-bold text-sm hover:border-slate-500 hover:bg-white/5 active:scale-95 transition-all duration-300"
              >
                View Live Map
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
