import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Step {
  step: string
  label: string
  title: string
  desc: string
  image: string
  badge: string
  badgeDetail: string
  accent: string
}

const steps: Step[] = [
  {
    step: '01',
    label: 'Arrive & Plug In',
    title: 'Pull up & connect',
    desc: 'Drive up to any Indish-e-Volt 350 kW station. Grab the liquid-cooled CCS2 handle, plug it into your EV, and the session starts in seconds — no app required.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    badge: '🔌  Plug & Charge Ready',
    badgeDetail: 'Auto-authenticated via vehicle VIN',
    accent: '#00D66C',
  },
  {
    step: '02',
    label: 'Charge at Full Speed',
    title: 'Power up fast',
    desc: 'Your EV drinks up to 350 kW of clean solar power. Watch live kW rate, battery SoC %, and estimated range added — all on the station screen or our app.',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80',
    badge: '⚡  285 kW · 84% SoC',
    badgeDetail: '12 mins to full · 100% Solar',
    accent: '#00D66C',
  },
  {
    step: '03',
    label: 'Pay & Drive On',
    title: 'Unplug & go',
    desc: 'Auto-billing hits your digital wallet or fleet account the moment you unplug. Grab your receipt, plan your next stop on the app, and enjoy the open road.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
    badge: '✅  Session Complete',
    badgeDetail: '$8.40 charged · +214 mi range',
    accent: '#00D66C',
  },
]

/* ── animated SVG arrow that renders between cards ──────────── */
function FlowArrow({ delay }: { delay: number }) {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center relative self-start mt-28 -mx-3 z-10 pointer-events-none">
      <svg
        width="80"
        height="36"
        viewBox="0 0 80 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* dashed path */}
        <motion.path
          d="M 0 18 C 20 18, 20 6, 40 6 C 60 6, 60 30, 80 30"
          stroke="#00D66C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 7"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* arrowhead */}
        <motion.path
          d="M 72 24 L 80 30 L 71 34"
          stroke="#00D66C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 1.0 }}
        />
        {/* traveling dot */}
        <motion.circle r="4" fill="#00D66C">
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            path="M 0 18 C 20 18, 20 6, 40 6 C 60 6, 60 30, 80 30"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.05;0.9;1"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </motion.circle>
      </svg>
    </div>
  )
}

/* ── single step card ───────────────────────────────────────── */
function StepCard({ step, idx }: { step: Step; idx: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-5 flex-1 min-w-0"
    >
      {/* ── Image Card ─── */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/4] bg-slate-200 shadow-lg">
        {/* background image */}
        <img
          src={step.image}
          alt={step.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />

        {/* dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Step number watermark */}
        <div className="absolute top-4 left-4">
          <span
            className="text-6xl font-black leading-none select-none"
            style={{
              color: 'rgba(168,240,0,0.80)', // Increased opacity
              fontSize: 'clamp(3rem,6vw,4.5rem)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {step.step}
          </span>
        </div>

        {/* Floating badge overlay (bottom of image) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 + idx * 0.15, duration: 0.6 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <div className="inline-flex flex-col gap-0.5 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5 max-w-full">
            <span className="text-xs sm:text-sm font-bold text-[#00D66C] leading-snug truncate">
              {step.badge}
            </span>
            <span className="text-[11px] text-slate-300 leading-snug truncate">
              {step.badgeDetail}
            </span>
          </div>
        </motion.div>

      </div>

      {/* ── Text below card ─── */}
      <div className="space-y-2 px-1">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#059669]">
          {step.label}
        </p>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
          {step.title}
        </h3>
        <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed max-w-xs">
          {step.desc}
        </p>
      </div>

      {/* Mobile connector line below (between steps) */}
      {idx < steps.length - 1 && (
        <div className="lg:hidden flex items-center gap-3 px-1 pb-2">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
            style={{ originX: 0 }}
            className="flex-1 h-px bg-gradient-to-r from-[#00D66C]/60 to-transparent"
          />
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0">
            <motion.path
              d="M 4 11 L 18 11 M 13 6 L 18 11 L 13 16"
              stroke="#00D66C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 + idx * 0.1 }}
            />
          </svg>
        </div>
      )}
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────────────── */
export default function HowItWorksSection() {
  return (
    <section className="relative py-14 sm:py-16 px-5 sm:px-8 lg:px-12 bg-[#F6FAF6] overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14 sm:mb-20 space-y-3"
        >
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#059669]">
            How it works
          </span>
          <h2
            className="text-[clamp(2rem,5vw,3.75rem)] font-black tracking-tight text-slate-900 leading-tight"
          >
            Charged up,{' '}
            <span className="relative inline-block">
              in three steps.
              {/* underline accent */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-[#00D66C]"
              />
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            No app, no membership card, no hassle — just clean, ultra-fast electrons delivered straight to your EV.
          </p>
        </motion.div>

        {/* ── Steps Row (cards + arrows) ─── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
          {steps.map((step, idx) => (
            <>
              <StepCard key={step.step} step={step} idx={idx} />
              {idx < steps.length - 1 && <FlowArrow key={`arrow-${idx}`} delay={0.6 + idx * 0.2} />}
            </>
          ))}
        </div>

        {/* ── Bottom CTA strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/map"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 text-white font-extrabold text-sm hover:bg-slate-800 hover:shadow-lg transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D66C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D66C]" />
            </span>
            Find a Station Near You
          </a>
          <span className="text-xs text-slate-400 font-medium">1,400+ stations · Available 24/7</span>
        </motion.div>

      </div>
    </section>
  )
}