import { useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Zap, ShieldCheck, Compass, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const stats = [
    { value: '460', unit: 'MI', label: 'Est. Range' },
    { value: '1.99', unit: 'SEC', label: '0–60 MPH*' },
    { value: '200', unit: 'MPH', label: 'Top Speed' },
  ]

  const features = [
    { icon: Zap, label: '80% in 15 Mins' },
    { icon: ShieldCheck, label: '99.9% Uptime' },
    { icon: Compass, label: '100% Solar' },
  ]

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden">
      {/* Full-bleed video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/Indish_ad.mp4"
      >
        <source
          src="/Indish_ad.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark gradient — stronger on left so text pops, fades to transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      {/* Ambient lime glow — bottom-left */}
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#00D66C]/12 blur-[140px] pointer-events-none" />

      {/* ─── Content ─── */}
      <div className="relative z-10 h-full flex items-end sm:items-center pb-10 md:pt-14 sm:pb-0">
        <div
          className="w-full px-5 sm:px-10 lg:px-10"
          style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
        >
          {/* Main text block — starts at the edge, wide column to spread into */}
          <div className="max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-3xl space-y-4 sm:space-y-6">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,11vw,8rem)] font-black tracking-tighter uppercase leading-[0.85] text-white"
              style={{ textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
            >
              DRIVE
              <br />
              <span
                className="text-[#00D66C]"
                style={{ textShadow: '0 0 50px rgba(0,214,108,0.45)' }}
              >
                BEYOND
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200/90 font-medium leading-relaxed max-w-md"
            >
              We believe that a greener future is possible, and we are committed to making it a reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <Link
                to="/map"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#00D66C] text-slate-950 font-extrabold text-sm sm:text-base hover:bg-[#00C060] hover:shadow-[0_0_36px_rgba(0,214,108,0.55)] active:scale-95 transition-all duration-300 group"
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Find Station
              </Link>

              <Link
                to="/drivers"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white font-bold text-sm sm:text-base hover:bg-white/20 active:scale-95 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1"
            >
              {features.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-300"
                >
                  <Icon className="h-3.5 w-3.5 text-[#00D66C]" />
                  {label}
                </span>
              ))}

              
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}