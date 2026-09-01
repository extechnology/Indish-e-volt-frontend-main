import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Zap, Users, MapPin, BatteryCharging, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const leftFeatures = [
  {
    icon: ShieldCheck,
    title: 'Reliability Guaranteed',
    desc: 'Forget broken chargers and wasted trips. Our stations feature proactive diagnostics and 24/7 remote monitoring to ensure maximum uptime, delivering the power you need, exactly when you expect it.',
  },
  {
    icon: Zap,
    title: 'Pioneering Fast-Charge Speed',
    desc: 'Our liquid-cooled 160kW CCS2 dispensers pump up to 400 miles of range per hour — the fastest commercially available charging technology on Indian roads today.',
  },
  {
    icon: BatteryCharging,
    title: 'Smart Energy Management',
    desc: 'AI-powered load balancing ensures every vehicle gets optimal charging speed. Our BESS integration stores renewable energy and delivers peak performance even during grid fluctuations.',
  },
]

const rightFeatures = [
  {
    icon: Users,
    title: 'The Simplest User Experience',
    desc: 'Charging should be effortless. From our intuitive mobile app for locating and payment to the simple plug-and-charge interface at the station, we make powering your journey seamless and hassle-free.',
  },
  {
    icon: MapPin,
    title: 'Strategic, Accessible Locations',
    desc: 'We place our stations where you need them most. Find Indish-e-Volt chargers strategically located at key commercial hubs and major travel routes for optimal convenience and minimal detours.',
  },

]

// Animated electric SVG background
function ElectricBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wcu-glow1" cx="20%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#00D66C" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#00D66C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wcu-glow2" cx="80%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0" />
        </radialGradient>
        <pattern id="wcu-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00D66C" strokeWidth="0.3" strokeOpacity="0.12" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wcu-grid)" />
      <rect width="100%" height="100%" fill="url(#wcu-glow1)" />
      <rect width="100%" height="100%" fill="url(#wcu-glow2)" />
      {/* animated pulse lines */}
      <motion.line
        x1="0" y1="30%" x2="100%" y2="30%"
        stroke="#00D66C" strokeWidth="0.5" strokeOpacity="0.15"
        strokeDasharray="8 20"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      <motion.line
        x1="0" y1="70%" x2="100%" y2="70%"
        stroke="#059669" strokeWidth="0.5" strokeOpacity="0.12"
        strokeDasharray="12 24"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: 200 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  )
}

function FeatureItem({
  icon: Icon,
  title,
  desc,
  idx,
}: {
  icon: typeof ShieldCheck
  title: string
  desc: string
  idx: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group flex gap-4 pb-8 border-b border-slate-200/70 last:border-0 last:pb-0"
    >
      <div className="shrink-0 mt-0.5 h-11 w-11 rounded-2xl bg-[#E6F9EE] flex items-center justify-center text-[#059669] group-hover:bg-[#00D66C] group-hover:text-slate-950 transition-all duration-300 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

function RightFeatureItem({
  icon: Icon,
  title,
  desc,
  idx,
}: {
  icon: typeof ShieldCheck
  title: string
  desc: string
  idx: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group flex gap-4 pb-8 border-b border-slate-200/70 last:border-0 last:pb-0"
    >
      <div className="shrink-0 mt-0.5 h-11 w-11 rounded-2xl bg-[#E6F9EE] flex items-center justify-center text-[#059669] group-hover:bg-[#00D66C] group-hover:text-slate-950 transition-all duration-300 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUsSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-14 sm:py-14 px-5 sm:px-8 bg-white overflow-hidden">
      <ElectricBg />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* ─── Header ─── */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider"
          >
            <Zap className="h-3.5 w-3.5 fill-[#059669]" /> Your Complete Charging Solution
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black text-slate-900 tracking-tight leading-tight"
          >
            Why Choose{' '}
            <span
              className="relative inline-block"
              style={{ color: '#059669' }}
            >
              Us?
              <motion.span
                initial={{ scaleX: 0 }}
                animate={headerInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-[#00D66C]"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Indish-e-Volt isn't just a charger, it's a commitment to superior service. We combine the fastest
            technology, a dependable network, and a genuinely user-centric experience to make your
            transition to electric seamless and worry-free.
          </motion.p>
        </div>

        {/* ─── Top Row: Left features + Right image ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left features */}
          <div className="space-y-3 order-2 lg:order-1">
            {leftFeatures.map((f, idx) => (
              <FeatureItem key={f.title} icon={f.icon} title={f.title} desc={f.desc} idx={idx} />
            ))}
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img
              src="/why-us-1.jpeg"
              alt="Ultra-fast EV charging station with electric vehicle"
              className="w-full h-full object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex flex-col gap-0.5 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5"
              >
                <span className="text-xs font-bold text-[#00D66C]">⚡ 160kW Ultra-Fast</span>
                <span className="text-[11px] text-slate-300">80% in 15 mins · 99.9% Uptime</span>
              </motion.div>
            </div>
            {/* Lime glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* ─── Bottom Row: Left image + Right features ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img
              src="/why-us-2.jpeg"
              alt="Hand plugging EV charging connector"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex flex-col gap-0.5 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5"
              >
                <span className="text-xs font-bold text-[#00D66C]">✅ Simple Plug &amp; Charge</span>
                <span className="text-[11px] text-slate-300">Auto-authenticated via VIN</span>
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right features */}
          <div className="space-y-3">
            {rightFeatures.map((f, idx) => (
              <RightFeatureItem key={f.title} icon={f.icon} title={f.title} desc={f.desc} idx={idx} />
            ))}
          </div>
        </div>

        {/* ─── Bottom CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/map"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#059669] text-white font-extrabold text-sm hover:bg-[#047857] hover:shadow-[0_0_36px_rgba(5,150,105,0.55)] active:scale-95 transition-all duration-300"
          >
            Find a Station Near You
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200 active:scale-95 transition-all duration-300"
          >
            Learn About Us
          </Link>
        </motion.div>

      </div>

    </section>
  )
}
