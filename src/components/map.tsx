'use client';

import 'leaflet/dist/leaflet.css';

import type { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import { MapMarker } from './map-marker';

const defaultCoor: LatLngTuple = [0, 0];

export default function Leaflet({ pos }: { pos: LatLngTuple | null }) {
  return (
    <div className="maps-leaf absolute top-[--ht] -z-50 w-full">
      <MapContainer
        zoom={14}
        zoomControl={false}
        center={defaultCoor}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapMarker pos={pos} />
      </MapContainer>
    </div>
  );
}
