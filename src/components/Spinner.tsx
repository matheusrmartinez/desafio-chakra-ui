import { Flex, Spinner as ChakraSpinner } from "@chakra-ui/react";

interface SpinnerProps {
  isVisible: boolean;
}

export default function Spinner({ isVisible }: SpinnerProps) {
  return (
    isVisible && (
      <Flex
        align="center"
        justify="center"
        bg="rgba(245, 248, 250, .9)"
        position="fixed"
        top="0"
        right="0"
        w="100vw"
        h="100vh"
        zIndex="20"
      >
        <ChakraSpinner size="xl" color="yellow.400" />
      </Flex>
    )
  );
}
