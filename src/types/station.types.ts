/* ─────────────────────────────────────────────────────────────────────
   Charging Station Types
   All data-layer types live here so components stay decoupled.
───────────────────────────────────────────────────────────────────── */

export type ConnectorType = 'CCS2' | 'CHAdeMO' | 'Type2' | 'Tesla' | 'Bharat AC' | 'Bharat DC'
export type StationStatus = 'available' | 'busy' | 'offline' | 'coming_soon'

export interface Connector {
  type: ConnectorType
  power: number        // kW
  available: number
  total: number
}

export interface ChargingStation {
  id: string
  name: string
  address: string
  city: string
  state: string
  lat: number
  lng: number
  connectors: Connector[]
  amenities: string[]
  isOpen24h: boolean
  rating: number
  reviews: number
  image: string
  network: string
  pricePerKwh: number  // ₹
  status: StationStatus
}

export interface StationCluster {
  id: string
  lat: number
  lng: number
  count: number
  stations: ChargingStation[]
  hasAvailable: boolean
}
