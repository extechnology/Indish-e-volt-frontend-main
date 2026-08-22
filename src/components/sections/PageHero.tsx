import { motion } from 'framer-motion'

interface PageHeroProps {
  badge?: string
  badgeIcon?: React.ReactNode
  title: string
  titleHighlight?: string
  description: string
  image: string
  imageAlt?: string
  children?: React.ReactNode
}

export default function PageHero({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  description,
  image,
  imageAlt = 'Page hero banner',
  children,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[70vh] sm:h-[100vh] min-h-[480px] max-h-[720px] overflow-hidden flex items-center bg-slate-950">

      {/* ── Fullscreen Background Image ── */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Dark cinematic gradient overlays for crisp text readability ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/60 to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/60" />


      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 max-w-[1536px] mx-auto pt-4 sm:pt-6">
        <div className="max-w-3xl lg:max-w-4xl space-y-4 sm:space-y-5">

          {/* Optional Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-[#00D66C]/15 border border-[#00D66C]/30 text-[#00D66C] backdrop-blur-md shadow-lg"
            >
              {badgeIcon && <span className="flex items-center">{badgeIcon}</span>}
              <span>{badge}</span>
            </motion.div>
          )}

          {/* Strictly 2-Line Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4.8vw,4.25rem)] font-black tracking-tight leading-[1.04] text-white uppercase"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
          >
            {/* Line 1 */}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
            
            {/* Line 2 (Highlighted) */}
            {titleHighlight && (
              <div className="text-[#00D66C] drop-shadow-[0_0_35px_rgba(0,214,108,0.5)] whitespace-nowrap overflow-hidden text-ellipsis">
                {titleHighlight}
              </div>
            )}
          </motion.div>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="text-sm sm:text-base text-slate-200/90 font-medium leading-relaxed max-w-lg"
          >
            {description}
          </motion.p>

          {/* Optional Children / Action Buttons */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-1"
            >
              {children}
            </motion.div>
          )}

        </div>
      </div>

    </section>
  )
}
