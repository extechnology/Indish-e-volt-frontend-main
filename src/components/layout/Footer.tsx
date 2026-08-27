import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Shield, Globe, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden pt-16 pb-12 rounded-t-[2.5rem] border-t border-slate-800">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(168,240,0,0.12),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">

          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-2">
            <Link to="/" className="inline-flex items-center" aria-label="Indish-e-Volt Home">
              <img
                src="/Updated-INDISH-LOGO.png"
                alt="Indish-e-Volt Logo"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Empowering clean mobility with next-generation ultra-fast EV charging hubs, 100% renewable energy integration, and smart fleet management infrastructure.
            </p>

            {/* Live Network Status Indicator */}
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-900 border border-slate-800 px-4 py-2 text-xs font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D66C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D66C]"></span>
              </span>
              <span className="text-slate-300">Network Operational: <strong className="text-white">1,480+ Chargers Active</strong></span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Ecosystem</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><Link to="/drivers" className="hover:text-white transition-colors">EV Drivers</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Business Partners</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/map" className="hover:text-white transition-colors">Live Station Map</Link></li>
              <li><Link to="/become-partner" className="hover:text-white transition-colors">Host a Station</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#investors" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#00D66C]">Stay Charged</h4>
            <p className="text-xs text-slate-400">
              Subscribe for new charging location launches & green tech insights.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Indish-e-Volt updates!'); }} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-3 pl-3.5 pr-10 text-xs text-white placeholder:text-slate-500 focus:border-[#00D66C] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D66C] text-slate-950 hover:bg-[#00C060]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>Â© {new Date().getFullYear()} Indish-e-Volt Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-300">Cookie Preferences</a>
          </div>
          <p className="flex items-center gap-1">
            Powered By <a href="https://extechnology.in/" target='_blank' rel="noopener noreferrer" className="text-[#00D66C]">Extechnology.in</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
