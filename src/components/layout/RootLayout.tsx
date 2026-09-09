import { Outlet } from 'react-router-dom'
import SmoothScroll from '../common/SmoothScroll'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from '../common/FloatingWhatsApp'

export default function RootLayout() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#FAFCFA] text-slate-900 selection:bg-[#00D66C] selection:text-slate-950">
        {/* Transparent animated Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Floating WhatsApp and Social Media Handle */}
        <FloatingWhatsApp />

        {/* Animated Modern Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  )
}

