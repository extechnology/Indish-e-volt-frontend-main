/* ─────────────────────────────────────────────────────────────────────
   Stations Service — repository / API layer
   Contains nationwide EV stations across India & major cities/highways
───────────────────────────────────────────────────────────────────── */

import type { ChargingStation } from '../types/station.types'

/* ── Dummy stations dataset across India (Matching Image 2 map view) ── */
const DUMMY_STATIONS: ChargingStation[] = [
  // Bengaluru Hubs
  {
    id: 'ev-blr-01',
    name: 'Indish-e-Volt Koramangala Hub',
    address: '80 Feet Rd, Koramangala 4th Block',
    city: 'Bengaluru', state: 'Karnataka',
    lat: 12.9352, lng: 77.6245,
    connectors: [
      { type: 'CCS2', power: 160, available: 4, total: 6 },
      { type: 'Type2', power: 22, available: 2, total: 4 },
    ],
    amenities: ['Coffee Lounge', 'WiFi', 'Restrooms', 'EV Wash'],
    isOpen24h: true, rating: 4.9, reviews: 342,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },
  {
    id: 'ev-blr-02',
    name: 'Indish-e-Volt Whitefield Mega Station',
    address: 'Whitefield Main Road, ITPL',
    city: 'Bengaluru', state: 'Karnataka',
    lat: 12.9698, lng: 77.7500,
    connectors: [
      { type: 'CCS2', power: 160, available: 6, total: 10 },
      { type: 'Type2', power: 22, available: 3, total: 6 },
    ],
    amenities: ['Food Court', 'WiFi', 'Restrooms', 'Lounge'],
    isOpen24h: true, rating: 4.8, reviews: 289,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },
  {
    id: 'ev-blr-03',
    name: 'Indiranagar 100Ft Rd Charging Point',
    address: '100 Feet Road, Indiranagar',
    city: 'Bengaluru', state: 'Karnataka',
    lat: 12.9784, lng: 77.6408,
    connectors: [{ type: 'CCS2', power: 150, available: 1, total: 4 }],
    amenities: ['WiFi', 'Restrooms'],
    isOpen24h: true, rating: 4.6, reviews: 154,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },
  {
    id: 'ev-blr-04',
    name: 'Hebbal Airport Highway Supercharger',
    address: 'Hebbal Flyover, Bellary Rd',
    city: 'Bengaluru', state: 'Karnataka',
    lat: 13.0358, lng: 77.5970,
    connectors: [{ type: 'CCS2', power: 160, available: 5, total: 6 }],
    amenities: ['24h Cafe', 'Restrooms', 'WiFi'],
    isOpen24h: true, rating: 4.9, reviews: 412,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },

  // Mumbai & Navi Mumbai
  {
    id: 'ev-bom-01',
    name: 'BKC Ultra Fast EV Hub',
    address: 'G Block, Bandra Kurla Complex',
    city: 'Mumbai', state: 'Maharashtra',
    lat: 19.0657, lng: 72.8686,
    connectors: [
      { type: 'CCS2', power: 160, available: 8, total: 12 },
      { type: 'Tesla', power: 250, available: 4, total: 4 },
    ],
    amenities: ['Lounge', 'Cafe', 'Restrooms', 'Valet'],
    isOpen24h: true, rating: 4.9, reviews: 520,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 20, status: 'available',
  },
  {
    id: 'ev-bom-02',
    name: 'Lower Parel Phoenix Station',
    address: 'Senapati Bapat Marg, Lower Parel',
    city: 'Mumbai', state: 'Maharashtra',
    lat: 18.9950, lng: 72.8258,
    connectors: [{ type: 'CCS2', power: 150, available: 3, total: 6 }],
    amenities: ['Shopping Mall', 'Restrooms', 'WiFi'],
    isOpen24h: false, rating: 4.7, reviews: 310,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 19, status: 'available',
  },
  {
    id: 'ev-bom-03',
    name: 'Navi Mumbai Vashi Plaza Station',
    address: 'Sector 17, Vashi',
    city: 'Navi Mumbai', state: 'Maharashtra',
    lat: 19.0770, lng: 72.9980,
    connectors: [{ type: 'CCS2', power: 240, available: 4, total: 4 }],
    amenities: ['Food Court', 'Restrooms'],
    isOpen24h: true, rating: 4.8, reviews: 198,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },

  // Pune
  {
    id: 'ev-pune-01',
    name: 'Koregaon Park Solar Charging Station',
    address: 'North Main Road, Koregaon Park',
    city: 'Pune', state: 'Maharashtra',
    lat: 18.5362, lng: 73.8940,
    connectors: [{ type: 'CCS2', power: 160, available: 5, total: 6 }],
    amenities: ['Solar Canopy', 'Organic Cafe', 'WiFi'],
    isOpen24h: true, rating: 4.9, reviews: 275,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },
  {
    id: 'ev-pune-02',
    name: 'Hinjewadi IT Park Express Station',
    address: 'Phase 1, Hinjewadi Rajiv Gandhi IT Park',
    city: 'Pune', state: 'Maharashtra',
    lat: 18.5912, lng: 73.7389,
    connectors: [
      { type: 'CCS2', power: 160, available: 4, total: 8 },
      { type: 'Type2', power: 22, available: 2, total: 4 },
    ],
    amenities: ['Food Stalls', 'WiFi', 'Restrooms'],
    isOpen24h: true, rating: 4.6, reviews: 340,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },

  // Delhi NCR (Delhi, Gurgaon, Noida)
  {
    id: 'ev-del-01',
    name: 'Connaught Place EV Flagship Hub',
    address: 'Outer Circle, Connaught Place',
    city: 'New Delhi', state: 'Delhi',
    lat: 28.6315, lng: 77.2167,
    connectors: [
      { type: 'CCS2', power: 160, available: 6, total: 10 },
      { type: 'CHAdeMO', power: 50, available: 2, total: 2 },
    ],
    amenities: ['VIP Lounge', 'WiFi', 'Restrooms', 'Cafe'],
    isOpen24h: true, rating: 4.9, reviews: 610,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 20, status: 'available',
  },
  {
    id: 'ev-ggn-01',
    name: 'Gurugram Cyber City Supercharger',
    address: 'DLF Cyber City, Phase 2',
    city: 'Gurugram', state: 'Haryana',
    lat: 28.4950, lng: 77.0895,
    connectors: [
      { type: 'CCS2', power: 160, available: 7, total: 8 },
      { type: 'Tesla', power: 250, available: 2, total: 4 },
    ],
    amenities: ['Executive Lounge', 'Food Court', 'WiFi'],
    isOpen24h: true, rating: 4.8, reviews: 490,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 19, status: 'available',
  },
  {
    id: 'ev-noi-01',
    name: 'Noida Expressway Highway Stop',
    address: 'Sector 126, Noida Expressway',
    city: 'Noida', state: 'Uttar Pradesh',
    lat: 28.5420, lng: 77.3320,
    connectors: [{ type: 'CCS2', power: 240, available: 4, total: 6 }],
    amenities: ['Drive-thru Cafe', 'Restrooms'],
    isOpen24h: true, rating: 4.7, reviews: 230,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },

  // Ahmedabad & Gujarat
  {
    id: 'ev-amd-01',
    name: 'SG Highway Hypercharge Hub',
    address: 'SG Highway, Bodakdev',
    city: 'Ahmedabad', state: 'Gujarat',
    lat: 23.0373, lng: 72.5118,
    connectors: [{ type: 'CCS2', power: 160, available: 5, total: 8 }],
    amenities: ['24h Cafe', 'WiFi', 'Restrooms'],
    isOpen24h: true, rating: 4.8, reviews: 380,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 17, status: 'available',
  },
  {
    id: 'ev-sur-01',
    name: 'Surat Diamond Corridor Station',
    address: 'Ring Road, Surat',
    city: 'Surat', state: 'Gujarat',
    lat: 21.1702, lng: 72.8311,
    connectors: [{ type: 'CCS2', power: 160, available: 3, total: 4 }],
    amenities: ['WiFi', 'Restrooms'],
    isOpen24h: true, rating: 4.6, reviews: 190,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 17, status: 'available',
  },

  // Hyderabad
  {
    id: 'ev-hyd-01',
    name: 'Gachibowli Financial District Hub',
    address: 'Financial District, Gachibowli',
    city: 'Hyderabad', state: 'Telangana',
    lat: 17.4401, lng: 78.3489,
    connectors: [
      { type: 'CCS2', power: 160, available: 6, total: 10 },
      { type: 'Type2', power: 22, available: 4, total: 4 },
    ],
    amenities: ['Tech Lounge', 'Cafe', 'WiFi'],
    isOpen24h: true, rating: 4.9, reviews: 410,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },
  {
    id: 'ev-hyd-02',
    name: 'Jubilee Hills EV Oasis',
    address: 'Road No 36, Jubilee Hills',
    city: 'Hyderabad', state: 'Telangana',
    lat: 17.4312, lng: 78.4072,
    connectors: [{ type: 'CCS2', power: 150, available: 2, total: 4 }],
    amenities: ['Boutique Cafe', 'Restrooms'],
    isOpen24h: true, rating: 4.8, reviews: 260,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 19, status: 'available',
  },

  // Chennai
  {
    id: 'ev-maa-01',
    name: 'OMR IT Expressway Station',
    address: 'Old Mahabalipuram Rd, Sholinganallur',
    city: 'Chennai', state: 'Tamil Nadu',
    lat: 12.9010, lng: 80.2279,
    connectors: [{ type: 'CCS2', power: 160, available: 4, total: 8 }],
    amenities: ['24h Restroom', 'WiFi', 'EV Wash'],
    isOpen24h: true, rating: 4.8, reviews: 315,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },

  // Kolkata
  {
    id: 'ev-ccu-01',
    name: 'Salt Lake Sector V Tech Hub',
    address: 'Sector V, Salt Lake City',
    city: 'Kolkata', state: 'West Bengal',
    lat: 22.5726, lng: 88.4312,
    connectors: [{ type: 'CCS2', power: 160, available: 3, total: 6 }],
    amenities: ['WiFi', 'Cafe', 'Restrooms'],
    isOpen24h: true, rating: 4.7, reviews: 220,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 17, status: 'available',
  },

  // Jaipur
  {
    id: 'ev-jai-01',
    name: 'Jaipur Highway Solar Park',
    address: 'Jaipur Delhi Highway, Kukas',
    city: 'Jaipur', state: 'Rajasthan',
    lat: 26.9124, lng: 75.7873,
    connectors: [{ type: 'CCS2', power: 160, available: 5, total: 6 }],
    amenities: ['Heritage Cafe', 'Restrooms', 'Solar Canopy'],
    isOpen24h: true, rating: 4.9, reviews: 180,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 17, status: 'available',
  },

  // Goa
  {
    id: 'ev-goa-01',
    name: 'Panjim Coastal Green Charger',
    address: 'DB Marg, Miramar, Panaji',
    city: 'Panaji', state: 'Goa',
    lat: 15.4989, lng: 73.8278,
    connectors: [{ type: 'CCS2', power: 150, available: 4, total: 4 }],
    amenities: ['Beachside Cafe', 'WiFi'],
    isOpen24h: true, rating: 4.9, reviews: 450,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 18, status: 'available',
  },

  // Nagpur
  {
    id: 'ev-nag-01',
    name: 'Nagpur Central Grid Junction',
    address: 'Wardha Road, Nagpur',
    city: 'Nagpur', state: 'Maharashtra',
    lat: 21.1458, lng: 79.0882,
    connectors: [{ type: 'CCS2', power: 240, available: 3, total: 4 }],
    amenities: ['WiFi', 'Restrooms'],
    isOpen24h: true, rating: 4.6, reviews: 160,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 17, status: 'available',
  },

  // Chandigarh
  {
    id: 'ev-ixc-01',
    name: 'Chandigarh Sector 17 Superhub',
    address: 'Sector 17 Plaza, Chandigarh',
    city: 'Chandigarh', state: 'Punjab',
    lat: 30.7333, lng: 76.7794,
    connectors: [{ type: 'CCS2', power: 160, available: 4, total: 6 }],
    amenities: ['Shopping Plaza', 'WiFi', 'Restrooms'],
    isOpen24h: true, rating: 4.8, reviews: 210,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    network: 'Indish-e-Volt', pricePerKwh: 17, status: 'available',
  },
]

export interface StationFilters {
  status?: 'available' | 'all'
  minPower?: number
  maxDistance?: number
  userLat?: number
  userLng?: number
  connectorTypes?: string[]
  searchQuery?: string
}

/** Haversine formula to compute distance in km between two lat/lng points */
function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/** Fetch stations — can easily be replaced with a fetch('/api/stations') call */
export async function fetchStations(filters?: StationFilters): Promise<ChargingStation[]> {
  await new Promise((r) => setTimeout(r, 100))

  let data = [...DUMMY_STATIONS]

  if (filters?.searchQuery) {
    const q = filters.searchQuery.toLowerCase()
    data = data.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.state.toLowerCase().includes(q),
    )
  }

  if (filters?.status === 'available') {
    data = data.filter((s) => s.status === 'available')
  }

  if (filters?.minPower) {
    data = data.filter((s) =>
      s.connectors.some((c) => c.power >= (filters.minPower ?? 0)),
    )
  }

  if (filters?.connectorTypes?.length) {
    data = data.filter((s) =>
      s.connectors.some((c) => filters.connectorTypes!.includes(c.type)),
    )
  }

  if (filters?.maxDistance && filters.maxDistance > 0 && filters.userLat && filters.userLng) {
    data = data.filter((s) => {
      const dist = calculateDistanceKm(filters.userLat!, filters.userLng!, s.lat, s.lng)
      return dist <= filters.maxDistance!
    })
  }

  return data
}

/** Fetch single station */
export async function fetchStationById(id: string): Promise<ChargingStation | undefined> {
  await new Promise((r) => setTimeout(r, 100))
  return DUMMY_STATIONS.find((s) => s.id === id)
}
