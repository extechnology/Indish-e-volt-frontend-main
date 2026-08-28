import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, Zap, Phone, Mail, MapPin } from 'lucide-react'
import ContactUsSection from '../components/sections/ContactUsSection'

export default function BecomePartnerPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full">
      {/* Form Section */}
      <div className="pt-28 pb-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider"
          >
            <Building2 className="h-4 w-4" /> Become a Host Partner
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight"
          >
            Host an Indish-e-Volt Station
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm max-w-xl mx-auto"
          >
            Fill out your property details below to get a free site assessment and customized host revenue share plan within 24 hours.
          </motion.p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-white p-12 border border-slate-200 shadow-xl text-center space-y-4 max-w-md mx-auto"
          >
            <CheckCircle2 className="mx-auto h-16 w-16 text-[#059669]" />
            <h2 className="text-2xl font-bold text-slate-900">Application Submitted!</h2>
            <p className="text-xs text-slate-500">
              Our infrastructure engineering team will review your location coordinates and contact you shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Menon"
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
                  placeholder="partner@business.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 999 555 5044"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Property Type</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none">
                  <option>Commercial Mall / Retail Hub</option>
                  <option>Highway Fuel & Rest Stop</option>
                  <option>Hotel & Hospitality Venue</option>
                  <option>IT Park / Corporate Building</option>
                  <option>Multi-Family Residential Complex</option>
                  <option>Fleet Depot / Logistics Park</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Estimated Parking Bays</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none">
                  <option>2 - 4 Bays</option>
                  <option>6 - 12 Bays</option>
                  <option>14 - 30 Bays</option>
                  <option>30+ Bays (Superstation)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-slate-500 mb-2">Property Address / City</label>
              <input
                type="text"
                required
                placeholder="Beach Road, Calicut, Kerala"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 py-4 rounded-2xl bg-[#00D66C] text-slate-950 font-black text-sm hover:bg-[#00C060] hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Submit Partner Application</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>

      {/* Under Form: Dedicated Contact Us Section */}
      <div id="contact-us" className="border-t border-slate-200/60 bg-gradient-to-b from-[#FAFCFA] to-slate-50">
        <ContactUsSection />
      </div>
    </div>
  )
}
