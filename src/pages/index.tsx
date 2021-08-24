import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box>
      <Header />
      <Box>
        <Image src="/images/banner.svg" alt="banner" />
        <Stack
          direction="row"
          spacing="30"
          w="100%"
          justifyContent="center"
          mt="8"
          
          >
          <Flex display="column">
            <Image src="/images/cocktail.svg" alt="drink" />
            <Text mt="2" alignSelf="center">
              vida noturna
            </Text>
          </Flex>
          <Flex display="column" alignContent="center">
            <Image src="/images/surf.svg" alt="surf" />
            <Text mt="2" alignSelf="center">praia</Text>
          </Flex>
          <Flex display="column">
            <Image src="/images/building.svg" alt="building" />
            <Text mt="2">moderno</Text>
          </Flex>
          <Flex display="column">
            <Image src="/images/museum.svg" alt="museum" />
            <Text mt="2">clássico</Text>
          </Flex>
          <Flex display="column">
            <Image src="/images/earth.svg" alt="drink" />
            <Text mt="2">e mais</Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
