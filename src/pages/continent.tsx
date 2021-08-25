import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";

export default function Continent(){
  return (
    <Box>
      <Header />
      <Box align="center" justify="center">
      <Text fontSize={48} fontWeight="semibold" mt={380} ml={170} position="absolute" color="white.standard">Europa</Text>
        <Image src="/images/europe_high.png" alt="europe" boxSize="100%" />
      </Box>
      <Box boxSize="lg" textAlign="justify">
      <Text fontSize={24}>
      A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      </Box>
    </Box>
  )
}