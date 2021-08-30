import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  IconButton,
  Icon,
  Heading,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Continent() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header/>
      <Box height={["150px", "500px"]}>
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
        {isWideVersion ? <Image src="/images/europe_high.png" alt="europe" boxSize="100%" />
        : <Image src="/images/europe_small.svg" w="100%" alt="europe"/>}
      </Box>
      <Stack pl={["16px", "140px"]} pt={["24px", "40px", "80px"]} w="100%" backgroundColor="blue">
        <Stack flexDirection={["column", "row"]}>
          <Stack width={["343px", "600px"]} height={["146px", "211px"]} textAlign="justify">
            <Text fontSize={["14px", "24px"]} color="gray.500">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste.
            </Text>
          </Stack>
          <Box ml="6">
            <HStack ml={["16px", "20px"]} w={["343px", "490px"]} justify="space-between" backgroundColor="red">
              <VStack align="center" lineHeight="40px" justify="center" ml="6">
                <Text
                  color="yellow"
                  fontWeight="semibold"
                  weight="400"
                  fontSize="48px"
                >
                  50
                </Text>
                <Text fontWeight="semibold" weight="400" fontSize="24px">
                  países
                </Text>
              </VStack>
              <VStack align="center" lineHeight="40px" justify="center " ml="6">
                <Text
                  color="yellow"
                  fontWeight="semibold"
                  weight="400"
                  fontSize="48px"
                >
                  60
                </Text>
                <Text fontWeight="semibold" weight="400" fontSize="24px">
                  línguas
                </Text>
              </VStack>
              <VStack align="center" lineHeight="40px" justify="center " ml="6">
                <Text
                  color="yellow"
                  fontWeight="semibold"
                  weight="400"
                  fontSize="48px"
                >
                  27
                </Text>
                <Text fontWeight="semibold" weight="400" fontSize="24px">
                  cidades +100
                  <Tooltip
                    hasArrow
                    label="Search places"
                    bg="gray.300"
                    color="black"
                  >
                    <IconButton
                      aria-label="Open navigation"
                      mb="1"
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
        <Box pt={["200px", "80px"]} height="700px" width="97%">
          <Heading fontWeight="bold">Cidades +100</Heading>
          <Grid
            pt="10"
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
            templateRows="repeat(2, 1fr)"
            gap={5}
          >
            <Box w="256px" h="279px" border="1px" borderColor="rgba(255,186,8,0.5)">
              <Image src="images/londres.svg" alt="Londres"/>
              <HStack justify="space-around" height="35%" lineHeight="10" align="center" >
                <Box flexDirection="row">
                  <Text fontFamily="Barlow" fontWeight="600" color="gray.500" fontSize="20px">Londres</Text>
                  <Text fontFamily="Barlow" fontWeight="500" color="darkGray.500" fontSize="16px">Reino Unido</Text>
                </Box>
                <Image src="images/reinounido_bandeira.svg" alt="Bandeira Londres"></Image>
              </HStack>
            </Box>
            <Box w="256px" h="279px" border="1px" borderColor="rgba(255,186,8,0.5)">
              <Image src="images/paris.svg" alt="Londres"/>
              <HStack justify="space-around" height="35%" lineHeight="10" align="center" >
                <Box flexDirection="row">
                  <Text fontFamily="Barlow" fontWeight="600" color="gray.500" fontSize="20px">Paris</Text>
                  <Text fontFamily="Barlow" fontWeight="500" color="darkGray.500" fontSize="16px">França</Text>
                </Box>
                <Image src="images/franca_bandeira.svg" alt="Bandeira Londres"></Image>
              </HStack>
            </Box>
            <Box w="256px" h="279px" border="1px" borderColor="rgba(255,186,8,0.5)">
              <Image src="images/roma.svg" alt="Londres"/>
              <HStack justify="space-around" height="35%" lineHeight="10" align="center" >
                <Box flexDirection="row">
                  <Text fontFamily="Barlow" fontWeight="600" color="gray.500" fontSize="20px">Roma</Text>
                  <Text fontFamily="Barlow" fontWeight="500" color="darkGray.500" fontSize="16px">Itália</Text>
                </Box>
                <Image src="images/italia_bandeira.svg" alt="Bandeira Londres"></Image>
              </HStack>
            </Box>
            <Box w="256px" h="279px" border="1px" borderColor="rgba(255,186,8,0.5)">
              <Image src="images/praga.svg" alt="Londres"/>
              <HStack justify="space-around" height="35%" lineHeight="10" align="center" >
                <Box flexDirection="row">
                  <Text fontFamily="Barlow" fontWeight="600" color="gray.500" fontSize="20px">Praga</Text>
                  <Text fontFamily="Barlow" fontWeight="500" color="darkGray.500" fontSize="16px">República Tcheca</Text>
                </Box>
                <Image src="images/republica_bandeira.svg" alt="Bandeira Londres"></Image>
              </HStack>
            </Box>
            <Box w="256px" h="279px" border="1px" mb="10" borderColor="rgba(255,186,8,0.5)">
              <Image src="images/amsterda.svg" alt="Londres"/>
              <HStack justify="space-around" height="35%" lineHeight="10" align="center" >
                <Box flexDirection="row">
                  <Text fontFamily="Barlow" fontWeight="600" color="gray.500" fontSize="20px">Amsterdã</Text>
                  <Text fontFamily="Barlow" fontWeight="500" color="darkGray.500" fontSize="16px">Holanda</Text>
                </Box>
                <Image src="images/holanda_bandeira.svg" alt="Bandeira Londres"></Image>
              </HStack>
            </Box>

          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
