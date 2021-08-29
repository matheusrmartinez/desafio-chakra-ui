import { Center, Divider as ChakraDivider } from "@chakra-ui/react";
import React from "react";

export default function Divider() {
  return (
    <Center width={90} mt={["10", "20"]}>
      <ChakraDivider orientation="horizontal" bg="gray.500" height="2px" />
    </Center>
  );
}
