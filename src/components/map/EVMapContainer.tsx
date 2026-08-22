import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation, Layers, X, Zap, Star, Sparkles } from 'lucide-react'
import StationSidebar from './StationSidebar'
import MapSearchBar from './MapSearchBar'
import type { ChargingStation } from '../../types/station.types'

const DEFAULT_CENTER: [number, number] = [12.9716, 77.5946] // Bengaluru
const DEFAULT_ZOOM = 12
const WORLD_BOUNDS: L.LatLngBoundsExpression = [[-85, -180], [85, 180]]
const SIDEBAR_W = 420

type MapStyle = 'standard' | 'satellite' | 'terrain' | 'traffic'

const MAP_TILES: Record<MapStyle, { name: string; url: string }> = {
  standard: {
    name: 'Standard',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  },
  satellite: {
    name: 'Satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  },
  terrain: {
    name: 'Terrain',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  },
  traffic: {
    name: 'Traffic',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  },
}



interface EVMapContainerProps {
  stations: ChargingStation[]
  selectedStation: ChargingStation | null
  onSelectStation: (station: ChargingStation | null) => void
  onDirections: (station: ChargingStation) => void
  onLocateMe: () => void
  searchQuery: string
  onSearchChange: (q: string) => void
  onOpenFilter: () => void
  activeFilterCount: number
  matchingStations: ChargingStation[]
  isLoading?: boolean
}

/* ── Map Controller ── */
function MapController({
  selectedStation,
  sidebarOpen,
}: {
  selectedStation: ChargingStation | null
  sidebarOpen: boolean
}) {
  const map = useMap()

  useEffect(() => {
    if (!selectedStation) return

    const t = setTimeout(() => {
      map.invalidateSize({ animate: false })

      const point = map.latLngToContainerPoint([selectedStation.lat, selectedStation.lng])
      const offset = sidebarOpen ? SIDEBAR_W / 2 : 0
      const newPoint = L.point(point.x + offset, point.y)

      map.flyTo([selectedStation.lat, selectedStation.lng], 14, {
        animate: true,
        duration: 1.0,
      })
    }, 100)

    return () => clearTimeout(t)
  }, [selectedStation, map, sidebarOpen])

  useEffect(() => {
    const t = setTimeout(() => map.invalidateSize({ animate: true }), 320)
    return () => clearTimeout(t)
  }, [sidebarOpen, map])

  return null
}

/* ── Modern EV Station Pin: vivid radial glow + triple-ring pulse ── */
function createStationPinIcon(isSelected: boolean, isAvailable: boolean) {
  const base = isSelected ? 52 : 42
  const pin  = base
  const tail = Math.round(pin * 0.38)
  // Green palette
  const gA   = isAvailable ? '#4ade80' : '#fbbf24'   // light green / amber
  const gB   = isAvailable ? '#16a34a' : '#f59e0b'   // mid green
  const gC   = isAvailable ? '#15803d' : '#d97706'   // deep green / dark amber
  const glow = isAvailable ? 'rgba(22,163,74,' : 'rgba(251,191,36,'

  const html = `
    <div style="
      position:relative;
      width:${pin + 20}px;
      height:${pin + tail + 20}px;
      display:flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
    ">
      <!-- Single subtle pulse ring -->
      <span style="
        position:absolute;
        top:6px; left:6px;
        width:${pin + 8}px; height:${pin + 8}px;
        border-radius:50%;
        background:${glow}0.18);
        animation:ping 2.2s cubic-bezier(0,0,0.2,1) infinite;
      "></span>

      <!-- Pin body -->
      <div style="
        position:absolute;
        top:10px; left:10px;
        width:${pin}px;
        height:${pin + tail}px;
        display:flex;
        flex-direction:column;
        align-items:center;
      ">
        <!-- Teardrop head -->
        <div style="
          width:${pin}px;
          height:${pin}px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          background: linear-gradient(135deg, ${gA} 0%, ${gB} 55%, ${gC} 100%);
          border: ${isSelected ? '3px' : '2.5px'} solid #ffffff;
          box-shadow:
            0 0 10px ${glow}0.35),
            0 0 22px ${glow}0.18),
            0 4px 14px rgba(0,0,0,0.45);
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
          z-index:2;
        ">
          <div style="transform:rotate(45deg);display:flex;align-items:center;justify-content:center;">
            <svg width="${Math.round(pin * 0.42)}" height="${Math.round(pin * 0.42)}" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
        </div>
        <!-- Tail tip -->
        <div style="
          width:0; height:0;
          border-left:${Math.round(tail * 0.5)}px solid transparent;
          border-right:${Math.round(tail * 0.5)}px solid transparent;
          border-top:${tail}px solid ${gC};
          margin-top:-2px;
          position:relative; z-index:1;
        "></div>
      </div>
    </div>
  `
  return L.divIcon({
    html,
    className: 'ev-station-pin',
    iconSize:   [pin + 20, pin + tail + 20],
    iconAnchor: [(pin + 20) / 2, pin + tail + 14],
  })
}


export default function EVMapContainer({
  stations,
  selectedStation,
  onSelectStation,
  onDirections,
  onLocateMe,
  searchQuery,
  onSearchChange,
  onOpenFilter,
  activeFilterCount,
  matchingStations,
  isLoading,
}: EVMapContainerProps) {
  const [mapStyle, setMapStyle] = useState<MapStyle>('standard')
  const [showStyleMenu, setShowStyleMenu] = useState(false)
  const sidebarOpen = !!selectedStation



  return (
    <div className="relative w-full h-full overflow-hidden flex bg-[#0B101D]">
      <style>{`
        .leaflet-control-attribution { display: none !important; }
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-tip {
          background: #0B101D !important;
          border: 1px solid #1E293B !important;
        }
      `}</style>

      {/* ── Full-height left sidebar ── */}
      <AnimatePresence>
        {selectedStation && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: SIDEBAR_W, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            className="hidden md:flex flex-col h-full z-20 bg-[#0B101D] shadow-2xl overflow-hidden shrink-0"
          >
            <StationSidebar
              station={selectedStation}
              onClose={() => onSelectStation(null)}
              onDirections={onDirections}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ── Map Area ── */}
      <div className="relative flex-1 h-full min-w-0">
        
        {/* Top Floating Controls Row (Centered when sidebar is closed, aligned right when open) */}
        <div
          className={`absolute top-6 z-30 transition-all duration-300 pointer-events-none flex items-center gap-3 px-4 sm:px-6 ${
            sidebarOpen
              ? 'left-0 md:left-4 right-0 justify-between'
              : 'inset-x-0 justify-center'
          }`}
        >
          {/* Search bar inside container */}
          <div className="w-full max-w-2xl pointer-events-auto">
            <MapSearchBar
              searchQuery={searchQuery}
              onSearchChange={onSearchChange}
              onOpenFilter={onOpenFilter}
              activeFilterCount={activeFilterCount}
              onLocateMe={onLocateMe}
              totalCount={stations.length}
              matchingStations={matchingStations}
              isLoading={isLoading}
              onSelectStation={(st) => {
                onSelectStation(st)
                onSearchChange('')
              }}
            />
          </div>

          {/* Layers Button Aligned Straight on Top Right */}
          <div className="relative pointer-events-auto shrink-0">
            <button
              onClick={() => setShowStyleMenu(!showStyleMenu)}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#0B1220]/95 backdrop-blur-xl border border-slate-800 text-white font-extrabold text-xs shadow-2xl hover:border-slate-700 transition-all cursor-pointer"
            >
              <Layers className="h-4 w-4 text-[#00D66C]" />
              <span className="hidden sm:inline">Layers</span>
              <span className="text-[10px]">˅</span>
            </button>

            {showStyleMenu && (
              <div className="absolute right-0 top-full mt-2 bg-[#0B1220]/95 backdrop-blur-xl border border-slate-800 text-white rounded-2xl p-2.5 shadow-2xl min-w-[150px] space-y-1 z-50">
                {(Object.keys(MAP_TILES) as MapStyle[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setMapStyle(key)
                      setShowStyleMenu(false)
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-extrabold text-left transition-all ${
                      mapStyle === key
                        ? 'bg-[#00D66C] text-slate-950 font-black'
                        : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${mapStyle === key ? 'bg-slate-950' : 'border border-slate-500'}`} />
                    {MAP_TILES[key].name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <MapContainer
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          minZoom={3}
          maxZoom={18}
          zoomControl={false}
          attributionControl={false}
          scrollWheelZoom={true}
          maxBounds={WORLD_BOUNDS}
          maxBoundsViscosity={1.0}
          worldCopyJump={false}
          className="w-full h-full z-0 bg-[#0B101D]"
        >
          <TileLayer
            key={mapStyle}
            url={MAP_TILES[mapStyle].url}
            noWrap={true}
            bounds={WORLD_BOUNDS}
            maxZoom={19}
          />

          <MapController selectedStation={selectedStation} sidebarOpen={sidebarOpen} />

          {/* Station Markers only */}
          {stations.map((s) => {
            const isSelected = selectedStation?.id === s.id
            const isAvailable = s.status === 'available'

            return (
              <Marker
                key={s.id}
                position={[s.lat, s.lng]}
                icon={createStationPinIcon(isSelected, isAvailable)}
                eventHandlers={{
                  click: () => onSelectStation(s),
                }}
              >
                {/* Mini Card matching Image 4: circular/rounded image, title, Available, 4.9 rating, small connector bubble, Get Directions button */}
                {isSelected && (
                  <Popup position={[s.lat, s.lng]} closeButton={false}>
                    <div className="bg-[#0B101D] text-white rounded-3xl p-4 w-[285px] border border-slate-800 shadow-2xl space-y-3">
                      {/* Top row: Circular Photo + Title + Status + Rating + Close */}
                      <div className="flex items-start gap-3">
                        <img
                          src={s.image}
                          alt={s.name}
                          className="h-12 w-12 rounded-full object-cover shrink-0 border-2 border-slate-700"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-black text-white truncate leading-snug">{s.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00D66C]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#00D66C] animate-pulse" />
                              Available
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-400">
                              <Star className="h-3 w-3 fill-amber-400" />
                              {s.rating}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => onSelectStation(null)}
                          className="p-1 text-slate-400 hover:text-white transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Small Compact Connector Bubble Pill */}
                      <div className="pt-0.5">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121B2D] border border-slate-800 text-xs font-bold w-full justify-between">
                          <span className="flex items-center gap-1.5 text-[#00D66C]">
                            <Zap className="h-3.5 w-3.5 fill-[#00D66C] stroke-none" />
                            {s.connectors[0]?.type || 'CCS2'}
                          </span>
                          <span className="text-slate-300 font-extrabold">
                            {s.connectors[0]?.power || 350} kW
                          </span>
                        </div>
                      </div>

                      {/* CTA Button: Get Directions with star/sparkle icon */}
                      <button
                        onClick={() => onDirections(s)}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#00D66C] text-slate-950 text-xs font-black hover:bg-[#9BE500] transition-all shadow-md shadow-[#00D66C]/20"
                      >
                        <span>Get Directions</span>
                        <Sparkles className="h-3.5 w-3.5 fill-slate-950 stroke-none" />
                      </button>
                    </div>
                  </Popup>
                )}
              </Marker>
            )
          })}
        </MapContainer>

        {/* ── Bottom-Right Controls: See Chargers Near Me ── */}
        <div className="absolute bottom-6 right-6 z-30">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onLocateMe}
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#0B1220] text-white font-extrabold text-xs sm:text-sm border border-slate-800 shadow-2xl hover:bg-[#121B2D] transition-all cursor-pointer"
          >
            <Navigation className="h-4 w-4 fill-white" />
            See chargers near me
          </motion.button>
        </div>
      </div>
    </div>
  )
}
