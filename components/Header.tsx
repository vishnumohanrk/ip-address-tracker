import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

interface HeaderCompProps {
  form: React.ReactNode;
  card: React.ReactNode;
}

const Header: React.FC<HeaderCompProps> = ({ form, card }) => (
  <Flex
    direction="column"
    bgImage="url('./pattern-bg.png')"
    bgRepeat="no-repeat"
    bgSize="cover"
    w="100vw"
    px={4}
  >
    <header>
      <Text
        fontSize={{ base: '2xl' }}
        fontWeight={500}
        letterSpacing="wide"
        as="h1"
        my={6}
        size="lg"
        color="white"
        textAlign="center"
      >
        IP Address Tracker
      </Text>
    </header>
    {form}
    {card}
  </Flex>
);

export default Header;
