import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Clock, Building2, Headphones, ArrowUpRight } from 'lucide-react'

export default function ContactUsSection() {
  return (
    <section className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00D66C]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8C8] text-[#059669] text-xs font-extrabold uppercase tracking-wider"
        >
          <Headphones className="h-3.5 w-3.5" /> Direct Support & Inquiries
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
        >
          Contact Us & <span className="text-[#059669]">Regional Offices</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-sm leading-relaxed"
        >
          Connect with our executive management and engineering teams across our corporate hubs in India and the UAE.
        </motion.p>
      </div>

      {/* Office & Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

        {/* Card 1: Calicut Office */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl bg-white p-7 border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl hover:border-[#00D66C]/40 transition-all flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-[#059669] flex items-center justify-center border border-emerald-100">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                Calicut HQ
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-900">CALICUT OFFICE</h3>
              <p className="text-xs font-semibold text-[#059669] mt-0.5">Corporate & Regional Operations</p>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              <MapPin className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
              <address className="not-italic">
                3rd Floor, Coxwain 23, Beach Rd, Calicut – 673032, Kerala, India
              </address>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Open Mon - Sat
            </span>
            <a
              href="https://maps.google.com/?q=Coxwain+23+Beach+Rd+Calicut+673032+Kerala+India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#059669] hover:underline inline-flex items-center gap-1"
            >
              View on Map <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 2: Cochin Office */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl bg-white p-7 border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl hover:border-[#00D66C]/40 transition-all flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-[#059669] flex items-center justify-center border border-emerald-100">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                Airport Hub
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-900">COCHIN OFFICE</h3>
              <p className="text-xs font-semibold text-[#059669] mt-0.5">Aviation & Business Centre</p>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              <MapPin className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
              <address className="not-italic">
                12-A, CIASL Business Centre, Cochin International Airport, 683111, Kerala, India
              </address>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Open Mon - Sat
            </span>
            <a
              href="https://maps.google.com/?q=CIASL+Business+Centre+Cochin+International+Airport+683111+Kerala+India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#059669] hover:underline inline-flex items-center gap-1"
            >
              View on Map <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 3: Quick Direct Contact & UAE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl bg-slate-950 text-white p-7 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D66C]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-2xl bg-white/10 text-[#00D66C] flex items-center justify-center border border-white/10">
                <Phone className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#00D66C]/20 text-[#00D66C] border border-[#00D66C]/30">
                24/7 Inquiries
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-white">CONTACT DETAILS</h3>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">Phone, Email & International Line</p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">India Lines:</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <a href="tel:+917907116895" className="hover:text-[#00D66C] transition-colors font-medium">
                    +91 79 07 11 68 95
                  </a>
                  <span className="text-slate-600">|</span>
                  <a href="tel:+919995555044" className="hover:text-[#00D66C] transition-colors font-medium">
                    +91 999 555 5044
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">UAE Line:</div>
                <a href="tel:+971563600927" className="hover:text-[#00D66C] transition-colors font-medium inline-block">
                  🇦🇪 +971 563600927
                </a>
              </div>

              <div className="pt-1.5 flex items-center gap-2 border-t border-slate-800/80">
                <Mail className="h-3.5 w-3.5 text-[#00D66C] shrink-0" />
                <a href="mailto:finance@indishevolt.com" className="hover:text-[#00D66C] transition-colors font-medium truncate">
                  finance@indishevolt.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-[#00D66C] shrink-0" />
                <a href="https://www.indishevolt.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D66C] transition-colors font-medium">
                  www.indishevolt.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#00D66C]" /> Instant Response
            </span>
            <a
              href="mailto:finance@indishevolt.com"
              className="text-[#00D66C] font-bold hover:underline"
            >
              Email Us →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
