import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootLayout from './components/layout/RootLayout'

const Index = lazy(() => import('./page/Index'))
const DriversPage = lazy(() => import('./page/DriversPage'))
const PartnersPage = lazy(() => import('./page/PartnersPage'))
const SustainabilityPage = lazy(() => import('./page/SustainabilityPage'))
const AboutPage = lazy(() => import('./page/AboutPage'))
const MapPage = lazy(() => import('./page/MapPage'))
const BecomePartnerPage = lazy(() => import('./page/BecomePartnerPage'))

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
          </Route>
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
