import { SimpleGrid } from '@chakra-ui/core';
import React from 'react';

import Info from './Info';

const Card: React.FC = () => (
  <SimpleGrid
    rounded="xl"
    boxShadow="xl"
    w="100%"
    maxW="1024px"
    bg="white"
    spacingY={{ base: 5 }}
    columns={{ base: 1, sm: 2, md: 4 }}
    mx="auto"
    py={{ base: 5, lg: 6 }}
    px={{ md: 5, lg: 6, xl: 8 }}
  >
    <Info keyTxt="IP Address" valueTxt="192.212.174.101" mid={false} />
    <Info keyTxt="Location" valueTxt="Brooklyn, NY" mid />
    <Info keyTxt="TimeZone" valueTxt="UTC -05:00" mid />
    <Info keyTxt="ISP" valueTxt="SpaceX Starlink" mid />
  </SimpleGrid>
);

export default Card;
