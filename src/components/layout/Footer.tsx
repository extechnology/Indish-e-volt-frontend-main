import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Phone, Mail, Globe, Sparkles } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/indishevolt.in/?hl=en',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61592869981067',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/indishevolt-in/about/?viewAsMember=true',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    url: 'https://in.pinterest.com/indishevolt',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/indishevoltin',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@indishevolt',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

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
          <div className="lg:col-span-4 space-y-5">
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

            {/* Social Media Icons */}
            <div className="pt-2 space-y-2.5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C] block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className="h-9 w-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00D66C] hover:border-[#00D66C]/50 hover:bg-slate-850 hover:shadow-lg hover:shadow-[#00D66C]/10 transition-all hover:scale-105"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
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
