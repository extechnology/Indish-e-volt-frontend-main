import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, BatteryCharging, Users, MapPin, TrendingUp, ShieldCheck } from 'lucide-react'

const stats = [
  {
    value: 1480,
    suffix: '+',
    label: 'Active Chargers',
    desc: 'Across 40+ metro cities',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85',
  },
  {
    value: 350,
    suffix: 'kW',
    label: 'Max Charging Speed',
    desc: '80% charge in 15 mins',
    icon: BatteryCharging,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=85',
  },
  {
    value: 250,
    suffix: 'K+',
    label: 'EV Drivers Served',
    desc: 'And growing rapidly daily',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=85',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Metro Hubs Covered',
    desc: 'Expanding corridors monthly',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=85',
  },
]

const testimonials = [
  {
    quote: "Indish-e-Volt turned my road trip anxiety into pure confidence. Charged from 10% to 80% in just 18 minutes!",
    name: "Arjun Sharma",
    role: "Tesla Model 3 Owner",
    city: "Mumbai",
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    quote: "The app is brilliant — found a station 200m away and it was free and working. Never had a bad experience.",
    name: "Priya Kapoor",
    role: "Tata Nexon EV Owner",
    city: "Bangalore",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    quote: "As a fleet operator, Indish-e-Volt's uptime guarantee has been a game-changer. Zero downtime in 3 months.",
    name: "Rahul Verma",
    role: "Fleet Manager",
    city: "Delhi",
    avatar: "https://i.pravatar.cc/80?img=8",
  },
  {
    quote: "Stopped for lunch at a mall in Hyderabad and got a full charge by the time I finished. Absolutely seamless.",
    name: "Sneha Iyer",
    role: "Ather 450X Owner",
    city: "Hyderabad",
    avatar: "https://i.pravatar.cc/80?img=25",
  },
  {
    quote: "The pricing is transparent and the speed is unreal. Went from 15% to 90% in under 20 minutes. Incredible!",
    name: "Karan Mehta",
    role: "MG ZS EV Owner",
    city: "Pune",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    quote: "I manage a 60-vehicle EV fleet. Indish-e-Volt's fleet dashboard and bulk billing saved us 8 hours a week.",
    name: "Ananya Reddy",
    role: "Logistics Head",
    city: "Chennai",
    avatar: "https://i.pravatar.cc/80?img=44",
  },
]

/* ─── Count-Up Hook ─── */
function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const startTime = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return count
}

/* ─── Stat Card with Full Background Image Banner ─── */
function StatCard({ stat, idx }: { stat: typeof stats[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = stat.icon
  const count = useCountUp(stat.value, inView, 2000 + idx * 150)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl hover:shadow-2xl hover:border-[#00D66C]/60 transition-all duration-500 h-[400px] sm:h-[460px] lg:h-[490px] flex flex-col justify-between p-6 sm:p-8 cursor-pointer"
    >
      {/* FULL BACKGROUND IMAGE */}
      <img
        src={stat.image}
        alt={stat.label}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-90"
      />

      {/* Sleek Dark & Green Gradient Overlay to ensure maximum legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/90" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="h-11 w-11 rounded-2xl bg-[#00D66C]/20 border border-[#00D66C]/40 flex items-center justify-center text-[#00D66C] backdrop-blur-md shadow-md">
          <Icon className="h-5 w-5" />
        </div>
        <div className="inline-flex items-center gap-1 text-xs font-black text-[#00D66C] bg-slate-950/80 border border-[#00D66C]/30 px-3 py-1 rounded-full backdrop-blur-md">
          <TrendingUp className="h-3.5 w-3.5" />
          Growing
        </div>
      </div>

      {/* Bottom Content Row */}
      <div className="relative z-10 space-y-2">
        <div className="text-4xl sm:text-5xl font-black text-[#00D66C] tracking-tight tabular-nums drop-shadow-[0_0_25px_rgba(0,214,108,0.4)]">
          {count}{stat.suffix}
        </div>
        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">{stat.label}</h3>
        <p className="text-xs font-semibold text-slate-300 leading-snug">{stat.desc}</p>
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#00D66C]/50 transition-colors pointer-events-none" />
    </motion.div>
  )
}

/* ─── Testimonial Card ─── */
function TestimonialCard({ t, idx }: { t: typeof testimonials[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800/80 p-6 sm:p-7 shadow-xl hover:border-[#00D66C]/30 transition-all duration-400 flex flex-col gap-5 overflow-hidden"
    >
      <div className="absolute -top-2 right-5 text-[7rem] font-black text-[#00D66C]/8 leading-none select-none pointer-events-none">"</div>

      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-3.5 w-3.5 fill-[#00D66C]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

      <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
        <div className="relative shrink-0">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-[#00D66C]/30"
          />
          <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-[#00D66C] rounded-full border-2 border-slate-900 flex items-center justify-center">
            <ShieldCheck className="h-2.5 w-2.5 text-slate-950" />
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-white leading-tight">{t.name}</p>
          <p className="text-[11px] text-slate-400 mt-0.5">{t.role} · {t.city}</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function StatsAndTestimonialsSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#F2F9F1] via-[#FAFDF9] to-[#FFFFFF] overflow-hidden">
      {/* Modern Mesh Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#00D66C]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#059669]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto space-y-8 sm:space-y-12">

        {/* ── Header with minimal gap ── */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider border border-[#059669]/20"
          >
            <TrendingUp className="h-3.5 w-3.5" /> Network Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.4rem,5vw,3.75rem)] font-black text-slate-900 tracking-tight leading-tight"
          >
            Numbers That{' '}
            <span className="relative inline-block text-[#059669]">
              Speak.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={headerInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-[4px] rounded-full bg-[#00D66C]"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto font-medium leading-relaxed"
          >
            Our growing network of ultra-fast chargers is reshaping how <span className="font-extrabold text-[#059669]">India</span> drives.
          </motion.p>
        </div>

        {/* ── 4 Stat Cards with Increased Height & Width (TIGHT GAP) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-2">
          {stats.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} idx={idx} />
          ))}
        </div>

        {/* ── Testimonials Section ── */}
        <div className="space-y-6 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-slate-900 tracking-tight">
              What Our <span className="text-[#059669]">Drivers</span> Say
            </h3>
            <span className="text-xs font-bold text-slate-600 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full">
              ★ 4.9 avg rating · 12,000+ reviews
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={t.name} t={t} idx={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
