import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  FileText,
  Lock,
  Building2,
  Mail,
  ExternalLink,
  ChevronRight,
  Globe,
  Clock,
  CheckCircle2,
  Copy,
  Printer,
  Cookie,
  Smartphone,
  Server,
  AlertCircle,
  Users,
  Database,
  Trash2,
  RefreshCw,
  EyeOff
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'

export default function PrivacyPolicyPage() {
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
    { id: 'collecting-personal-data', title: 'Types of Data Collected' },
    { id: 'tracking-cookies', title: 'Tracking Technologies & Cookies' },
    { id: 'use-of-personal-data', title: 'Use of Your Personal Data' },
    { id: 'text-messages-notice', title: 'Text Messages Privacy Notice' },
    { id: 'retention-data', title: 'Retention of Your Personal Data' },
    { id: 'transfer-data', title: 'Transfer of Your Personal Data' },
    { id: 'delete-data', title: 'Delete Your Personal Data' },
    { id: 'disclosure-data', title: 'Disclosure of Your Personal Data' },
    { id: 'security-data', title: 'Security of Your Personal Data' },
    { id: 'service-providers', title: 'Detailed Third-Party Services' },
    { id: 'children-privacy', title: "Children's & Minors' Privacy" },
    { id: 'links-other-websites', title: 'Links to Other Websites' },
    { id: 'changes-policy', title: 'Changes to this Privacy Policy' },
    { id: 'contact-us', title: 'Contact Us' },
  ]

  return (
    <div className="w-full overflow-hidden bg-[#FAFCFA]">
      {/* Hero Banner */}
      <PageHero
        badge="Data Protection & Privacy"
        badgeIcon={<Lock className="h-3.5 w-3.5 text-[#00D66C]" />}
        title="PRIVACY"
        titleHighlight="POLICY."
        description="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information."
        image="/banner-all.jpeg"
        imageAlt="Privacy Policy - Indish-e-Volt"
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

              {/* Data Protection Assistance */}
              <div className="rounded-3xl bg-slate-950 p-6 text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D66C]/10 rounded-full blur-2xl" />
                <div className="relative space-y-3">
                  <div className="h-9 w-9 rounded-xl bg-[#00D66C]/15 border border-[#00D66C]/30 flex items-center justify-center text-[#00D66C]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Privacy Rights Support</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Need data deletion, correction, or copy of your stored records? Reach out to our privacy officers.
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
                <ShieldCheck className="h-5 w-5 text-[#00D66C]" />
                <span>Our Privacy Commitment</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
              </p>
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
                  For the purposes of this Privacy Policy:
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2">
                  
                  {/* Account */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Access</span>
                    <h4 className="text-base font-bold text-slate-900">Account</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means a unique account created for You to access Our Service or parts of Our Service.
                    </p>
                  </div>

                  {/* Affiliate */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Corporate Entity</span>
                    <h4 className="text-base font-bold text-slate-900">Affiliate</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means an entity that controls, is controlled by, or is under common control with a party, where &ldquo;control&rdquo; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </p>
                  </div>

                  {/* Company */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#00D66C]" />
                      <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">The Data Controller</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Company <span className="text-xs font-normal text-slate-400">(referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Privacy Policy)</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      refers to <strong className="text-white">INDISH EVOLT PRIVATE LIMITED</strong>, Floor No.: Floor 2 Building No./Flat No.: CI/01,D1,61/389,A13 Name Of Premises/Building: HOFFICE COXSWAIN 23 Road/Street: Calicut Beach Locality/Sub Locality: Calicut Beach City/Town/Village: Kozhikode District: Kozhikode State: Kerala PIN Code: 673032.
                    </p>
                  </div>

                  {/* Cookies */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Tracking</span>
                    <h4 className="text-base font-bold text-slate-900">Cookies</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.
                    </p>
                  </div>

                  {/* Country/State */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Jurisdiction</span>
                    <h4 className="text-base font-bold text-slate-900">Country/State</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      refers to: Kerala, India.
                    </p>
                  </div>

                  {/* Device */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Hardware</span>
                    <h4 className="text-base font-bold text-slate-900">Device</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means any device that can access the Service, such as a computer, a cell phone or a digital tablet.
                    </p>
                  </div>

                  {/* Personal Data */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Identifiable Info</span>
                    <h4 className="text-base font-bold text-slate-900">Personal Data (or &ldquo;Personal Information&rdquo;)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      is any information that relates to an identified or identifiable individual. We use &ldquo;Personal Data&rdquo; and &ldquo;Personal Information&rdquo; interchangeably unless a law uses a specific term.
                    </p>
                  </div>

                  {/* Service */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Platform</span>
                    <h4 className="text-base font-bold text-slate-900">Service</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      refers to the Website.
                    </p>
                  </div>

                  {/* Service Provider */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Third-Party Processor</span>
                    <h4 className="text-base font-bold text-slate-900">Service Provider</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                    </p>
                  </div>

                  {/* Usage Data */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Telemetry</span>
                    <h4 className="text-base font-bold text-slate-900">Usage Data</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </p>
                  </div>

                  {/* User */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Subject</span>
                    <h4 className="text-base font-bold text-slate-900">User</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means any individual who accesses or uses the Service.
                    </p>
                  </div>

                  {/* Website */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Website URL</span>
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
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">The User / Entity</span>
                    <h4 className="text-base font-bold text-slate-900">You</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* Section 2: Collecting and Using Your Personal Information */}
            <section id="collecting-personal-data" className="scroll-mt-28 space-y-6 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 02</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Collecting and Using Your Personal Information</h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Types of Data Collected</h3>

                {/* Personal Data Subcategory */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#00D66C]" />
                    Personal Data
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm font-medium text-slate-700">
                    <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="h-2 w-2 rounded-full bg-[#00D66C]" />
                      Email address
                    </li>
                    <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="h-2 w-2 rounded-full bg-[#00D66C]" />
                      First name and last name
                    </li>
                    <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="h-2 w-2 rounded-full bg-[#00D66C]" />
                      Phone number
                    </li>
                    <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="h-2 w-2 rounded-full bg-[#00D66C]" />
                      Address, State, Province, ZIP/Postal code, City
                    </li>
                  </ul>
                </div>

                {/* Usage Data Subcategory */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Server className="h-5 w-5 text-[#00D66C]" />
                    Usage Data
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Usage Data is collected automatically when using the Service.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device&apos;s unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Tracking Technologies and Cookies */}
            <section id="tracking-cookies" className="scroll-mt-28 space-y-6 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 03</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Tracking Technologies and Cookies</h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Cookie className="h-4 w-4 text-[#00D66C]" />
                    Cookies or Browser Cookies
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-[#00D66C]" />
                    Web Beacons
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Certain sections of Our Service may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Cookies can be &ldquo;Persistent&rdquo; or &ldquo;Session&rdquo; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Where required by law, We use non-essential cookies (that is, Cookies other than the Necessary / Essential Cookies described below) only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool (if available) or through Your browser/device settings. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
              </p>

              <div className="space-y-4 pt-2">
                <h4 className="text-base font-bold text-slate-900">We use both Session and Persistent Cookies for the purposes set out below:</h4>

                {/* Necessary / Essential Cookies */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">Necessary / Essential Cookies</h5>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">Session Cookies · Administered by Us</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                  </p>
                </div>

                {/* Cookies Policy / Notice Acceptance Cookies */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">Cookies Policy / Notice Acceptance Cookies</h5>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">Persistent Cookies · Administered by Us</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Purpose:</strong> These Cookies identify whether users have accepted the use of cookies on the Website and record the consent choices You have made, so that We can honor those choices on future visits.
                  </p>
                </div>

                {/* Functionality Cookies */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">Functionality Cookies</h5>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">Persistent Cookies · Administered by Us</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Purpose:</strong> These Cookies allow Us to remember choices You make when You use the Website, such as remembering Your Account login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter Your preferences every time You use the Website.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 4: Use of Your Personal Data */}
            <section id="use-of-personal-data" className="scroll-mt-28 space-y-6 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 04</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Use of Your Personal Data</h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600">
                The Company may use Personal Data for the following purposes:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">To provide and maintain Our Service</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">including to monitor the usage of Our Service.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">To manage Your Account</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">For the performance of a contract</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">To contact You</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">To provide You with news, special offers, and general information</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">about other goods, services and events which We offer that are similar to those that You have already purchased or inquired about. We send such marketing communications only where permitted by applicable law: where prior consent is required (for example, under the laws applicable in the EEA and the UK), We will send them only with Your consent; otherwise, We may send them until You opt out. You may opt out or withdraw Your consent at any time by using the unsubscribe link in any marketing email We send or by contacting Us.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">To manage Your requests</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">To attend and manage Your requests to Us.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">For business transfers</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about Our Service users is among the assets transferred.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">For other purposes</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of Our promotional campaigns, and evaluating and improving Our Service, products, services, marketing and Your experience.</p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <h4 className="text-base font-bold text-slate-900">We may share Your Personal Data in the following situations:</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900">With Service Providers:</strong> We may share Your Personal Data with Service Providers to monitor and analyze the use of Our Service, and to contact You.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900">For business transfers:</strong> We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900">With Affiliates:</strong> We may share Your Personal Data with Our affiliates, in which case We will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900">With other users:</strong> If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside the Service.
                  </li>
                  <li className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900">With Your consent:</strong> We may disclose Your Personal Data for any other purpose with Your consent.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5: Text Messages Privacy Notice */}
            <section id="text-messages-notice" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 05</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Text Messages Privacy Notice</h2>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-[#00D66C]">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">SMS Communications</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  You have the option to receive text (SMS) messages from Us. If You opt in to text messages, We will send You updates, notifications, and other communications as described below. When You opt in, We will collect and store the information You provide in connection with text messaging, such as Your phone number, the date and method of Your consent, and message delivery and read information.
                </p>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-200 font-semibold leading-relaxed">
                  No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. The phone numbers and consent records We collect for texting are never shared with anyone for any purpose, except the Service Providers that technically have to handle them to deliver the texts.
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Consent to receive text messages is not a condition of any purchase or use of Our Service. If You consent to receive SMS from Us, You agree to receive text messages from Us related to:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" /> Customer care and support</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" /> Account notifications & renewals</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" /> Delivery notifications & status</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" /> OTPs & security passcodes</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" /> Suspicious login & security alerts</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#00D66C]" /> Marketing & promotional offers</li>
                </ul>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  Reply STOP to opt-out. Reply HELP for support. Message & data rates may apply. Messaging frequency may vary. Carriers are not liable for delayed or undelivered messages.
                </div>
              </div>
            </section>

            {/* Section 6: Retention of Your Personal Data */}
            <section id="retention-data" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 06</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Retention of Your Personal Data</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with Our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce Our legal agreements and policies.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Where possible, We apply shorter retention periods and/or reduce identifiability by deleting, aggregating, or anonymizing data. Unless otherwise stated, the retention periods below are maximum periods (&ldquo;up to&rdquo;) and We may delete or anonymize data sooner when it is no longer needed for the relevant purpose. We apply different retention periods to different categories of Personal Data based on the purpose of processing and legal obligations:
              </p>

              {/* Retention Schedule Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Account Data</div>
                  <h4 className="font-bold text-sm text-slate-900">User Accounts</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Retained for the duration of Your Account relationship plus <strong>up to 24 months</strong> after account closure to handle any post-termination issues or resolve disputes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Support Data</div>
                  <h4 className="font-bold text-sm text-slate-900">Tickets & Chats</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Support correspondence and chat transcripts retained <strong>up to 24 months</strong> from ticket closure for QA, staff training, and defense of claims.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Analytics & Logs</div>
                  <h4 className="font-bold text-sm text-slate-900">Usage & Servers</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Website analytics and server logs retained <strong>up to 24 months</strong> from collection for security monitoring, trend analysis, and troubleshooting.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                Usage Data is retained in accordance with the retention periods described above, and may be retained longer only where necessary for security, fraud prevention, or legal compliance.
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-bold text-slate-900">We may retain Personal Data beyond the periods stated above for different reasons:</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li><strong className="text-slate-800">Legal obligation:</strong> We are required by law to retain specific data (e.g., financial records for tax authorities).</li>
                  <li><strong className="text-slate-800">Legal claims:</strong> Data is necessary to establish, exercise, or defend legal claims.</li>
                  <li><strong className="text-slate-800">Your explicit request:</strong> You ask Us to retain specific information.</li>
                  <li><strong className="text-slate-800">Technical limitations:</strong> Data exists in backup systems that are scheduled for routine deletion.</li>
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You may request information about how long We will retain Your Personal Data by contacting Us.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-slate-900">When retention periods expire, We securely delete or anonymize Personal Data according to the following procedures:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li><strong className="text-slate-900">Deletion:</strong> Personal Data is removed from Our systems and no longer actively processed.</li>
                  <li><strong className="text-slate-900">Backup retention:</strong> Residual copies may remain in encrypted backups for a limited period consistent with Our backup retention schedule and are not restored except where necessary for security, disaster recovery, or legal compliance.</li>
                  <li><strong className="text-slate-900">Anonymization:</strong> In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You. This anonymized data may be retained indefinitely for research and analytics.</li>
                </ul>
              </div>
            </section>

            {/* Section 7: Transfer of Your Personal Data */}
            <section id="transfer-data" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 07</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Transfer of Your Personal Data</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. This means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to appropriate safeguards and, where relevant, supplementary measures. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place, including the security of Your data and other personal information.
              </p>
            </section>

            {/* Section 8: Delete Your Personal Data */}
            <section id="delete-data" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 08</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Delete Your Personal Data</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our Service may give You the ability to delete certain information about You from within the Service.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                You may update, amend, or delete Your information at any time by signing in to Your Account, if You have one, and visiting the account settings section that allows You to manage Your personal information. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium">
                Please note, however, that We may need to retain certain information when We have a legal obligation or lawful basis to do so.
              </div>
            </section>

            {/* Section 9: Disclosure of Your Personal Data */}
            <section id="disclosure-data" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 09</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Disclosure of Your Personal Data</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-base font-bold text-slate-900">Business Transactions</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-base font-bold text-slate-900">Law Enforcement</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Under certain circumstances, the Company may disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">Other Legal Requirements</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The Company may disclose Your Personal Data in the good-faith belief that such action is necessary to:
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 10: Security of Your Personal Data */}
            <section id="security-data" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 10</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Security of Your Personal Data</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </section>

            {/* Section 11: Detailed Information on the Processing of Your Personal Data */}
            <section id="service-providers" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 11</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Detailed Information on Processing & Third Parties</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-base font-bold text-slate-900">Usage, Performance and Miscellaneous</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  We may use third-party Service Providers to maintain and improve Our Service.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* Mouseflow */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">Mouseflow</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mouseflow is a session replay and heatmap tool that shows how visitors click, move, scroll, browse, and pay attention on websites. The service is operated by Mouseflow ApS.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mouseflow service may collect information from Your device.
                    </p>
                    <a
                      href="https://mouseflow.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00D66C] hover:underline pt-1"
                    >
                      Mouseflow Privacy Policy <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Google Places */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">Google Places</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Google Places is a service that returns information about places using HTTP requests. It is operated by Google.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Google Places service may collect information from You and from Your Device for security purposes.
                    </p>
                    <a
                      href="https://www.google.com/intl/en/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00D66C] hover:underline pt-1"
                    >
                      Google Privacy Policy <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12: Children's and Minors' Privacy */}
            <section id="children-privacy" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 12</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Children&apos;s and Minors&apos; Privacy</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The Service is not directed to, and We do not knowingly collect Personal Information from, anyone under the age of 16.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                If You are a parent or guardian and You believe Your child has provided Us with Personal Information, please contact Us. If We become aware that We have collected Personal Information from anyone under the age of 16, We will take steps to remove that information from Our servers as soon as reasonably possible.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Some countries and states set a higher age at which an individual can consent to the processing of their own Personal Information. Where We rely on consent as a legal basis and the law applicable to a User sets an age higher than 16, We may require the consent of that User&apos;s parent or guardian before We collect and use their Personal Information.
              </p>
            </section>

            {/* Section 13: Links to Other Websites */}
            <section id="links-other-websites" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 13</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Links to Other Websites</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
              </p>
            </section>

            {/* Section 14: Changes to this Privacy Policy */}
            <section id="changes-policy" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 14</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Changes to this Privacy Policy</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &ldquo;Last updated&rdquo; date at the top of this Privacy Policy.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* Section 15: Contact Us */}
            <section id="contact-us" className="scroll-mt-28 pt-8 border-t border-slate-200">
              <div className="rounded-3xl bg-slate-950 p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Privacy Inquiries</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Contact Us</h2>
                  <p className="text-sm text-slate-400">
                    If You have any questions about this Privacy Policy, You can contact Us:
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
