import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

interface InfoCompProps {
  keyTxt: string;
  valueTxt: string;
  mid: boolean;
}

const Info: React.FC<InfoCompProps> = ({ keyTxt, valueTxt, mid }) => {
  const blMID = mid ? 1 : 0;
  const mlMID = mid ? 8 : 0;

  return (
    <Flex
      align={{ base: 'center', md: 'start' }}
      direction="column"
      borderLeftWidth={{ sm: blMID }}
      ml={{ md: mid ? -1 : 0 }}
      pl={{ md: mlMID }}
    >
      <Text
        opacity={{ base: 0.68, md: 0.5 }}
        fontSize={{ base: '0.65rem', lg: 'xs' }}
        fontWeight={800}
        mb={{ md: 1 }}
        textTransform="uppercase"
        letterSpacing="widest"
        color="gray.600"
      >
        {keyTxt}
      </Text>
      <Text
        fontSize={{ base: 'xl', sm: 'lg', lg: 'xl', xl: '2xl' }}
        fontWeight={600}
        color="gray.700"
      >
        {valueTxt}
      </Text>
    </Flex>
  );
};

export default Info;
