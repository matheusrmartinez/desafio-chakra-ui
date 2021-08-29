import { Box, Image, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";

import Divider from "../components/Divider";
import { Header } from "../components/Header/";
import Menus from "../components/Menus";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Box>
      <Header />
      <Box align="center" justify="center">
        <Image src="/images/banner.svg" alt="banner" w="100%" />
        <Menus />
        <Divider />
        <Box mt="10" mb="10">
          <Text fontSize="36px" fontWeight="500" color="gray.500">
            Vamos nessa?
          </Text>
          <Text fontSize="36px" fontWeight="500" color="gray.500">
            Então escolha seu continente
          </Text>
        </Box>
        <Slider />
        <Box height={50}></Box>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const response = [
    {
      slug: "europe",
      title: "",
      summary: "",
    },
  ];
  const continents = response.map((continent) => {
    return {
      slug: continent.slug,
      title: continent.title,
      summary: continent.summary,
    };
  });

  return {
    props: {
      continents
    }
  }
};
