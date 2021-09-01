import { Box, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import Cities from '../components/Cities';
import { Header } from '../components/Header';
import InfoContinent from '../components/InfoContinent';

export default function Continent() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Box height={["150px", "500px"]}>
        {isWideVersion && (
          <Text
            fontSize={["28px", "48px"]}
            fontWeight="semibold"
            mt={380}
            pl="140px"
            position="absolute"
            color="white.standard"
          >
            Europa
          </Text>
        )}
        {isWideVersion ? (
          <Image src="/images/europe_high.png" alt="europe" boxSize="100%" />
        ) : (
          <Image src="/images/europe_small.svg" w="100%" alt="europe" />
        )}
      </Box>
      <Stack pl={["16px", "140px"]} pt={["24px", "40px", "50px", "80px"]} w="100%">
        <Stack flexDirection={["column", "column", "column", "row"]}>
          <InfoContinent />
        </Stack>
        <Cities />
      </Stack>
      <footer style={{ marginBottom: 80 }} />
    </Box>
  );
}
