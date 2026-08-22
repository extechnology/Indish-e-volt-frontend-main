import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap,
  Smartphone,
  ShieldCheck,
  MapPin,
  Clock,
  BatteryCharging,
  Car,
  Wifi,
  Coffee,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  CreditCard,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/sections/PageHero'

/* ── Vehicle types for Range Calculator ── */
const vehicleTypes = [
  { id: 'suv', name: 'Electric SUV', maxKw: 350, batterySize: 85, rangePerKw: 5.2 },
  { id: 'sedan', name: 'Performance Sedan', maxKw: 300, batterySize: 75, rangePerKw: 6.1 },
  { id: 'hatchback', name: 'Compact EV', maxKw: 150, batterySize: 45, rangePerKw: 6.8 },
  { id: 'commercial', name: 'Fleet / Commercial', maxKw: 350, batterySize: 120, rangePerKw: 4.5 },
]

/* ── Speed Comparison ── */
const speedComparisons = [
  {
    type: 'Home AC Charger (7.4 kW)',
    time: '8 - 10 Hours',
    progress: 15,
    tag: 'Overnight',
    color: '#64748B',
  },
  {
    type: 'Standard DC Fast (50 kW)',
    time: '60 - 90 Mins',
    progress: 45,
    tag: 'Public Mall',
    color: '#0284C7',
  },
  {
    type: 'Indish-e-Volt Ultra (350 kW)',
    time: '12 - 15 Mins',
    progress: 100,
    tag: 'Ultra Fast',
    color: '#00D66C',
    highlight: true,
  },
]

/* ── Driver Lounge Amenities ── */
const amenities = [
  { icon: Wifi, title: 'Ultra Fast 5G WiFi', desc: 'Complimentary gigabit internet for streaming or remote work while charging.' },
  { icon: Coffee, title: '24/7 Driver Lounges', desc: 'Air-conditioned lounges with gourmet coffee machines and gourmet snacks.' },
  { icon: ShieldCheck, title: 'Safe & Illuminated', desc: '24/7 CCTV surveillance, bright LED canopies, and security staff on site.' },
  { icon: Car, title: 'Covered Weather Canopies', desc: 'Protected charging bays keep you dry during monsoon rains and summer heat.' },
]

/* ── Membership Tiers ── */
const membershipTiers = [
  {
    name: 'Flex Driver',
    price: 'Free',
    period: 'Pay per kWh',
    desc: 'Perfect for casual drivers needing reliable public fast charging.',
    features: ['Pay-as-you-go pricing', 'Standard app access', '24/7 customer support', 'CCS2 & Type-2 access'],
    badge: 'Popular',
    accent: '#64748B',
    highlight: false,
  },
  {
    name: 'Ultra Pass',
    price: '₹499',
    period: 'per month',
    desc: 'For daily EV commuters looking for maximum savings and priority bays.',
    features: [
      '20% off all kWh charges',
      'Free 15-min bay reservation',
      'Unlimited lounge access',
      'Auto-Plug & Charge VIN sync',
      'Priority customer hotline',
    ],
    badge: 'Best Value',
    accent: '#00D66C',
    highlight: true,
  },
  {
    name: 'Fleet Pro',
    price: '₹1,999',
    period: 'per month / vehicle',
    desc: 'Commercial fleets, taxis, and delivery vehicles needing volume discounts.',
    features: [
      '30% off off-peak charging',
      'Multi-vehicle fleet dashboard',
      'Itemized GST invoicing',
      'Dedicated account manager',
      'Guaranteed uptime SLA',
    ],
    badge: 'Enterprise',
    accent: '#0B132A',
    highlight: false,
  },
]

/* ── Driver FAQs ── */
const faqs = [
  {
    q: 'How does Plug & Charge work on Indish-e-Volt chargers?',
    a: 'Simply plug the CCS2 cable into your vehicle. Our station automatically reads your EV’s unique VIN certificate and begins charging instantly — no RFID cards or manual app taps required.',
  },
  {
    q: 'Can all electric vehicle models charge at Indish-e-Volt hubs?',
    a: 'Yes! Our dispensers support CCS2, CHAdeMO, and Type-2 connectors compatible with Tata, Mahindra, MG, Hyundai, Kia, BYD, BMW, Mercedes, Audi, and Tesla (with adapter).',
  },
  {
    q: 'What payment methods are supported in the app?',
    a: 'We support UPI, credit/debit cards, net banking, Paytm, digital wallets, and auto-debit fleet balance.',
  },
  {
    q: 'Is it safe to charge during heavy rains or monsoons?',
    a: '100% safe. All our stations are IP65 weather-sealed with automatic ground fault protection, surge arrestors, and liquid-cooled cable insulation.',
  },
]

export default function DriversPage() {
  // Calculator state
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleTypes[0])
  const [currentSoc, setCurrentSoc] = useState(20)
  const [targetSoc, setTargetSoc] = useState(80)

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Calculations
  const percentageToAdd = Math.max(0, targetSoc - currentSoc)
  const kwhNeeded = (selectedVehicle.batterySize * percentageToAdd) / 100
  const chargingTimeMins = Math.round((kwhNeeded / selectedVehicle.maxKw) * 60) + 4
  const addedRangeKm = Math.round(kwhNeeded * selectedVehicle.rangePerKw)

  return (
    <div className="w-full overflow-hidden bg-[#FAFCFA]">

      <PageHero
        badge="EV Driver Experience"
        badgeIcon={<Zap className="h-3.5 w-3.5 fill-[#00D66C]" />}
        title="ULTRA-FAST CHARGING"
        titleHighlight="FOR EVERY JOURNEY."
        description="350kW liquid-cooled charging, auto plug-and-charge, and 24/7 driver lounges — powered by 100% clean energy."
        image="https://images.unsplash.com/photo-1571079570759-8b8dae4c4a78?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Electric Vehicle Driver Charging Station"
      />

      {/* ─── SECTION 2: Interactive EV Range & Charging Speed Calculator ─── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F9EE] text-[#00D66C] text-xs font-extrabold uppercase tracking-wider"
          >
            <Sparkles className="h-3.5 w-3.5" /> Interactive Calculator
          </motion.div>

          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-slate-900 tracking-tight leading-tight">
            Estimate Your <span className="text-[#00D66C]">Charge Time & Range.</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            See how fast your EV powers up at an Indish-e-Volt 350kW Ultra-Fast Station compared to standard chargers.
          </p>
        </div>

        {/* Calculator Widget Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-10">
          
          {/* Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Vehicle Selector */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-500">
                1. Select Vehicle Segment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vehicleTypes.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVehicle(v)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between h-24 ${
                      selectedVehicle.id === v.id
                        ? 'border-[#00D66C] bg-[#E6F9EE] text-slate-900 shadow-md ring-2 ring-[#00D66C]/40'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Car className={`h-5 w-5 ${selectedVehicle.id === v.id ? 'text-[#00D66C]' : 'text-slate-400'}`} />
                    <div>
                      <p className="text-xs font-bold truncate">{v.name}</p>
                      <p className="text-[10px] text-slate-400 font-semibold">{v.batterySize} kWh</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Battery SoC Sliders */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500">Start Battery: <strong className="text-slate-900">{currentSoc}%</strong></span>
                  <span className="text-slate-500">Target Battery: <strong className="text-[#00D66C]">{targetSoc}%</strong></span>
                </div>
                {/* Visual Battery Bar */}
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex p-0.5 border border-slate-200">
                  <div style={{ width: `${currentSoc}%` }} className="bg-slate-300 rounded-l-full h-full" />
                  <div style={{ width: `${percentageToAdd}%` }} className="bg-gradient-to-r from-[#00D66C] to-[#059669] rounded-r-full h-full animate-pulse" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Starting Charge %</label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={currentSoc}
                    onChange={(e) => setCurrentSoc(Number(e.target.value))}
                    className="w-full accent-[#00D66C] cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Target Charge %</label>
                  <input
                    type="range"
                    min="60"
                    max="100"
                    value={targetSoc}
                    onChange={(e) => setTargetSoc(Number(e.target.value))}
                    className="w-full accent-[#00D66C] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Card (Right 5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-slate-800">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Estimated Output</span>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <Clock className="h-5 w-5 text-[#00D66C] mb-2" />
                  <p className="text-3xl font-black text-white">{chargingTimeMins} <span className="text-xs text-slate-400 font-bold">mins</span></p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Est. Session Duration</p>
                </div>

                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <BatteryCharging className="h-5 w-5 text-[#00D66C] mb-2" />
                  <p className="text-3xl font-black text-[#00D66C]">+{addedRangeKm} <span className="text-xs text-white font-bold">km</span></p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Added Driving Range</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-300 font-medium">
                <span>Energy Added: <strong className="text-white">{kwhNeeded.toFixed(1)} kWh</strong></span>
                <span className="text-[#00D66C] font-bold">100% Solar Powered</span>
              </div>
            </div>

            <Link
              to="/map"
              className="flex w-full items-center justify-center gap-2 py-3.5 rounded-xl bg-[#00D66C] text-slate-950 font-black text-sm hover:bg-[#00C060] transition-all shadow-lg shadow-[#00D66C]/20"
            >
              <MapPin className="h-4 w-4" />
              <span>Locate 350kW Charger Near You</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: Charging Speed Comparison ─── */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-14 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Benchmark Performance</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Speed Comparison: <span className="text-[#00D66C]">Why 350kW Matters.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Time spent charging is time lost on the road. Indish-e-Volt liquid-cooled dispensers cut charging wait times by up to 85%.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {speedComparisons.map((item) => (
              <div
                key={item.type}
                className={`rounded-3xl p-6 sm:p-8 border transition-all ${
                  item.highlight
                    ? 'bg-slate-900 border-[#00D66C] shadow-2xl shadow-[#00D66C]/10 ring-1 ring-[#00D66C]/50'
                    : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.type}</h3>
                  </div>
                  <span className="text-2xl font-black" style={{ color: item.color }}>
                    {item.time}
                  </span>
                </div>

                {/* Meter Bar */}
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Driver Amenities Grid ─── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Driver Comfort</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            More Than a Charger. <span className="text-[#00D66C]">A Driver Haven.</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Every Indish-e-Volt hub is designed for comfort, safety, and productivity while your vehicle recharges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((a, idx) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00D66C] transition-all space-y-4"
              >
                <div className="h-12 w-12 rounded-2xl bg-[#E6F9EE] text-[#00D66C] flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{a.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{a.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ─── SECTION 5: Membership & Driver Plans ─── */}
      <section className="py-20 bg-slate-100 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Transparent Pricing</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Simple Membership <span className="text-[#00D66C]">Plans.</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Choose the plan that fits your driving habits. No hidden transaction fees or lock-in contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  tier.highlight
                    ? 'bg-slate-950 text-white shadow-2xl ring-2 ring-[#00D66C]'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-md'
                }`}
              >
                {tier.badge && (
                  <span className={`absolute top-6 right-6 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                    tier.highlight ? 'bg-[#00D66C] text-slate-950' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tier.badge}
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black">{tier.name}</h3>
                    <p className={`text-xs mt-1 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{tier.desc}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{tier.price}</span>
                    <span className={`text-xs ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{tier.period}</span>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-slate-200/20 text-xs font-semibold">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${tier.highlight ? 'text-[#00D66C]' : 'text-[#059669]'}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/map"
                  className={`mt-8 w-full py-3.5 rounded-xl text-center font-bold text-sm transition-all ${
                    tier.highlight
                      ? 'bg-[#00D66C] text-slate-950 hover:bg-[#00C060] shadow-lg shadow-[#00D66C]/20'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: Driver FAQs ─── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Driver Help</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#00D66C]">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 text-base"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#00D66C] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
