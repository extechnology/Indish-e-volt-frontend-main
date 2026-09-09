import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, DollarSign, ShieldCheck, Zap, ArrowRight, TrendingUp, Award, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PartnerSolutionsSection() {
  const [bays, setBays] = useState(6)
  const [chargerType, setChargerType] = useState<'fast' | 'ultra'>('ultra')

  // Calculate estimated monthly revenue & CO2 offset
  const revenuePerBay = chargerType === 'ultra' ? 1450 : 850
  const monthlyRevenue = bays * revenuePerBay
  const co2Offset = bays * 3.4

  return (
    <section className="relative py-20 px-4 sm:px-8 bg-[#FAFCFA] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider"
          >
            <Building2 className="h-4 w-4" /> Commercial & Host Partners
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Turn Unused Parking Spaces Into <span className="text-[#059669]">Passive Revenue.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base"
          >
            Indish-e-Volt provides zero-upfront-cost turnkey installation, 99.9% hardware uptime guarantee, and 24/7 automated revenue distribution for property hosts.
          </motion.p>
        </div>

        {/* Interactive ROI Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">Host Partner Earnings Calculator</h3>
              <p className="text-xs text-slate-500">Estimate your property monthly earnings and carbon footprint offset.</p>
            </div>

            {/* Charger Type Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Select Charger Grade</label>
              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setChargerType('fast')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all ${
                    chargerType === 'fast'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  150kW DC Fast Charging
                </button>
                <button
                  type="button"
                  onClick={() => setChargerType('ultra')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all ${
                    chargerType === 'ultra'
                      ? 'bg-[#00D66C] text-slate-950 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  160kW Ultra Fast Hub
                </button>
              </div>
            </div>

            {/* Parking Bays Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Number of Parking Bays Dedicated:</span>
                <span className="text-lg font-black text-[#059669]">{bays} Bays</span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                step="2"
                value={bays}
                onChange={(e) => setBays(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                <span>2 Bays (Boutique Shop)</span>
                <span>20 Bays (Shopping Mall)</span>
                <span>40 Bays (Fleet Hub)</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="h-4 w-4 text-[#059669]" /> $0 Upfront Installation
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <TrendingUp className="h-4 w-4 text-[#059669]" /> 24/7 Automated Payouts
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 p-6 sm:p-8 text-white space-y-6 border border-slate-800">
            <div className="space-y-1">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#00D66C]">Estimated Host Revenue</span>
              <div className="text-4xl sm:text-5xl font-black text-white">
                ${monthlyRevenue.toLocaleString()}<span className="text-lg text-slate-400 font-medium"> / mo</span>
              </div>
              <p className="text-xs text-slate-400">Based on average local EV dwell time and occupancy rates.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Annual Revenue</span>
                <span className="text-xl font-bold text-white">${(monthlyRevenue * 12).toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">CO2 Reduction</span>
                <span className="text-xl font-bold text-[#00D66C]">{co2Offset.toFixed(1)} Tons / mo</span>
              </div>
            </div>

            <Link
              to="/become-partner"
              className="flex w-full items-center justify-center gap-2 py-4 rounded-2xl bg-[#00D66C] text-slate-950 font-extrabold text-sm hover:bg-[#00C060] hover:shadow-lg transition-all"
            >
              <span>Apply to Host Station</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* 3 Key Partner Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white p-6 border border-slate-200/80 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Retail Foot-Traffic Magnet</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              EV drivers stay an average of 35+ minutes while charging, spending 40% more at adjacent retail and dining venues.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 border border-slate-200/80 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Turnkey Maintenance & Insurance</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We manage permitting, grid hardware, maintenance service calls, and insurance liability 100% on your behalf.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 border border-slate-200/80 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Corporate Fleet Management</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Equip your corporate fleet with RFID priority charging, carbon reporting dashboards, and employee perks.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
