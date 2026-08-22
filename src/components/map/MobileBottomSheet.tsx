import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StationSidebar from './StationSidebar'
import type { ChargingStation } from '../../types/station.types'

interface MobileBottomSheetProps {
  station: ChargingStation | null
  onClose: () => void
  onDirections: (station: ChargingStation) => void
}

export default function MobileBottomSheet({ station, onClose, onDirections }: MobileBottomSheetProps) {
  // Lock background scroll when sheet is open
  useEffect(() => {
    if (station) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [station])

  return (
    <AnimatePresence>
      {station && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="md:hidden fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-[2px]"
          />

          {/* Bottom Sheet — inner scroll locked to sheet, not page */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}

            className="md:hidden fixed bottom-0 inset-x-0 z-50 rounded-t-[2.5rem] bg-white overflow-hidden shadow-2xl border-t border-slate-200 flex flex-col"
            // 82vh gives a nice sheet peek
            style={{ maxHeight: '82dvh', overscrollBehavior: 'contain' }}
          >
            {/* Pull handle */}
            <div className="w-full flex items-center justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-slate-300" />
            </div>

            {/* Content — scrollable, contained */}
            <div className="flex-1 overflow-hidden">
              <StationSidebar
                station={station}
                onClose={onClose}
                onDirections={onDirections}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
