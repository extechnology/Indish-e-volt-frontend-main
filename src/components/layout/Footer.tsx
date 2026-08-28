import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Phone, Mail, Globe, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden pt-16 pb-12 rounded-t-[2.5rem] border-t border-slate-800">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,214,108,0.12),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">

          {/* Column 1: Brand Info (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center" aria-label="Indish-e-Volt Home">
              <img
                src="/INDIS-fit-new-logo.png"
                alt="Indish-e-Volt Logo"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering clean mobility with next-generation ultra-fast EV charging hubs, 100% renewable energy integration, and smart fleet management infrastructure.
            </p>

            {/* Live Network Status Indicator */}
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/90 border border-slate-800 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D66C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D66C]"></span>
              </span>
              <span className="text-slate-300">Network Operational: <strong className="text-white font-bold">1,480+ Chargers Active</strong></span>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Ecosystem</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><Link to="/drivers" className="hover:text-white hover:translate-x-1 inline-block transition-all">EV Drivers</Link></li>
              <li><Link to="/partners" className="hover:text-white hover:translate-x-1 inline-block transition-all">Business Partners</Link></li>
              <li><Link to="/sustainability" className="hover:text-white hover:translate-x-1 inline-block transition-all">Sustainability</Link></li>
              <li><Link to="/map" className="hover:text-white hover:translate-x-1 inline-block transition-all">Live Station Map</Link></li>
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link to="/become-partner" className="hover:text-[#00D66C] hover:translate-x-1 inline-block transition-all font-semibold">Become a Partner →</Link></li>
            </ul>
          </div>

          {/* Column 3: Office Addresses (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C] flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Our Offices
            </h4>
            <div className="space-y-4 text-xs text-slate-400">
              {/* Calicut Office */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="text-white font-bold text-xs uppercase tracking-wide flex items-center gap-1.5 mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" />
                  Calicut Office
                </div>
                <p className="leading-relaxed text-slate-300">
                  3rd Floor, Coxwain 23, Beach Rd, Calicut – 673032, Kerala, India
                </p>
              </div>

              {/* Cochin Office */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="text-white font-bold text-xs uppercase tracking-wide flex items-center gap-1.5 mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" />
                  Cochin Office
                </div>
                <p className="leading-relaxed text-slate-300">
                  12-A, CIASL Business Centre, Cochin International Airport, 683111, Kerala, India
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Details (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C] flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> Contact Details
            </h4>
            <div className="space-y-3 text-xs">
              {/* Phone Numbers */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                <div className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">Phone Support</div>
                <div className="flex flex-col space-y-1 font-medium">
                  <a href="tel:+917907116895" className="text-slate-200 hover:text-[#00D66C] transition-colors flex items-center gap-1.5">
                    <span>🇮🇳 +91 79 07 11 68 95</span>
                  </a>
                  <a href="tel:+919995555044" className="text-slate-200 hover:text-[#00D66C] transition-colors flex items-center gap-1.5">
                    <span>🇮🇳 +91 999 555 5044</span>
                  </a>
                  <a href="tel:+971563600927" className="text-slate-200 hover:text-[#00D66C] transition-colors flex items-center gap-1.5 pt-0.5 border-t border-slate-800">
                    <span>🇦🇪 UAE: +971 563600927</span>
                  </a>
                </div>
              </div>

              {/* Email & Web */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#00D66C] shrink-0" />
                  <a href="mailto:finance@indishevolt.com" className="text-slate-200 hover:text-[#00D66C] transition-colors font-medium break-all">
                    finance@indishevolt.com
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-1.5 border-t border-slate-800">
                  <Globe className="h-3.5 w-3.5 text-[#00D66C] shrink-0" />
                  <a href="https://www.indishevolt.com" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-[#00D66C] transition-colors font-medium">
                    www.indishevolt.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Indish-e-Volt. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-300 transition-colors">Cookie Preferences</a>
          </div>
          <p className="flex items-center gap-1">
            Powered By <a href="https://extechnology.in/" target='_blank' rel="noopener noreferrer" className="text-[#00D66C] hover:underline font-semibold">Extechnology.in</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
