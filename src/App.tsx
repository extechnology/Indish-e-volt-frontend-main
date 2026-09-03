import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootLayout from './components/layout/RootLayout'
import ScrollToTop from './components/common/ScrollToTop'

const Index = lazy(() => import('./page/Index'))
const DriversPage = lazy(() => import('./page/DriversPage'))
const PartnersPage = lazy(() => import('./page/PartnersPage'))
const SustainabilityPage = lazy(() => import('./page/SustainabilityPage'))
const AboutPage = lazy(() => import('./page/AboutPage'))
const MapPage = lazy(() => import('./page/MapPage'))
const BecomePartnerPage = lazy(() => import('./page/BecomePartnerPage'))
const TermsConditionsPage = lazy(() => import('./page/TermsConditionsPage'))
const PrivacyPolicyPage = lazy(() => import('./page/PrivacyPolicyPage'))
const CookiesPolicyPage = lazy(() => import('./page/CookiesPolicyPage'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-[#FAFCFA]" />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/become-partner" element={<BecomePartnerPage />} />
            <Route path="/terms" element={<TermsConditionsPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookies" element={<CookiesPolicyPage />} />
            <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
            <Route path="/cookie-preferences" element={<CookiesPolicyPage />} />
          </Route>
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
