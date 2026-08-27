import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Menu, X, Zap, ChevronRight, MapPin, ShieldCheck } from 'lucide-react'
import LoginModal from '../common/LoginModal'

interface NavbarProps {
  onOpenPartnerModal?: () => void
}

export default function Navbar({ onOpenPartnerModal }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const location = useLocation()

  const isScrolled = scrollY > 60

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Drivers', path: '/drivers' },
    { name: 'Partners', path: '/partners' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'About', path: '/about' },
    { name: 'Map', path: '/map' },
  ]

  // Clamp progress from 0 â†’ 1 over the first 80px of scroll
  const progress = Math.min(scrollY / 80, 1)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
      >
        {/* Outer container: full-width at top â†’ shrinks with margins on scroll */}
        <div
          className="pointer-events-auto mx-auto"
          style={{
            width: isScrolled ? `${Math.min(96, 72 + progress * 24)}%` : '100%',
            paddingTop: isScrolled ? `${Math.min(14, progress * 14)}px` : '0px',
            transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1), padding 0.5s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Inner bar: fully transparent at top â†’ white frosted pill on scroll */}
          <div
            className="relative flex items-center justify-between"
            style={{
              background: isScrolled ? 'rgba(255,255,255,0.94)' : 'transparent',
              backdropFilter: isScrolled ? 'blur(24px)' : 'none',
              WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
              borderRadius: isScrolled ? '9999px' : '0px',
              boxShadow: isScrolled
                ? '0 4px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(0,0,0,0.05)'
                : 'none',
              border: isScrolled ? '1px solid rgba(226,232,240,0.7)' : 'none',
              padding: isScrolled ? '10px 24px' : '12px 32px',
              transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-radius 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, padding 0.4s ease, border 0.4s ease',
            }}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center group shrink-0" aria-label="Indish-e-Volt Home">
              <img
                src="/Updated-INDISH-LOGO.png"
                alt="Indish-e-Volt Logo"
                className="object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
                style={{
                  height: isScrolled ? '58px' : '58px',
                  width: 'auto',
                  maxWidth: isScrolled ? '160px' : '180px',
                  filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
                  transition: 'height 0.4s ease, filter 0.4s ease, max-width 0.4s ease',
                }}
              />
            </Link>

            {/* Desktop Navigation Links — perfectly centered */}
            <nav className="hidden md:flex items-center justify-center gap-1.5 lg:gap-2 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors duration-300"
                    style={{
                      fontSize: '14px',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive
                        ? '#ffffff'
                        : isScrolled
                          ? '#334155'
                          : 'rgba(255,255,255,0.85)',
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-[#00D66C]"
                        style={{ boxShadow: '0 0 16px rgba(5,150,105,0.5)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? 'text-black' : ''}`}>{link.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Become Partner Button */}
              <Link
                to="/become-partner"
                onClick={onOpenPartnerModal}
                className="hidden sm:inline-flex items-center gap-2 rounded-full font-extrabold bg-[#00D66C] text-slate-950 hover:bg-[#00C060] hover:shadow-lg hover:shadow-[#00D66C]/40 transition-all active:scale-95"
                style={{
                  padding: isScrolled ? '9px 20px' : '10px 22px',
                  fontSize: isScrolled ? '13px' : '14px',
                }}
              >
                <span>Become Partner</span>
                <ChevronRight className="h-4 w-4" />
              </Link>

              {/* User Login Icon */}
              <button
                onClick={() => setIsLoginOpen(true)}
                title="User Login"
                aria-label="User Login"
                className="flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 active:scale-90"
                style={{
                  background: isScrolled ? '#f1f5f9' : 'rgba(255,255,255,0.15)',
                  border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  color: isScrolled ? '#0f172a' : '#ffffff',
                }}
              >
                <User className="h-4 w-4" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="md:hidden flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300"
                style={{
                  background: isScrolled ? '#f1f5f9' : 'rgba(255,255,255,0.15)',
                  border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  color: isScrolled ? '#0f172a' : '#ffffff',
                }}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 md:hidden bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Drawer Top */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="/Updated-INDISH-LOGO.png" alt="Indish-e-Volt Logo" className="h-14 w-auto object-contain brightness-0 invert" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="my-auto space-y-3">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-xl font-extrabold text-white hover:bg-[#00D66C] hover:text-slate-950 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="h-5 w-5 opacity-60" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                className="pt-4"
              >
                <Link
                  to="/become-partner"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00D66C] py-4 text-center text-base font-extrabold text-slate-950 shadow-xl shadow-[#00D66C]/20"
                >
                  <Zap className="h-5 w-5 fill-slate-950" />
                  Become Partner
                </Link>
              </motion.div>
            </div>

            {/* Drawer Bottom Status Bar */}
            <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
              <div className="flex items-center justify-around text-xs text-slate-300 font-bold">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[#00D66C]" /> 1,200+ Stations</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#00D66C]" /> 99.9% Uptime</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}
