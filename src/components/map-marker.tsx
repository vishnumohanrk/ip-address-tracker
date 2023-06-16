import type { LatLngTuple } from 'leaflet';
import { icon } from 'leaflet';
import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';

import markerSVG from '../../public/icon-location.svg';

const markerIcon = icon({
  iconUrl: markerSVG.src,
});

export function MapMarker({ pos }: { pos: LatLngTuple | null }) {
  const map = useMap();
  const [coor, setCoor] = useState<LatLngTuple>(() => [0, 0]);

  console.log('post');

  useEffect(() => {
    if (pos !== null) {
      map.flyTo(pos, 14);
      setCoor(pos);
    }
  }, [map, pos]);

  return <Marker icon={markerIcon} position={coor} />;
}
