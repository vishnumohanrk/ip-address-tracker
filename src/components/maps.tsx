import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from 'react-leaflet';

import { MapMarker } from './map-marker';

export default function Leaflet() {
  return (
    <div className="maps-leaf w-full">
      <MapContainer
        zoom={13}
        center={[0, 0]}
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarker />
      </MapContainer>
    </div>
  );
}
