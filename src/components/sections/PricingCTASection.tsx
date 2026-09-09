import { motion } from 'framer-motion'
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PricingCTASection() {
  const plans = [
    {
      name: 'Pay-As-You-Go',
      badge: 'Casual Driver',
      price: '$0',
      period: 'No monthly commitment',
      rate: '$0.28 / kWh',
      features: [
        'Access to 1,400+ chargers nationwide',
        'Standard 60kW & 160kW speed',
        'Pay with Credit Card, Apple Pay, NFC',
        'Basic station availability map',
      ],
      cta: 'Charge Now',
      popular: false,
    },
    {
      name: 'Indish Volt Pass',
      badge: 'Most Popular',
      price: '$14.99',
      period: 'per month',
      rate: '$0.19 / kWh (Save 32%)',
      features: [
        '32% discounted kWh charging rate',
        'Free 15-minute station reservation',
        '15% discount at Indish station cafes',
        'Auto-Plug & Charge RFID keycard included',
        '24/7 Priority Hotline Support',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise Fleet',
      badge: 'Commercial Fleet',
      price: '$99',
      period: 'per vehicle / month',
      rate: 'Custom Bulk Rate',
      features: [
        'Unlimited 160kW fast charging',
        'Multi-vehicle centralized billing dashboard',
        'Automated carbon offset tax reporting',
        'Dedicated account manager & 99.9% SLA',
      ],
      cta: 'Contact Fleet Sales',
      popular: false,
    },
  ]

  return (
    <section className="relative py-8 px-4 sm:px-8 bg-[#FAFCFA] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* High Impact Final Call To Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-10 sm:p-16 text-white overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#00D66C]">Join the EV Revolution</span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              Ready to Electrify Your Journey?
            </h3>
            <p className="text-slate-300 text-sm">
              Whether you are an EV driver looking for ultra-fast charging or a business owner wanting to host a station, Indish-e-Volt is your trusted partner.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              to="/become-partner"
              className="px-8 py-4 rounded-full bg-[#059669] text-white font-extrabold text-sm hover:bg-[#047857] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)] transition-all text-center"
            >
              Become Partner
            </Link>
            <Link
              to="/drivers"
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold text-sm hover:bg-white/20 transition-all text-center"
            >
              Download Driver App
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
