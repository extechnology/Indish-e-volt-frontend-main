import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Zap, Lock, ArrowRight, CheckCircle2, Eye, EyeOff, User as UserIcon } from 'lucide-react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
    }, 2000)
  }

  const handleGoogleLogin = () => {
    // Hook up your Google OAuth flow here
    console.log('Google login clicked')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00D66C] text-slate-950 shadow-md">
                <Zap className="h-6 w-6 fill-slate-950" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">EV Driver Portal</h3>
                <p className="text-xs text-slate-500">Fast charging access & wallet</p>
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="my-8 text-center"
              >
                <CheckCircle2 className="mx-auto h-16 w-16 text-[#00D66C] fill-slate-950 animate-bounce" />
                <h4 className="mt-4 text-lg font-semibold text-slate-900">
                  {mode === 'login' ? 'Welcome back!' : 'Account created!'}
                </h4>
                <p className="mt-1 text-sm text-slate-500">Signing you in...</p>
              </motion.div>
            ) : (
              <>
                {/* Login / Register selector */}
                <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1 mb-5">
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-semibold transition-all ${mode === 'login'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                      }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('register')}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-semibold transition-all ${mode === 'register'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                      }`}
                  >
                    Create Account
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field, only for register */}
                  <AnimatePresence mode="wait">
                    {mode === 'register' && (
                      <motion.div
                        key="name-field"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Jane Driver"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-4 pr-10 text-sm text-slate-900 focus:border-[#00D66C] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00D66C]/20 transition-all"
                          />
                          <UserIcon className="absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="driver@ev-volt.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-4 pr-10 text-sm text-slate-900 focus:border-[#00D66C] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00D66C]/20 transition-all"
                      />
                      <Mail className="absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  {/* Password field */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Password
                      </label>
                      {mode === 'login' && (
                        <button
                          type="button"
                          className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          Forgot password?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={8}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-4 pr-10 text-sm text-slate-900 focus:border-[#00D66C] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00D66C]/20 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Primary Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00D66C] py-3.5 text-sm font-bold text-slate-950 hover:bg-[#00C060] hover:shadow-lg hover:shadow-[#00D66C]/30 transition-all active:scale-[0.98]"
                  >
                    {mode === 'login' ? 'Sign In to Charge' : 'Create Account'}
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="relative my-4 text-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200" />
                    </div>
                    <span className="relative bg-white px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Or continue with
                    </span>
                  </div>

                  {/* Google Login Button */}
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors active:scale-[0.98]"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    By {mode === 'login' ? 'signing in' : 'creating an account'}, you agree to our Terms of
                    Service & Green Energy Policy.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}