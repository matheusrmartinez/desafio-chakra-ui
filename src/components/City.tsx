import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

interface CityProps {
  image: string;
  city: string;
  country: string;
  countryFlagImage: string;
  countryFlagDescription: string;
}

export default function City({
  image,
  city,
  country,
  countryFlagImage,
  countryFlagDescription,
}: CityProps) {
  return (
    <Box w="256px" h="279px" border="1px" borderColor="rgba(255,186,8,0.5)">
      <Image src={image} alt="Londres" />
      <HStack
        justify="space-around"
        height="35%"
        lineHeight="10"
        align="center"
      >
        <Box flexDirection="row">
          <Text
            fontFamily="Barlow"
            fontWeight="600"
            color="gray.500"
            fontSize="20px"
          >
            {city}
          </Text>
          <Text
            fontFamily="Barlow"
            fontWeight="500"
            color="darkGray.500"
            fontSize="16px"
          >
            {country}
          </Text>
        </Box>
        <Image src={countryFlagImage} alt={countryFlagDescription}></Image>
      </HStack>
    </Box>
  );
}
