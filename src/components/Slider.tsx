import { Box, VStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function Slider() {
  return (
    <Box w="80%">
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 4000 }}
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
              É o terceiro continente mais extenso com cerca de 30 milhões de
              quilômetros quadrados
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
  );
}
