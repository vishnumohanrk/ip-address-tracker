import { icon } from 'leaflet';
import { Marker } from 'react-leaflet';

import markerSVG from '../../public/icon-location.svg';

const markerIcon = icon({
  iconUrl: markerSVG.src,
});

export function MapMarker() {
  return <Marker icon={markerIcon} position={[0, 0]} />;
}
