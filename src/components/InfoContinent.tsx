import {
  Box,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function InfoContinent() {
  return (
    <Stack flexDirection={["column", "column", "column", "row"]}>
      <Stack
        width={["343px", "600px"]}
        height={["146px", "211px"]}
        textAlign="justify"
      >
        <Text fontSize={["14px", "24px"]} color="gray.500">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
      </Stack>
      <Box pt={["4", "0"]} pl={["0", "5"]} display="flex" alignItems="center">
        <HStack
          ml={["0px", "20px"]}
          w={["343px", "490px"]}
          justify="space-between"
          alignItem="center"
        >
          <VStack
            align={["flex-start", "center"]}
            lineHeight={["18px", "40px"]}
            justify="center"
            ml={["0", "6"]}
          >
            <Text
              color="yellow"
              fontWeight="semibold"
              weight="600"
              fontSize={["24px", "48px"]}
            >
              50
            </Text>
            <Text
              fontWeight={["normal", "semibold"]}
              weight="400"
              fontSize={["18px", "24px"]}
            >
              países
            </Text>
          </VStack>
          <VStack
            align={["flex-start", "center"]}
            lineHeight={["18px", "40px"]}
            justify="center "
            ml={["0", "6"]}
          >
            <Text
              color="yellow"
              fontWeight="semibold"
              weight="400"
              fontSize={["24px", "48px"]}
            >
              60
            </Text>
            <Text
              fontWeight={["normal", "semibold"]}
              weight="400"
              fontSize={["18px", "24px"]}
            >
              línguas
            </Text>
          </VStack>
          <VStack
            align={["flex-start", "center"]}
            lineHeight={["19px", "40px"]}
            justify="center"
            ml={["0", "6"]}
          >
            <Text
              color="yellow"
              fontWeight="semibold"
              weight="400"
              fontSize={["24px", "48px"]}
            >
              27
            </Text>
            <Text
              fontWeight={["normal", "semibold"]}
              weight="400"
              fontSize={["18px", "24px"]}
            >
              cidades +100
              <Tooltip
                hasArrow
                label="Ranking das 100 melhores cidades para se morar."
                bg="gray.300"
                color="black"
              >
                <IconButton
                  aria-label="Open navigation"
                  mb={["5", "9"]}
                  w={[1]}
                  h={1}
                  zIndex="1"
                  variant="unstyled"
                  color="#DADADA"
                  icon={<Icon as={RiInformationLine} />}
                ></IconButton>
              </Tooltip>
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Stack>
  );
}
