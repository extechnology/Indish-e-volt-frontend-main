import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Zap,
  Target,
  Users,
  Award,
  ShieldCheck,
  Leaf,
  Cpu,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  AlertTriangle,
  Lightbulb,
  MapPin,
  BatteryCharging,
  Settings,
  Briefcase,
  Crosshair,
  Activity
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/sections/PageHero'

/* ── Data ── */

const focusAreas = [
  { title: 'EV Charging Infrastructure', icon: BatteryCharging, desc: 'Designing and deploying a robust network from 3.3 kW AC to 480 kW DC fast chargers.' },
  { title: 'Renewable Energy', icon: Leaf, desc: 'Integrating solar and wind energy to power the future of sustainable transportation.' },
  { title: 'Battery Technology', icon: Cpu, desc: 'Advancing energy storage systems (BESS) for intelligent grid management.' },
  { title: 'Smart Electronics', icon: Settings, desc: 'Developing intelligent telematics and control systems for seamless operation.' },
  { title: 'Electric Mobility', icon: Zap, desc: 'Creating an interconnected ecosystem for EV fleets, private owners, and public transit.' },
]

const currentPosition = [
  {
    title: 'ENTITY ESTABLISHED',
    desc: 'Indish eVolt is incorporated and operating as a dedicated green-energy subsidiary of Indish World (est. 1997).',
    icon: Building2,
  },
  {
    title: 'CHARGER LINE-UP FINALIZED',
    desc: 'Product range spans 3.3 kW AC units through 480 kW dual-gun DC fast chargers, with 120 kW Dual Gun tier newly added and a 160 kW next-generation model in R&D.',
    icon: BatteryCharging,
  },
  {
    title: 'PARTNERSHIP FRAMEWORK READY',
    desc: 'Location Partner and Investment Partner agreements are structured and ready for onboarding property owners and investors.',
    icon: Briefcase,
  },
  {
    title: 'FINANCIAL MODEL BUILT',
    desc: 'Per-machine and phase-wise investor return model completed, covering Phase 1 through Phase 3 of network rollout.',
    icon: TrendingUp,
  },
  {
    title: 'PHASE 1 ROLLOUT — IN PLANNING',
    desc: 'Targeting deployment of the first 200 charging machines as the network\'s founding phase, opening the door to Location and Investment Partners.',
    icon: MapPin,
  },
  {
    title: 'SITE & PARTNER PIPELINE — ACTIVE',
    desc: 'Engaging prospective location partners across malls, highways, RWAs and corporate campuses for Phase 1 sites.',
    icon: Users,
  },
]

const theGap = [
  { title: 'SPARSE, INCONSISTENT COVERAGE', desc: 'Big gaps between metros and highway routes, leaving EV owners anxious about range on longer journeys.' },
  { title: 'SLOW, UNRELIABLE CHARGERS', desc: 'Many existing stations are underpowered or poorly maintained, leading to long wait times.' },
  { title: 'FRAGMENTED TARIFFS', desc: 'Inconsistent per-unit pricing across providers makes cost planning difficult for fleets and individual owners.' },
  { title: 'LIMITED INVESTMENT ACCESS', desc: 'Property owners and investors have few simple, well-structured ways to participate in EV infrastructure growth.' },
  { title: 'WEAK CUSTOMER SERVICE', desc: 'Poor support and app experiences erode trust in public charging networks.' },
]

const ourSolution = [
  { title: 'FULL-SERVICE INFRASTRUCTURE', desc: 'We design, install, operate, and maintain every charging station end-to-end.' },
  { title: 'RANGE OF CAPACITIES', desc: 'From 3.3 kW AC units to 480 kW dual-gun DC fast chargers, matched to site demand.' },
  { title: 'FLEXIBLE DEPLOYMENT', desc: 'Stations set up at partner locations: malls, highways, RWAs, corporate campuses and fleet depots.' },
  { title: 'SIMPLE PARTNERSHIPS', desc: 'Location Partners and Investment Partners, both earning a share of revenue.' },
  { title: 'TRANSPARENT PRICING', desc: 'Consistent, published charging rates across the network.' },
]

const timelineSteps = [
  { year: '1997', title: 'Group Founder', desc: 'Indish World Group established, building trusted businesses across multiple sectors.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  { year: '2026', title: 'Indish eVolt Launch', desc: 'Launch of our dedicated green-energy subsidiary to tackle India’s EV charging gap.', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80' },
  { year: '2027–2028', title: 'Expansion', desc: 'Phase 1 rollout and nationwide expansion across strategic highways and metros.', image: 'https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { year: '2029', title: 'Scale', desc: 'Scaling the network with advanced battery tech and renewable energy integration.', image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80' },
  { year: '2030', title: 'IPO Horizon', desc: 'Targeting an Initial Public Offering, becoming a leading public green energy enterprise.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80' },
]

export default function AboutPage() {
  const visionRef = useRef<HTMLDivElement>(null)
  const visionInView = useInView(visionRef, { once: true, margin: '-60px' })

  const gapRef = useRef<HTMLDivElement>(null)
  const gapInView = useInView(gapRef, { once: true, margin: '-60px' })

  const positionRef = useRef<HTMLDivElement>(null)
  const positionInView = useInView(positionRef, { once: true, margin: '-60px' })

  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' })

  return (
    <div className="w-full overflow-hidden bg-[#FAFCFA]">
      
      {/* ─── SECTION 1: Clean Fullscreen Hero ─── */}
      <PageHero
        badge="About Indish eVolt"
        badgeIcon={<Zap className="h-3.5 w-3.5 fill-[#00D66C]" />}
        title="ACCELERATING INDIA'S"
        titleHighlight="ELECTRIC FUTURE."
        description="Indish eVolt is an integrated green energy and electric mobility company, established under the IndishWorld Group. We design, install, operate, and maintain EV charging infrastructure across India, building a complete ecosystem for sustainable transportation."
        image="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Indish eVolt EV Charging Infrastructure"
      />

      {/* ─── SECTION 2: Heritage & Vision ─── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div ref={visionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider"
            >
              <Target className="h-3.5 w-3.5" /> Our Vision & Mission
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 tracking-tight leading-tight"
            >
              Building a Trusted Legacy <br />
              <span className="text-[#059669]">Since 1997.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              Indish World Group has been building trusted businesses since 1997, growing into a diversified enterprise with an established presence across Aviation, Communications, Creations, Manufacturing, Information Technology, and Commodity Trading.
              <br /><br />
              Indish eVolt carries that same operational discipline and multi-sector expertise into India's fast-growing EV charging market, working with property owners, investors, and businesses to expand the charging network at pace.
            </motion.p>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="h-24 w-24 text-[#059669]" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-[#059669]" /> Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                “To become one of India's leading integrated green energy and electric mobility companies, by building a complete ecosystem for sustainable transportation, renewable energy, and smart energy solutions.”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="h-24 w-24 text-[#00D66C]" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-[#00D66C]" /> Mission
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed italic relative z-10">
                “To deliver innovative, reliable, and sustainable energy solutions through EV charging infrastructure, renewable energy, battery technology, smart electronics, and electric mobility.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: The Gap vs Our Solution ─── */}
      <section className="py-20 sm:py-28 bg-slate-50 px-5 sm:px-8 border-y border-slate-200">
        <div ref={gapRef} className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={gapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-xs font-extrabold uppercase tracking-wider"
            >
              <Lightbulb className="h-3.5 w-3.5" /> Market Context
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={gapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 tracking-tight leading-tight"
            >
              Bridging the <span className="text-[#059669]">Charging Gap.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* The Gap */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={gapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Why the Gap Persists</h3>
              </div>
              <div className="space-y-6">
                {theGap.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={gapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-950 text-white rounded-[2rem] p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#00D66C]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative z-10 flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-xl bg-[#00D66C]/20 text-[#00D66C] flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-white">The Indish eVolt Solution</h3>
              </div>
              <div className="relative z-10 space-y-6">
                {ourSolution.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-[#00D66C]/20 flex items-center justify-center text-[#00D66C] font-bold text-xs shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#00D66C] mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Focus Areas ─── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider"
          >
            <Zap className="h-3.5 w-3.5" /> Our Focus Areas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 tracking-tight leading-tight"
          >
            Powering the Entire <span className="text-[#059669]">Ecosystem.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#00D66C] transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-[#00D66C]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00D66C]/20 transition-all">
                  <Icon className="h-7 w-7 text-[#059669]" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{area.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{area.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ─── SECTION 5: Current Position ─── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00D66C]/10 rounded-full blur-[160px] pointer-events-none" />
        
        <div ref={positionRef} className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={positionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D66C]/15 border border-[#00D66C]/30 text-[#00D66C] text-xs font-extrabold uppercase tracking-wider"
            >
              <Activity className="h-3.5 w-3.5" /> Company Status
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={positionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3.25rem)] font-black tracking-tight leading-tight text-white"
            >
              Our Position in the <span className="text-[#00D66C]">Industry Now.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosition.map((pos, idx) => {
              const Icon = pos.icon
              return (
                <motion.div
                  key={pos.title}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={positionInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-[#00D66C]/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#00D66C]" />
                    </div>
                    <h3 className="text-sm font-black text-white leading-tight">{pos.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{pos.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: Timeline Journey ─── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div ref={timelineRef} className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider"
          >
            <TrendingUp className="h-3.5 w-3.5" /> Growth Roadmap
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-slate-900 tracking-tight leading-tight"
          >
            The Path to <span className="text-[#059669]">2030 & Beyond.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Indish eVolt aims to grow from a fast-scaling private company into a public limited company, with the objective of pursuing an Initial Public Offering by 2030. The long-term goal is a trusted, technology-driven green energy enterprise with a nationwide presence.
          </motion.p>
        </div>

        {/* Timeline Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {timelineSteps.map((step, idx) => (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="relative rounded-[2rem] h-[360px] sm:h-[400px] overflow-hidden group shadow-lg hover:shadow-2xl transition-all border border-slate-200/20"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10 group-hover:from-slate-900 group-hover:via-slate-800/60 transition-colors duration-500" />
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <span className="text-3xl font-black text-[#00D66C] mb-2 group-hover:scale-105 transition-transform inline-block origin-left">{step.year}</span>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 7: Careers / Become Host CTA Banner ─── */}
      <section className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl sm:rounded-[2.5rem] bg-slate-950 text-white p-8 sm:p-14 overflow-hidden border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Lime background glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#00D66C]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="space-y-4 max-w-2xl text-center lg:text-left relative z-10">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">
              Join the Movement
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to Charge Into the <span className="text-[#00D66C]">Clean Tech Future?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are an EV driver looking for station locations or a commercial property owner seeking zero-upfront charger installation, we have you covered.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full lg:w-auto">
            <Link
              to="/become-partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D66C] text-slate-950 font-extrabold text-sm hover:bg-[#00C060] hover:shadow-[0_0_36px_rgba(168,240,0,0.55)] active:scale-95 transition-all"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/map"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 active:scale-95 transition-all"
            >
              Locate Nearest Hub
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
