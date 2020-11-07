import { Box } from '@chakra-ui/core';
import { LatLngTuple } from 'leaflet';
import React from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from 'react-leaflet';

interface MapCompProps {
  coordinates: LatLngTuple;
  address: string;
}

const Map: React.FC<MapCompProps> = ({ coordinates, address }) => (
  <Box
    top={{ base: '66%', sm: '76%', md: '80%', lg: '78%' }}
    position="absolute"
    zIndex={-9}
    w="100%"
    h="85vh"
  >
    <MapContainer
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom={false}
      zoomControl={false}
      closePopupOnClick
      center={coordinates}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>{address}</Popup>
      </Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
  </Box>
);

export default Map;
