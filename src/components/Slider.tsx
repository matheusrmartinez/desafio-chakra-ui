import { Box, VStack, Text, Image, useBreakpointValue } from "@chakra-ui/react";
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
import { RiContactsBookLine } from "react-icons/ri";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
interface SliderProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
    smallImage: string;
  }[];
}

export default function Slider({ continents }: SliderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  console.log(continents[0].smallImage, 'smallImage');

  return (
    <Box w={["100%", "80%"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 4000 }}
      >
        {continents.map((continent) => {
          return (
            <SwiperSlide key={continent.slug}>
              <VStack
                align="center"
                justify="center"
                w="100%"
                h="100%"
                position="absolute"
              >
                <Link passHref href="/continent">
                  <Box as="a">
                    <Text
                      color="white.700"
                      fontWeight="700"
                      fontSize={["24px", "36px", "48px"]}
                    >
                      {continent.title}
                    </Text>
                    <Text
                      color="white.700"
                      fontWeight="700"
                      fontSize={["14px", "24px"]}
                    >
                      {continent.summary}
                    </Text>
                  </Box>
                </Link>
              </VStack>
              {isWideVersion ? (
                <Image
                  src={`/images/${continent.image}`}
                  bgSize="cover"
                  bgPos="center"
                  alt="país"
                  w="1240px"
                  h="450px"
                />
              ) : (
                <Image
                  src={`/images/${continent.smallImage}`}
                  bgSize="cover"
                  bgPos="center"
                  alt="país"
                  w="375px"
                  h="250px"
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
