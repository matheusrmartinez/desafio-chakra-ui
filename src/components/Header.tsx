import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

export function Header() {
  return (
    <Flex
      w="100%"
      h={100}
      maxWidth={1440}
      display="flex"
      justifyContent="center">
        <Box
          boxSize="sm"
          w="100%"
          h={100}
          display="flex"
          maxWidth={1440}
          alignItems="center"
          justifyContent="center">
        <Image src="/images/logo.svg" alt="logo" />
        </Box>
    </Flex>
  );
}
