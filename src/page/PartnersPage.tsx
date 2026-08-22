import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  DollarSign,
  Briefcase,
  Store,
  Hotel,
  Building,
  Truck,
  Sparkles,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'

/* ── Property Types for ROI Calculator ── */
const propertyTypes = [
  { id: 'retail', name: 'Retail / Mall', multiplier: 220000, avgDwell: '45 mins', traffic: 'High' },
  { id: 'hotel', name: 'Hotel & Resort', multiplier: 180000, avgDwell: '3 hours', traffic: 'Medium' },
  { id: 'office', name: 'Commercial Office', multiplier: 160000, avgDwell: '8 hours', traffic: 'High' },
  { id: 'highway', name: 'Highway Plaza', multiplier: 340000, avgDwell: '25 mins', traffic: 'Ultra High' },
]

/* ── Turnkey Installation Steps ── */
const turnkeySteps = [
  {
    step: '01',
    title: 'Free Site Audit',
    desc: 'Our electrical engineers conduct a complimentary site assessment to evaluate transformer capacity and optimal parking layout.',
  },
  {
    step: '02',
    title: '$0 Upfront CapEx',
    desc: 'Indish-e-Volt funds 100% of charger hardware, liquid-cooled dispensers, civil works, and utility grid upgrades.',
  },
  {
    step: '03',
    title: 'Installation & Signage',
    desc: 'We install 350kW CCS2 dispensers, LED canopy lighting, and branded station signages within 14 business days.',
  },
  {
    step: '04',
    title: 'Automated Revenue Share',
    desc: 'Sit back and earn recurring monthly revenue payouts directly into your corporate bank account via automated reporting.',
  },
]

/* ── Commercial Sectors Grid ── */
const sectors = [
  {
    icon: Store,
    title: 'Retail & Malls',
    desc: 'Increase customer dwell time by 40% and attract high-income EV owners who shop while charging.',
  },
  {
    icon: Hotel,
    title: 'Hospitality & Resorts',
    desc: 'Offer premium EV charging as an amenity for overnight guests and boost booking conversion rates.',
  },
  {
    icon: Building,
    title: 'Commercial Office Parks',
    desc: 'Meet LEED sustainability standards and fulfill corporate tenant demand for workplace EV charging.',
  },
  {
    icon: Truck,
    title: 'Logistics & Fleet Depots',
    desc: 'Power commercial delivery vans and electric taxi fleets with dedicated high-voltage charging corridors.',
  },
]

/* ── Case Studies ── */
const caseStudies = [
  {
    host: 'Phoenix Marketcity Mall',
    city: 'Mumbai',
    bays: '12 Chargers Installed',
    results: '₹42 Lakhs Annual Host Revenue · 8,400 Monthly Charging Sessions',
    quote: 'Indish-e-Volt turned unused parking bays into our highest yielding passive revenue asset.',
  },
  {
    host: 'JW Marriott Horizon Plaza',
    city: 'Bangalore',
    bays: '8 Supercharging Bays',
    results: '+28% Increase in Guest Bookings · 100% Solar Powered Canopy',
    quote: 'Our guests demand ultra-fast charging. Indish-e-Volt handled everything with zero upfront cost.',
  },
]

export default function PartnersPage() {
  const [selectedProperty, setSelectedProperty] = useState(propertyTypes[0])
  const [baysCount, setBaysCount] = useState(6)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Calculations
  const annualRevenue = Math.round(selectedProperty.multiplier * (baysCount / 2))
  const co2AvoidedTons = Math.round(baysCount * 32)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="w-full overflow-hidden bg-[#FAFCFA]">

      <PageHero
        badge="Property & Host Partnerships"
        badgeIcon={<Building2 className="h-3.5 w-3.5 fill-[#00D66C]" />}
        title="MONETIZE PARKING LOTS"
        titleHighlight="WITH ZERO COST."
        description="Turn your parking lot into a high-yield EV charging destination. We handle installation, hardware, and maintenance."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Commercial EV Charging Host Station"
      />

      {/* ─── SECTION 2: Interactive Host ROI & Revenue Calculator ─── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F9EE] text-[#00D66C] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" /> Host Earnings Estimator
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-slate-900 tracking-tight leading-tight">
            Calculate Your <span className="text-[#00D66C]">Annual Passive Revenue.</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            See how much your commercial parking property can generate with Indish-e-Volt 350kW host revenue share.
          </p>
        </div>

        {/* ROI Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-10">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-500">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {propertyTypes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProperty(p)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      selectedProperty.id === p.id
                        ? 'border-[#00D66C] bg-[#E6F9EE] text-slate-900 ring-2 ring-[#00D66C]/40 shadow-md'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <p className="text-sm font-black">{p.name}</p>
                    <p className="text-[11px] text-slate-400 font-semibold mt-1">Dwell: {p.avgDwell} · Traffic: {p.traffic}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-500">Number of Dedicated Bays:</span>
                <span className="text-2xl font-black text-[#00D66C]">{baysCount} Charging Bays</span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                step="2"
                value={baysCount}
                onChange={(e) => setBaysCount(Number(e.target.value))}
                className="w-full accent-[#00D66C] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-bold text-slate-400">
                <span>2 Bays (Min)</span>
                <span>12 Bays (Standard)</span>
                <span>24 Bays (Superhub)</span>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-slate-800">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Estimated Earnings</span>
              
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-semibold">Est. Annual Passive Host Revenue</p>
                <p className="text-4xl sm:text-5xl font-black text-[#00D66C]">
                  ₹{(annualRevenue / 100000).toFixed(1)} <span className="text-xl text-white font-bold">Lakhs / yr</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs">
                <div className="bg-slate-900 p-3 rounded-xl">
                  <p className="text-slate-400 font-medium">CapEx Required</p>
                  <p className="text-white font-black text-sm">₹0 (Fully Funded)</p>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl">
                  <p className="text-slate-400 font-medium">Est. Annual CO2 Offset</p>
                  <p className="text-[#00D66C] font-black text-sm">{co2AvoidedTons} Tons</p>
                </div>
              </div>
            </div>

            <a
              href="#host-form"
              className="flex w-full items-center justify-center gap-2 py-3.5 rounded-xl bg-[#00D66C] text-slate-950 font-black text-sm hover:bg-[#00C060] transition-all shadow-lg shadow-[#00D66C]/20"
            >
              <span>Apply for Site Survey</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: Turnkey 4-Step Installation Process ─── */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Turnkey Infrastructure</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              We Handle Everything. <span className="text-[#00D66C]">You Earn Revenue.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From civil engineering and grid permits to 24/7 equipment maintenance, our team manages the end-to-end lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {turnkeySteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 p-7 space-y-4 hover:border-[#00D66C] transition-all"
              >
                <span className="text-3xl font-black text-[#00D66C]">{step.step}</span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Commercial Sectors Grid ─── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Tailored Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Built for Every Commercial <span className="text-[#00D66C]">Real Estate Asset.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="rounded-3xl bg-white p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#00D66C] transition-all space-y-4"
              >
                <div className="h-12 w-12 rounded-2xl bg-[#E6F9EE] text-[#00D66C] flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─── SECTION 5: Host Case Studies ─── */}
      <section className="py-20 bg-slate-100 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Proven Success</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Trusted by Top <span className="text-[#00D66C]">Property Groups.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((cs) => (
              <div key={cs.host} className="rounded-3xl bg-white p-8 border border-slate-200 shadow-md space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{cs.host}</h3>
                    <p className="text-xs text-slate-400 font-bold">{cs.city} · {cs.bays}</p>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-[#00D66C]" />
                </div>

                <div className="p-4 rounded-2xl bg-[#E6F9EE] text-[#059669] font-bold text-xs">
                  {cs.results}
                </div>

                <p className="text-xs text-slate-500 italic leading-relaxed">&ldquo;{cs.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: Host Application Form ─── */}
      <section id="host-form" className="py-20 sm:py-28 px-5 sm:px-8 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Get Started</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Apply to Host a Station
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Fill out your property details below for a free site evaluation and customized revenue proposal within 24 hours.
          </p>
        </div>

        {formSubmitted ? (
          <div className="rounded-3xl bg-white p-12 border border-slate-200 shadow-xl text-center space-y-4 max-w-md mx-auto">
            <CheckCircle2 className="mx-auto h-16 w-16 text-[#00D66C]" />
            <h3 className="text-2xl font-bold text-slate-900">Proposal Request Received!</h3>
            <p className="text-xs text-slate-500">
              Our site development team will review your property coordinates and contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Rajesh"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Mehta"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="rajesh@propertygroup.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Property Sector</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none">
                  <option>Shopping Mall / Retail Center</option>
                  <option>Hotel & Hospitality Venue</option>
                  <option>Commercial Office Park</option>
                  <option>Highway Rest Stop / Plaza</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Available Parking Bays</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none">
                  <option>2 - 4 Bays</option>
                  <option>6 - 12 Bays</option>
                  <option>14 - 24 Bays (Superhub)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 py-4 rounded-2xl bg-[#00D66C] text-slate-950 font-black text-sm hover:bg-[#00C060] transition-all shadow-xl shadow-[#00D66C]/20"
            >
              <span>Submit Partner Inquiry</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </section>

    </div>
  )
}
