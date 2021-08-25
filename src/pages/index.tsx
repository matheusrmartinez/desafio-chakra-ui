import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

import { Box, Center, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Header } from '../components/Header';

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  return (
    <Box>
      <Header />
      <Box align="center" justify="center">
        <Image src="/images/banner.svg" alt="banner" boxSize="100%" />
        <Stack direction="row" spacing="4" justify="space-evenly" mt="8">
          <Flex display="column" justify="center">
            <Image src="/images/cocktail.svg" alt="drink" />
            <Text mt="2" alignSelf="center">
              vida noturna
            </Text>
          </Flex>
          <Flex display="column" justify="center">
            <Image src="/images/surf.svg" alt="drink" />
            <Text mt="2" alignSelf="center">
              praia
            </Text>
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
            <Text mt="2">e mais...</Text>
          </Flex>
        </Stack>
        <Center width={90} mt="20">
          <Divider bg="gray.500" stroke="solid" />
        </Center>
        <Box mt="10" mb="10">
          <Text fill="solid" fontSize="3xl" color="gray.500">
            Vamos nessa?
          </Text>
          <Text as="p" fontSize="3xl" color="gray.500">
            Então escolha seu continente
          </Text>
        </Box>
        <Box w="80%" height="80%">
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={true}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <Image src="/images/europa.svg" alt="Europa"></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image w={1240} h={450} src="/images/south_america.jpg" alt="América do Sul"></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image w={1240} h={450} src="/images/north_america.jpg" alt="América do Norte"></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image w={1240} h={450} src="/images/asia.jpg" alt="Ásia"></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image w={1240} h={450} src="/images/africa.jpg" alt="África"></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image w={1240} h={450} src="/images/oceania.jpg" alt="Oceania"></Image>
              </SwiperSlide>
            </Swiper>
          <Box height={50}></Box>
        </Box>
      </Box>
    </Box>
  );
}
