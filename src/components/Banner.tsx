import React from "react";
import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    lg: true,
    base: false
  });

  return (
    <Box>
      <Box
        position="absolute"
        pl={["16px", "140px"]}
        pt={["28px", "80px"]}
        textAlign="initial"
      >
        <Text
          as="p"
          color="white.700"
          fontSize={["20px", "36px"]}
          fontWeight="500"
          lineHeight={["30px","54px"]}
        >
          5 continentes,
          <br />
          infinitas possibilidades.
        </Text>
        <Text
          mt={["8px", "20px"]}
          color="darkGray.400"
          fontSize={["14px", "20px"]}
          fontWeight="400"
          lineHeight={["21px", "30px"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWideVersion && (
        <Flex
          position="absolute"
          mt="100px"
          w="100%"
          pr="140px"
          justifyContent="flex-end"
        >
          <Image src="/images/airplane.svg" alt="banner" />
        </Flex>
      )}
      {isWideVersion ? (
        <Image src="/images/background_banner.svg" alt="banner" width="100%" />
      ) : (
        <Image src="/images/small_background.svg" alt="banner" width="100%" />
      )}
    </Box>
  );
}
