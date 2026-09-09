import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  Loader2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  PhoneCall,
} from 'lucide-react'
import ContactUsSection from '../components/sections/ContactUsSection'
import { sendPartnerApplication, type PartnerApplicationData } from '../services/emailService'

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState<PartnerApplicationData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    property_type: 'Commercial Mall / Retail Hub',
    parking_bays: '2 - 4 Bays',
    property_address: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errorMessage) setErrorMessage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      await sendPartnerApplication(formData)
      setSubmitted(true)
    } catch (err: unknown) {
      console.error('Failed to submit partner application through EmailJS:', err)
      const message =
        err instanceof Error
          ? err.message
          : 'Unable to send application right now. Please check your internet connection or reach out via WhatsApp.'
      setErrorMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      property_type: 'Commercial Mall / Retail Hub',
      parking_bays: '2 - 4 Bays',
      property_address: '',
    })
    setSubmitted(false)
    setErrorMessage(null)
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

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-2xl text-center space-y-6 max-w-lg mx-auto"
            >
              <div className="mx-auto h-20 w-20 rounded-3xl bg-emerald-50 text-[#059669] border border-emerald-100 flex items-center justify-center shadow-inner">
                <CheckCircle2 className="h-10 w-10 text-[#059669]" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Application Submitted!</h2>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{formData.first_name} {formData.last_name}</strong>. Our infrastructure engineering team has received your application and will review your location at <strong className="text-slate-800">{formData.property_address}</strong>.
                </p>
              </div>

              {/* Submitted Details Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs space-y-2 text-slate-600">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="font-semibold text-slate-500">Contact Email:</span>
                  <span className="font-bold text-slate-800">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="font-semibold text-slate-500">Phone:</span>
                  <span className="font-bold text-slate-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="font-semibold text-slate-500">Property Type:</span>
                  <span className="font-bold text-slate-800">{formData.property_type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Parking Bays:</span>
                  <span className="font-bold text-slate-800">{formData.parking_bays}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Submit Another Property</span>
                </button>
                <a
                  href="https://wa.me/919995555044?text=Hi%20Indish-e-Volt!%20I%20just%20submitted%20a%20partner%20application."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00D66C] hover:bg-[#00C060] text-slate-950 text-xs font-extrabold transition-all shadow-md shadow-[#00D66C]/20"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Track via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="partner-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6"
            >
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-xs"
                >
                  <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">Failed to send application</p>
                    <p className="text-rose-700">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-xs font-extrabold uppercase text-slate-500 mb-2">
                    First Name <span className="text-[#00D66C]">*</span>
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Rahul"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-xs font-extrabold uppercase text-slate-500 mb-2">
                    Last Name <span className="text-[#00D66C]">*</span>
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Menon"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Work Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-extrabold uppercase text-slate-500 mb-2">
                    Work Email <span className="text-[#00D66C]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="partner@business.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-extrabold uppercase text-slate-500 mb-2">
                    Phone Number <span className="text-[#00D66C]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 999 555 5044"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Property Type & Estimated Parking Bays */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="property_type" className="block text-xs font-extrabold uppercase text-slate-500 mb-2">
                    Property Type <span className="text-[#00D66C]">*</span>
                  </label>
                  <select
                    id="property_type"
                    name="property_type"
                    value={formData.property_type}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="Commercial Mall / Retail Hub">Commercial Mall / Retail Hub</option>
                    <option value="Highway Fuel & Rest Stop">Highway Fuel & Rest Stop</option>
                    <option value="Hotel & Hospitality Venue">Hotel & Hospitality Venue</option>
                    <option value="IT Park / Corporate Building">IT Park / Corporate Building</option>
                    <option value="Multi-Family Residential Complex">Multi-Family Residential Complex</option>
                    <option value="Fleet Depot / Logistics Park">Fleet Depot / Logistics Park</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="parking_bays" className="block text-xs font-extrabold uppercase text-slate-500 mb-2">
                    Estimated Parking Bays <span className="text-[#00D66C]">*</span>
                  </label>
                  <select
                    id="parking_bays"
                    name="parking_bays"
                    value={formData.parking_bays}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="2 - 4 Bays">2 - 4 Bays</option>
                    <option value="6 - 12 Bays">6 - 12 Bays</option>
                    <option value="14 - 30 Bays">14 - 30 Bays</option>
                    <option value="30+ Bays (Superstation)">30+ Bays (Superstation)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Property Address / City */}
              <div>
                <label htmlFor="property_address" className="block text-xs font-extrabold uppercase text-slate-500 mb-2">
                  Property Address / City <span className="text-[#00D66C]">*</span>
                </label>
                <input
                  id="property_address"
                  name="property_address"
                  type="text"
                  required
                  value={formData.property_address}
                  onChange={handleChange}
                  placeholder="Beach Road, Calicut, Kerala"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm focus:border-[#00D66C] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 py-4 rounded-2xl bg-[#00D66C] text-slate-950 font-black text-sm hover:bg-[#00C060] hover:shadow-lg transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Submitting Application via EmailJS...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Partner Application</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Under Form: Dedicated Contact Us Section */}
      <div id="contact-us" className="border-t border-slate-200/60 bg-gradient-to-b from-[#FAFCFA] to-slate-50">
        <ContactUsSection />
      </div>
    </div>
  )
}
