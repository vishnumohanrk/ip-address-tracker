import type { LatLngTuple } from 'leaflet';
import { icon } from 'leaflet';
import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';

import { useAPI } from '@/hooks/use-api';

import markerSVG from '../../public/icon-location.svg';

const markerIcon = icon({
  iconUrl: markerSVG.src,
});

export function MapMarker() {
  const map = useMap();
  const { details } = useAPI();
  const [coor, setCoor] = useState<LatLngTuple>(() => [0, 0]);

  useEffect(() => {
    if (details?.success) {
      const newCoor: LatLngTuple = [details.latitude, details.longitude];
      map.flyTo(newCoor, 14);
      setCoor(newCoor);
    }
  }, [details, map]);

  return <Marker icon={markerIcon} position={coor} />;
}
