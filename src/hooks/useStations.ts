/* ── React Query hooks for charging station data ───────────── */

import { useQuery } from '@tanstack/react-query'
import { fetchStations, fetchStationById, type StationFilters } from '../services/stationsService'
import type { ChargingStation } from '../types/station.types'

export const STATION_KEYS = {
  all: ['stations'] as const,
  filtered: (f: StationFilters) => ['stations', f] as const,
  detail: (id: string) => ['stations', id] as const,
}

/** Primary hook — all stations with optional filters */
export function useStations(filters?: StationFilters) {
  return useQuery({
    queryKey: STATION_KEYS.filtered(filters ?? {}),
    queryFn: () => fetchStations(filters),
    staleTime: 60_000,          // 1 min
    refetchOnWindowFocus: false,
  })
}

/** Hook for a single station detail */
export function useStation(id: string | null) {
  return useQuery({
    queryKey: STATION_KEYS.detail(id ?? ''),
    queryFn: () => fetchStationById(id!),
    enabled: !!id,
    staleTime: 60_000,
  })
}

/* ── Clustering utility ─────────────────────────────────────── */

import type { StationCluster } from '../types/station.types'
import { useMemo } from 'react'

const CLUSTER_ZOOM_THRESHOLD = 13

/**
 * Grid-based clustering.
 * At zoom ≥ CLUSTER_ZOOM_THRESHOLD → returns null (caller renders individual markers).
 * At zoom <  CLUSTER_ZOOM_THRESHOLD → returns cluster groups.
 */
export function useStationClusters(
  stations: ChargingStation[],
  zoom: number,
): StationCluster[] | null {
  return useMemo(() => {
    if (zoom >= CLUSTER_ZOOM_THRESHOLD) return null

    // cell size in degrees shrinks as zoom increases
    const gridSize = Math.pow(2, 13 - zoom) * 0.003

    const cells = new Map<string, { lats: number[]; lngs: number[]; stations: ChargingStation[] }>()

    for (const st of stations) {
      const gx = Math.floor(st.lat / gridSize)
      const gy = Math.floor(st.lng / gridSize)
      const key = `${gx},${gy}`

      if (!cells.has(key)) cells.set(key, { lats: [], lngs: [], stations: [] })
      const cell = cells.get(key)!
      cell.lats.push(st.lat)
      cell.lngs.push(st.lng)
      cell.stations.push(st)
    }

    return Array.from(cells.entries()).map(([key, cell]) => ({
      id: key,
      lat: cell.lats.reduce((a, b) => a + b, 0) / cell.lats.length,
      lng: cell.lngs.reduce((a, b) => a + b, 0) / cell.lngs.length,
      count: cell.stations.length,
      stations: cell.stations,
      hasAvailable: cell.stations.some((s) => s.status === 'available'),
    }))
  }, [stations, zoom])
}
