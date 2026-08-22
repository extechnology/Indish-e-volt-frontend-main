import { useState, useMemo, useEffect } from 'react'
import { useStations } from '../hooks/useStations'
import type { StationFilters } from '../services/stationsService'
import type { ChargingStation } from '../types/station.types'
import EVMapContainer from '../components/map/EVMapContainer'
import FilterModal from '../components/map/FilterModal'
import MobileBottomSheet from '../components/map/MobileBottomSheet'

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<StationFilters>({ status: 'all', minPower: 0, maxDistance: 0, connectorTypes: [] })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedStation, setSelectedStation] = useState<ChargingStation | null>(null)
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null)

  // Fetch user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        },
        () => {
          setUserCoords({ lat: 12.9716, lng: 77.5946 })
        },
      )
    }
  }, [])

  // Combine search query and user coords into filters
  const combinedFilters = useMemo(
    () => ({
      ...filters,
      searchQuery,
      userLat: userCoords?.lat,
      userLng: userCoords?.lng,
    }),
    [filters, searchQuery, userCoords],
  )

  // Fetch stations via React Query
  const { data: stations = [], isLoading } = useStations(combinedFilters)

  // Matching stations for search dropdown
  const matchingStations = useMemo(() => {
    if (!searchQuery.trim()) {
      return stations.slice(0, 6)
    }
    const q = searchQuery.toLowerCase()
    return stations.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q) ||
        s.state.toLowerCase().includes(q),
    )
  }, [searchQuery, stations])

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.status === 'available') count++
    if (filters.minPower && filters.minPower > 0) count++
    if (filters.maxDistance && filters.maxDistance > 0) count++
    if (filters.connectorTypes && filters.connectorTypes.length > 0) count += filters.connectorTypes.length
    return count
  }, [filters])

  // Handle directions link
  const handleDirections = (station: ChargingStation) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Handle Locate Me / Near Me button
  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const uLat = pos.coords.latitude
          const uLng = pos.coords.longitude
          setUserCoords({ lat: uLat, lng: uLng })

          let nearest: ChargingStation | null = null
          let minDistance = Infinity

          for (const s of stations) {
            const dist = Math.hypot(s.lat - uLat, s.lng - uLng)
            if (dist < minDistance) {
              minDistance = dist
              nearest = s
            }
          }

          if (nearest) {
            setSelectedStation(nearest)
          }
        },
        () => {
          if (stations.length > 0) {
            setSelectedStation(stations[0])
          }
        },
      )
    } else if (stations.length > 0) {
      setSelectedStation(stations[0])
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0B101D] pt-20">
      {/* ── Main Map View ─── */}
      <div className="w-full h-full">
        <EVMapContainer
          stations={stations}
          selectedStation={selectedStation}
          onSelectStation={setSelectedStation}
          onDirections={handleDirections}
          onLocateMe={handleLocateMe}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenFilter={() => setIsFilterOpen(true)}
          activeFilterCount={activeFilterCount}
          matchingStations={matchingStations}
          isLoading={isLoading}
        />
      </div>

      {/* ── Mobile Bottom Sheet ─── */}
      <MobileBottomSheet
        station={selectedStation}
        onClose={() => setSelectedStation(null)}
        onDirections={handleDirections}
      />

      {/* ── Filter Modal Drawer ─── */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApplyFilters={setFilters}
      />
    </div>
  )
}
