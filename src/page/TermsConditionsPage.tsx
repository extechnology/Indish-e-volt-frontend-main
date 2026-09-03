import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FileText,
  ShieldAlert,
  Scale,
  Building2,
  Mail,
  ExternalLink,
  ChevronRight,
  Globe,
  Clock,
  CheckCircle2,
  Copy,
  Printer
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'

export default function TermsConditionsPage() {
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
    { id: 'acknowledgment', title: 'Acknowledgment' },
    { id: 'links-other-websites', title: 'Links to Other Websites' },
    { id: 'links-social-media', title: 'Third-Party Social Media' },
    { id: 'termination', title: 'Termination' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'disclaimer', title: '"AS IS" & "AS AVAILABLE" Disclaimer' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'disputes-resolution', title: 'Disputes Resolution' },
    { id: 'eu-users', title: 'For European Union (EU) Users' },
    { id: 'us-compliance', title: 'United States Legal Compliance' },
    { id: 'severability-waiver', title: 'Severability & Waiver' },
    { id: 'translation', title: 'Translation Interpretation' },
    { id: 'changes', title: 'Changes to These Terms' },
    { id: 'contact-us', title: 'Contact Us' },
  ]

  return (
    <div className="w-full overflow-hidden bg-[#FAFCFA]">
      {/* Hero Banner */}
      <PageHero
        badge="Legal & Compliance"
        badgeIcon={<Scale className="h-3.5 w-3.5 text-[#00D66C]" />}
        title="TERMS AND"
        titleHighlight="CONDITIONS."
        description="Please read these terms and conditions carefully before using Our Service."
        image="/banner-all.jpeg"
        imageAlt="Terms and Conditions - Indish-e-Volt"
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
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Effective Date</span>
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
                  <span>Share Terms</span>
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

              {/* Need assistance box */}
              <div className="rounded-3xl bg-slate-950 p-6 text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D66C]/10 rounded-full blur-2xl" />
                <div className="relative space-y-3">
                  <div className="h-9 w-9 rounded-xl bg-[#00D66C]/15 border border-[#00D66C]/30 flex items-center justify-center text-[#00D66C]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Have Questions?</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our legal and finance team is available for any contractual clarifications.
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
              className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 space-y-2"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
                <ShieldAlert className="h-4 w-4 text-[#00D66C]" />
                <span>Notice to Users & Visitors</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                Please read these terms and conditions carefully before using Our Service. By accessing or using our Website and infrastructure services, you agree to be bound by these Terms and all applicable laws.
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
                  For the purposes of these Terms and Conditions:
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2">
                  
                  {/* Affiliate */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Term</span>
                    <h4 className="text-base font-bold text-slate-900">Affiliate</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means an entity that controls, is controlled by, or is under common control with a party, where &ldquo;control&rdquo; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </p>
                  </div>

                  {/* Country/State */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Jurisdiction</span>
                    <h4 className="text-base font-bold text-slate-900">Country/State</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      refers to: Kerala, India
                    </p>
                  </div>

                  {/* Company */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#00D66C]" />
                      <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">The Organization</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Company <span className="text-xs font-normal text-slate-400">(referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in these Terms and Conditions)</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      refers to <strong className="text-white">INDISH EVOLT PRIVATE LIMITED</strong>, Floor No.: Floor 2 Building No./Flat No.: CI/01,D1,61/389,A13 Name Of Premises/Building: HOFFICE COXSWAIN 23 Road/Street: Calicut Beach Locality/Sub Locality: Calicut Beach City/Town/Village: Kozhikode District: Kozhikode State: Kerala PIN Code: 673032.
                    </p>
                  </div>

                  {/* Device */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Hardware</span>
                    <h4 className="text-base font-bold text-slate-900">Device</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means any device that can access the Service such as a computer, a cell phone or a digital tablet.
                    </p>
                  </div>

                  {/* Service */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Offering</span>
                    <h4 className="text-base font-bold text-slate-900">Service</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      refers to the Website.
                    </p>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Agreement</span>
                    <h4 className="text-base font-bold text-slate-900">Terms and Conditions</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      (also referred to as &ldquo;Terms&rdquo;) means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service. These Terms and Conditions have been created with the help of the{' '}
                      <a
                        href="https://www.termsfeed.com/terms-conditions-generator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00D66C] hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        TermsFeed Terms and Conditions Generator <ExternalLink className="h-3 w-3" />
                      </a>.
                    </p>
                  </div>

                  {/* Third-Party Social Media Service */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">External Integration</span>
                    <h4 className="text-base font-bold text-slate-900">Third-Party Social Media Service</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.
                    </p>
                  </div>

                  {/* Website */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">Digital Portal</span>
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
                      </a>
                    </p>
                  </div>

                  {/* You */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-[#00D66C] uppercase tracking-wider">The User</span>
                    <h4 className="text-base font-bold text-slate-900">You</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* Section 2: Acknowledgment */}
            <section id="acknowledgment" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 02</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Acknowledgment</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-sm font-semibold">
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Your access to and use of the Service is also subject to Our{' '}
                <Link to="/privacy" className="text-[#00D66C] hover:underline font-semibold">
                  Privacy Policy
                </Link>
                , which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </section>

            {/* Section 3: Links to Other Websites */}
            <section id="links-other-websites" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 03</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Links to Other Websites</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
              </p>
            </section>

            {/* Section 4: Links from a Third-Party Social Media Service */}
            <section id="links-social-media" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 04</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Links from a Third-Party Social Media Service</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service&apos;s terms and privacy policies.
              </p>
            </section>

            {/* Section 5: Termination */}
            <section id="termination" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 05</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Termination</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </section>

            {/* Section 6: Limitation of Liability */}
            <section id="limitation-liability" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 06</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Limitation of Liability</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&apos;s liability will be limited to the greatest extent permitted by law.
              </p>
            </section>

            {/* Section 7: "AS IS" and "AS AVAILABLE" Disclaimer */}
            <section id="disclaimer" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 07</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">&ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; Disclaimer</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                The Service is provided to You &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Without limiting the foregoing, neither the Company nor any of the company&apos;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
            </section>

            {/* Section 8: Governing Law */}
            <section id="governing-law" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 08</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Governing Law</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                The laws of the Country/State, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </section>

            {/* Section 9: Disputes Resolution */}
            <section id="disputes-resolution" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 09</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Disputes Resolution</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </section>

            {/* Section 10: For European Union (EU) Users */}
            <section id="eu-users" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 10</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">For European Union (EU) Users</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
              </p>
            </section>

            {/* Section 11: United States Legal Compliance */}
            <section id="us-compliance" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 11</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">United States Legal Compliance</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &ldquo;terrorist supporting&rdquo; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
              </p>
            </section>

            {/* Section 12: Severability and Waiver */}
            <section id="severability-waiver" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 12</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Severability and Waiver</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Severability</h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-slate-900">Waiver</h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party&apos;s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                </p>
              </div>
            </section>

            {/* Section 13: Translation Interpretation */}
            <section id="translation" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 13</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Translation Interpretation</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </section>

            {/* Section 14: Changes to These Terms and Conditions */}
            <section id="changes" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <div className="pb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Section 14</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Changes to These Terms and Conditions</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.
              </p>
            </section>

            {/* Section 15: Contact Us */}
            <section id="contact-us" className="scroll-mt-28 pt-8 border-t border-slate-200">
              <div className="rounded-3xl bg-slate-950 p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D66C]">Get in Touch</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Contact Us</h2>
                  <p className="text-sm text-slate-400">
                    If you have any questions about these Terms and Conditions, You can contact us:
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
