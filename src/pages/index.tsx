import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";

import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import { Header } from "../components/Header";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  return (
    <Box>
      <Header isHomePage />
      <Box align="center" justify="center">
        <Image src="/images/banner.svg" alt="banner" boxSize="100%" />
        <Stack direction="row" spacing="4" justify="space-evenly" mt="8">
          <Flex display="column" justify="center">
            <Image src="/images/cocktail.svg" alt="drink" />
            <Text fontSize="24px" fontWeight="600" mt="5" alignSelf="center">
              vida noturna
            </Text>
          </Flex>
          <Flex display="column">
            <Image src="/images/surf.svg" alt="drink" />
            <Text fontSize="24px" fontWeight="600" mt="5" alignSelf="center">
              praia
            </Text>
          </Flex>
          <Flex display="column">
            <Image src="/images/building.svg" alt="building" />
            <Text fontSize="24px" fontWeight="600" mt="5" alignSelf="center">
              moderno
            </Text>
          </Flex>
          <Flex display="column">
            <Image src="/images/museum.svg" alt="museum" />
            <Text fontSize="24px" fontWeight="600" mt="5" alignSelf="center">
              clássico
            </Text>
          </Flex>
          <Flex display="column">
            <Image src="/images/earth.svg" alt="drink" />
            <Text fontSize="24px" fontWeight="600" mt="5" alignSelf="center">
              e mais...
            </Text>
          </Flex>
        </Stack>
        <Center width={90} mt="20">
          <Divider orientation="horizontal" bg="gray.500" height="2px" />
        </Center>
        <Box mt="10" mb="10">
          <Text fontSize="36px" fontWeight="500" color="gray.500">
            Vamos nessa?
          </Text>
          <Text fontSize="36px" fontWeight="500" color="gray.500">
            Então escolha seu continente
          </Text>
        </Box>
        <Box w="80%">
          <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={true}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <VStack
                align="center"
                justify="center"
                w="100%"
                h="100%"
                position="absolute"
              >
                <Link passHref href="/continent">
                  <Box as="a">
                    <Text color="white.700" fontWeight="700" fontSize="48px">
                      Europa
                    </Text>
                    <Text color="white.700" fontWeight="700" fontSize="24px">
                      O continente mais antigo
                    </Text>
                  </Box>
                </Link>
              </VStack>
              <Image
                src="/images/europa.svg"
                bgSize="cover"
                bgPos="center"
                alt="Europa"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <VStack
                align="center"
                justify="center"
                w="100%"
                h="100%"
                position="absolute"
              >
                <Text color="white.700" fontWeight="700" fontSize="48px">
                  América do Sul
                </Text>
                <Text color="white.700" fontWeight="700" fontSize="24px">
                  O continente abundante em recurso naturais
                </Text>
              </VStack>
              <Image
                w="1240px"
                h="450px"
                src="/images/south_america.jpg"
                alt="América do Sul"
                bgSize="cover"
                bgPos="center"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <VStack
                align="center"
                justify="center"
                w="100%"
                h="100%"
                position="absolute"
              >
                <Text color="white.700" fontWeight="700" fontSize="48px">
                  América do Norte
                </Text>
                <Text color="white.700" fontWeight="700" fontSize="24px">
                  Maior país: Canadá Menor país: México
                </Text>
              </VStack>
              <Image
                w={1240}
                h={450}
                src="/images/north_america11.jpg"
                alt="América do Norte"
                bgSize="cover"
                bgPos="center"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <VStack
                align="center"
                justify="center"
                w="100%"
                h="100%"
                position="absolute"
              >
                <Text color="white.700" fontWeight="700" fontSize="48px">
                  Ásia
                </Text>
                <Text color="white.700" fontWeight="700" fontSize="24px">
                  É o maior dos continentes, tanto em área como em população.
                </Text>
              </VStack>
              <Image
                w={1240}
                h={450}
                src="/images/asia5.jpg"
                bgSize="cover"
                bgPos="center"
                alt="Ásia"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <VStack
                align="center"
                justify="center"
                w="100%"
                h="100%"
                position="absolute"
              >
                <Text color="white.700" fontWeight="700" fontSize="48px">
                  África
                </Text>
                <Text color="white.700" fontWeight="700" fontSize="24px">
                  É o terceiro continente mais extenso com cerca de 30 milhões
                  de quilômetros quadrados
                </Text>
              </VStack>
              <Image
                w={1240}
                h={450}
                src="/images/africa1.jpg"
                alt="África"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <VStack
                align="center"
                justify="center"
                w="100%"
                h="100%"
                position="absolute"
              >
                <Text color="white.700" fontWeight="700" fontSize="48px">
                  Oceania
                </Text>
                <Text color="white.700" fontWeight="700" fontSize="24px">
                  É uma região geográfica composta por vários grupos de ilhas do
                  oceano Pacífico
                </Text>
              </VStack>
              <Image
                w={1240}
                h={450}
                src="/images/oceania3.jpg"
                bgSize="cover"
                bgPos="center"
                alt="Oceania"
              ></Image>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box height={50}></Box>
      </Box>
    </Box>
  );
}
