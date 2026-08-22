import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, CheckCircle2, ArrowRight, ShieldCheck, Zap, TrendingUp, 
  MapPin, BatteryCharging, Users, Target, Activity 
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'

export default function PartnersPage() {
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
    { label: 'Max Output Power', value: '180 kW' },
    { label: 'Output Voltage', value: '200–1000 V DC' },
    { label: 'Max Current', value: '520 A' },
    { label: 'Connectors', value: 'CCS2 & CHAdeMO' },
    { label: 'Efficiency', value: '>95%' },
    { label: 'Dimensions', value: '850 × 700 × 2000 mm' },
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

      {/* Hardware & Specs */}
      <section className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Planned Hardware Specifications</h2>
            <p className="text-slate-600 leading-relaxed">
              Our hardware is designed for robust, fast-charging capabilities to ensure reliability and speed for end-users while maximizing throughput for our partners.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {specs.map((spec, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{spec.label}</span>
                  <span className="text-lg font-black text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px]"
          >
            <img src="https://images.unsplash.com/photo-1704475447074-10f039c137dc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Charger Hardware" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <Zap className="h-8 w-8 text-[#00D66C] mb-3" />
              <div className="text-2xl font-black">180 kW DC Fast Charging</div>
              <div className="text-sm text-slate-300">Dual Connector Configuration</div>
            </div>
          </motion.div>
        </div>
      </section>

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
