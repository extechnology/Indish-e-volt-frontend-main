import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Send,
  Phone,
  Mail,
  Zap,
  MapPin,
  HelpCircle,
  Briefcase,
  ExternalLink,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'

// Primary WhatsApp Numbers
const PRIMARY_WHATSAPP_NUMBER = '919995555044'
const BACKUP_WHATSAPP_NUMBER = '917907116895'

// Preset quick-chat inquiry topics
const QUICK_TOPICS = [
  {
    id: 'charging-help',
    icon: <Zap className="h-3.5 w-3.5 text-[#00D66C]" />,
    label: 'EV Charging Support',
    message: 'Hello Indish-e-Volt Team! I need support with EV charging / charger station usage.',
  },
  {
    id: 'station-finder',
    icon: <MapPin className="h-3.5 w-3.5 text-blue-400" />,
    label: 'Find Nearest Hub',
    message: 'Hi! I would like to locate the nearest Indish-e-Volt fast charging station.',
  },
  {
    id: 'partner-franchise',
    icon: <Briefcase className="h-3.5 w-3.5 text-amber-400" />,
    label: 'Host / Partner Inquiry',
    message: 'Hello! I am interested in partnering / hosting an Indish-e-Volt EV charging hub.',
  },
  {
    id: 'general-query',
    icon: <HelpCircle className="h-3.5 w-3.5 text-emerald-400" />,
    label: 'General EV Inquiry',
    message: 'Hi Indish-e-Volt! I would like to learn more about your EV charging solutions and rates.',
  },
]

// Social media channels
const SOCIAL_HANDLES = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/indishevolt.in/?hl=en',
    color: 'hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/indishevolt-in/about/?viewAsMember=true',
    color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61592869981067',
    color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@indishevolt',
    color: 'hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/indishevoltin',
    color: 'hover:text-white hover:bg-slate-800 hover:border-slate-700',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    url: 'https://in.pinterest.com/indishevolt',
    color: 'hover:text-[#E60023] hover:bg-[#E60023]/10 hover:border-[#E60023]/30',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
    ),
  },
]

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [userMessage, setUserMessage] = useState('')
  const [hasInteracted, setHasInteracted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Show friendly teaser tooltip after 2.5 seconds if unopened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted && !isOpen) {
        setShowTooltip(true)
      }
    }, 2500)

    return () => clearTimeout(timer)
  }, [hasInteracted, isOpen])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Open WhatsApp in a new tab with specified text
  const handleOpenWhatsApp = (messageText: string, number = PRIMARY_WHATSAPP_NUMBER) => {
    const encoded = encodeURIComponent(messageText.trim() || 'Hello Indish-e-Volt!')
    const whatsappUrl = `https://wa.me/${number}?text=${encoded}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userMessage.trim()) return
    handleOpenWhatsApp(userMessage)
    setUserMessage('')
  }

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
    setShowTooltip(false)
    setHasInteracted(true)
  }

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none select-none font-sans"
    >
      {/* ─── Expandable Quick-Chat & Media Card ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="pointer-events-auto w-[calc(100vw-2.5rem)] sm:w-[380px] max-w-[390px] mb-3.5 overflow-hidden rounded-3xl bg-slate-950/95 border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(0,214,108,0.15)] backdrop-blur-2xl text-slate-100 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="WhatsApp and Media Support Hub"
          >
            {/* 1. Header with Indish-e-Volt Identity */}
            <div className="relative p-4.5 sm:p-5 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/70 border-b border-slate-800/80">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D66C]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Brand Avatar with online indicator */}
                  <div className="relative shrink-0">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-tr from-[#00D66C] to-[#25D366] p-0.5 shadow-lg shadow-[#00D66C]/20 flex items-center justify-center">
                      <div className="h-full w-full rounded-[14px] bg-slate-950 flex items-center justify-center p-1">
                        <img
                          src="/INDIS-fit-new-logo.png"
                          alt="Indish-e-Volt"
                          className="h-6 w-auto object-contain brightness-0 invert"
                        />
                      </div>
                    </div>
                    {/* Live Online Ping */}
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D66C] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D66C] ring-2 ring-slate-950" />
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-sm tracking-tight text-white">Indish-e-Volt</h3>
                      <ShieldCheck className="h-4 w-4 text-[#00D66C]" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" />
                      <span className="text-[#00D66C] font-semibold text-[11px]">Online Support</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-[11px] text-slate-400">Replies instantly</span>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={toggleOpen}
                  aria-label="Close Chat Hub"
                  className="h-8 w-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors flex items-center justify-center"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 2. Welcome Message Chat Bubble */}
            <div className="p-4 sm:p-5 space-y-4 max-h-[380px] overflow-y-auto no-scrollbar">
              {/* Agent Bubble */}
              <div className="flex items-start gap-2.5">
                <div className="h-7 w-7 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <MessageCircle className="h-3.5 w-3.5" />
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl rounded-tl-sm p-3.5 text-xs text-slate-200 leading-relaxed shadow-sm">
                  <p className="font-medium text-white mb-1">
                    👋 Welcome to Indish-e-Volt!
                  </p>
                  <p className="text-slate-300">
                    How can we power your journey today? Tap a quick option below or message us directly on WhatsApp!
                  </p>
                  <div className="text-[10px] text-slate-500 text-right mt-1 font-mono">
                    Just now
                  </div>
                </div>
              </div>

              {/* 3. Quick Action Buttons */}
              <div className="space-y-2 pt-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                  Instant WhatsApp Topics
                </p>
                <div className="grid grid-cols-1 gap-1.5">
                  {QUICK_TOPICS.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => handleOpenWhatsApp(topic.message)}
                      className="group flex items-center justify-between w-full px-3 py-2.5 rounded-xl bg-slate-900/60 hover:bg-emerald-950/40 border border-slate-800 hover:border-[#00D66C]/40 text-left transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-slate-800/80 group-hover:bg-[#00D66C]/10 transition-colors">
                          {topic.icon}
                        </div>
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-[#00D66C] transition-colors">
                          {topic.label}
                        </span>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-[#00D66C] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Custom Message Input Form */}
              <form onSubmit={handleCustomSubmit} className="pt-2">
                <div className="relative">
                  <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full pl-3.5 pr-11 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#00D66C] focus:bg-slate-950 text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Send WhatsApp message"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center justify-center transition-transform active:scale-95 shadow-sm"
                  >
                    <Send className="h-3.5 w-3.5 -ml-0.5" />
                  </button>
                </div>
              </form>

              {/* 5. Direct Phone / Calling Channels */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <a
                    href={`tel:+${PRIMARY_WHATSAPP_NUMBER}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium transition-colors"
                  >
                    <Phone className="h-3 w-3 text-[#00D66C]" />
                    <span>Call Support</span>
                  </a>
                  <a
                    href="mailto:finance@indishevolt.com"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium transition-colors"
                  >
                    <Mail className="h-3 w-3 text-[#00D66C]" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

              {/* 6. Social Media Handles Strip */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Official Social Media
                  </span>
                  <span className="text-[10px] text-[#00D66C] font-semibold">@indishevolt</span>
                </div>
                <div className="flex items-center justify-between gap-1.5">
                  {SOCIAL_HANDLES.map((handle) => (
                    <a
                      key={handle.name}
                      href={handle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={handle.name}
                      aria-label={`Follow us on ${handle.name}`}
                      className={`h-8 w-8 rounded-xl bg-slate-900/90 border border-slate-800/90 text-slate-400 flex items-center justify-center transition-all duration-200 hover:scale-110 ${handle.color}`}
                    >
                      {handle.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. Bottom Brand Credit */}
            <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <span>⚡ Next-Gen EV Mobility</span>
              </span>
              <button
                onClick={() => handleOpenWhatsApp('Hello Indish-e-Volt team!', BACKUP_WHATSAPP_NUMBER)}
                className="hover:text-[#00D66C] transition-colors font-medium flex items-center gap-1"
              >
                <span>Secondary WhatsApp</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Teaser Tooltip Bubble ─── */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto mb-3 max-w-[260px] rounded-2xl bg-slate-950/95 border border-[#00D66C]/40 p-3 shadow-xl backdrop-blur-xl text-white relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss message tooltip"
              className="absolute -top-1.5 -left-1.5 h-5 w-5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-[10px]"
            >
              <X className="h-3 w-3" />
            </button>
            <div
              onClick={toggleOpen}
              className="cursor-pointer group flex items-start gap-2.5"
            >
              <div className="h-8 w-8 rounded-xl bg-[#25D366] text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white group-hover:text-[#00D66C] transition-colors leading-snug">
                  Need Help? Chat on WhatsApp!
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                  Instant EV charging & franchise support ⚡
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Floating WhatsApp Action Trigger Button ─── */}
      <div className="relative pointer-events-auto flex items-center gap-3">
        {/* Expanded Pill Label when hover / collapsed */}
        <motion.button
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close support hub' : 'Open WhatsApp and Media support'}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative group flex items-center gap-2.5 h-14 sm:h-14 px-4 sm:px-4.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#1ebd5a] to-[#00D66C] text-slate-950 font-bold text-xs sm:text-sm shadow-[0_10px_35px_rgba(37,211,102,0.45),0_0_20px_rgba(0,214,108,0.3)] transition-all duration-300 cursor-pointer overflow-hidden border border-white/20"
        >
          {/* Subtle Shine Wave */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          {/* Icon with Morph Transition */}
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close-icon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-slate-950 stroke-[2.5]" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp-icon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg
                    className="h-6 w-6 fill-slate-950"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Label Text */}
          <span className="hidden sm:inline-block tracking-tight font-extrabold text-slate-950">
            {isOpen ? 'Close' : 'Chat & Connect'}
          </span>

          {/* Pulse radar wave when closed */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-950 border-2 border-white" />
            </span>
          )}
        </motion.button>
      </div>
    </div>
  )
}
