import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Cookie,
  FileText,
  Building2,
  Mail,
  ExternalLink,
  ChevronRight,
  Globe,
  Clock,
  CheckCircle2,
  Copy,
  Printer,
  ShieldCheck,
  Sliders,
  Compass,
  Laptop
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'

export default function CookiesPolicyPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handlePrint = () => {
    window.print()
  }

  const tableOfContents = [
    { id: 'interpretation-definitions', title: 'Interpretation & Definitions' },
    { id: 'use-of-cookies', title: 'The Use of the Cookies' },
    { id: 'types-of-cookies', title: 'Type of Cookies We Use' },
    { id: 'your-choices', title: 'Your Choices Regarding Cookies' },
    { id: 'browser-guidelines', title: 'Browser Specific Instructions' },
    { id: 'changes-policy', title: 'Changes to this Cookies Policy' },
    { id: 'contact-us', title: 'Contact Us' },
  ]

  const browserLinks = [
    {
      name: 'Google Chrome',
      url: 'https://support.google.com/accounts/answer/32050',
      description: 'Official guide for managing and deleting cookies in Chrome.'
    },
    {
      name: 'Microsoft Edge',
      url: 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
      description: 'Support document for deleting and blocking cookies in Edge.'
    },
    {
      name: 'Mozilla Firefox',
      url: 'https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored',
      description: 'Step-by-step instructions for Firefox cookie management.'
    },
    {
      name: 'Apple Safari',
      url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac',
      description: 'Official Apple guide for managing Safari cookies and website data.'
    },
  ]

  return (
    <div className="w-full overflow-hidden bg-[#FAFCFA]">
      {/* Hero Banner */}
      <PageHero
        badge="Cookie Governance & Transparency"
        badgeIcon={<Cookie className="h-3.5 w-3.5 text-[#00D66C]" />}
        title="COOKIES"
        titleHighlight="POLICY."
        description="This Cookies Policy explains what Cookies are and how We use them on our Service."
        image="/banner-all.jpeg"
        imageAlt="Cookies Policy - Indish-e-Volt"
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Top Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mb-12">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#00D66C]/10 border border-[#00D66C]/20 flex items-center justify-center text-[#00D66C]">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Policy Date</span>
              <p className="text-sm sm:text-base font-bold text-slate-900">Last updated: September 03, 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-[#00D66C]" />
                  <span className="text-[#00D66C]">Link Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-slate-500" />
                  <span>Share Policy</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* 2-Column Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Index Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
                  <FileText className="h-4 w-4 text-[#00D66C]" />
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">Table of Contents</h3>
                </div>
                <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-2 custom-scrollbar">
                  {tableOfContents.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-center justify-between py-2 px-3 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <span className="truncate flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 font-mono w-4">{String(idx + 1).padStart(2, '0')}</span>
                        {item.title}
                      </span>
                      <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-[#00D66C] group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact / Help Box */}
              <div className="rounded-3xl bg-slate-950 p-6 text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D66C]/10 rounded-full blur-2xl" />
                <div className="relative space-y-3">
                  <div className="h-9 w-9 rounded-xl bg-[#00D66C]/15 border border-[#00D66C]/30 flex items-center justify-center text-[#00D66C]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Cookie Questions?</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Have questions regarding your preferences or how our tracking works?
                  </p>
                  <a
                    href="mailto:finance@indishevolt.com"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D66C] hover:underline pt-1"
                  >
                    finance@indishevolt.com →
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Legal Text Document */}
          <main className="lg:col-span-8 space-y-10 text-slate-700 leading-relaxed">

            {/* Intro Alert */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 space-y-3"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
                <Cookie className="h-5 w-5 text-[#00D66C]" />
                <span>About This Cookies Policy</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
              </p>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                Cookies do not typically contain any information that personally identifies a user, but personal information that We store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our{' '}
                <Link to="/privacy" className="text-emerald-950 underline font-bold hover:text-emerald-700">
                  Privacy Policy
                </Link>
                , if and when We make it available within the Website or on our website.
              </p>
              <div className="p-3 rounded-2xl bg-white/80 border border-emerald-300/60 text-xs font-bold text-emerald-950 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#00D66C] shrink-0" />
                <span>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</span>
              </div>
            </motion.div>

            {/* Section 1: Interpretation and Definitions */}
            <section id="interpretation-definitions" className="scroll-mt-28 space-y-6 pt-2">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 01</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Interpretation and Definitions</h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Interpretation</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Definitions</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  For the purposes of this Cookies Policy:
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2">
                  
                  {/* Company */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#00D66C]" />
                      <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">The Organization</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Company <span className="text-xs font-normal text-slate-400">(referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Cookies Policy)</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      refers to <strong className="text-white">INDISH EVOLT PRIVATE LIMITED</strong>, Floor No.: Floor 2 Building No./Flat No.: CI/01,D1,61/389,A13 Name Of Premises/Building: HOFFICE COXSWAIN 23 Road/Street: Calicut Beach Locality/Sub Locality: Calicut Beach City/Town/Village: Kozhikode District: Kozhikode State: Kerala PIN Code: 673032.
                    </p>
                  </div>

                  {/* Cookies */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Storage Files</span>
                    <h4 className="text-base font-bold text-slate-900">Cookies</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
                    </p>
                  </div>

                  {/* Website */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Official Portal</span>
                    <h4 className="text-base font-bold text-slate-900">Website</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      refers to www.indishevolt.com, accessible from{' '}
                      <a
                        href="http://indishevolt.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00D66C] hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        http://indishevolt.com/ <ExternalLink className="h-3 w-3" />
                      </a>.
                    </p>
                  </div>

                  {/* You */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">The User</span>
                    <h4 className="text-base font-bold text-slate-900">You</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* Section 2: The use of the Cookies */}
            <section id="use-of-cookies" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 02</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">The use of the Cookies</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Cookies can be &ldquo;Persistent&rdquo; or &ldquo;Session&rdquo; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
              </p>
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-sm font-semibold leading-relaxed">
                Where required by law, We will request your consent before using Cookies that are not strictly necessary. Strictly necessary Cookies are used to provide the Website and cannot be switched off in our systems.
              </div>
            </section>

            {/* Section 3: Type of Cookies We Use */}
            <section id="types-of-cookies" className="scroll-mt-28 space-y-6 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 03</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Type of Cookies We Use</h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600">
                We use both session and persistent Cookies for the purposes set out below:
              </p>

              <div className="space-y-4">
                
                {/* Necessary / Essential Cookies */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-[#00D66C]" />
                      Necessary / Essential Cookies
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#00D66C] text-xs font-bold border border-emerald-200">
                      Type: Session Cookies · Administered by: Us
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                  </p>
                </div>

                {/* Functionality Cookies */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Sliders className="h-5 w-5 text-[#00D66C]" />
                      Functionality Cookies
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                      Type: Persistent Cookies · Administered by: Us
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Purpose:</strong> These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 4: Your Choices Regarding Cookies */}
            <section id="your-choices" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 04</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Your Choices Regarding Cookies</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with the Website. You may use this option for preventing the use of Cookies at any time.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium">
                If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                If You&apos;d like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.
              </p>
            </section>

            {/* Section 5: Browser Specific Instructions */}
            <section id="browser-guidelines" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 05</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Browser Help & Management Guides</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {browserLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#00D66C]/50 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                          <Compass className="h-4 w-4 text-[#00D66C]" />
                          {item.name}
                        </h4>
                        <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-[#00D66C] transition-colors" />
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-[#00D66C] pt-3 block group-hover:underline">
                      View Official Guide →
                    </span>
                  </a>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-500 pt-2">
                For any other web browser, please visit your web browser&apos;s official web pages.
              </p>
            </section>

            {/* Section 6: Changes to this Cookies Policy */}
            <section id="changes-policy" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 06</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Changes to this Cookies Policy</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                We may update this Cookies Policy from time to time. The &ldquo;Last updated&rdquo; date at the top indicates when it was last revised.
              </p>
            </section>

            {/* Section 7: Contact Us */}
            <section id="contact-us" className="scroll-mt-28 pt-8 border-t border-slate-200">
              <div className="rounded-3xl bg-slate-950 p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Cookie Support</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Contact Us</h2>
                  <p className="text-sm text-slate-400">
                    If you have any questions about this Cookies Policy, You can contact us:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="mailto:finance@indishevolt.com"
                    className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#00D66C]/40 transition-colors flex items-center gap-3 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#00D66C]/10 border border-[#00D66C]/20 flex items-center justify-center text-[#00D66C] group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">By Email</span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00D66C] transition-colors break-all">
                        finance@indishevolt.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://www.indishevolt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#00D66C]/40 transition-colors flex items-center gap-3 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#00D66C]/10 border border-[#00D66C]/20 flex items-center justify-center text-[#00D66C] group-hover:scale-105 transition-transform">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Official Portal</span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00D66C] transition-colors">
                        www.indishevolt.com
                      </span>
                    </div>
                  </a>
                </div>

              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}
