import { Box, Image, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";
import Banner from "../components/Banner";

import Divider from "../components/Divider";
import { Header } from "../components/Header/";
import Menus from "../components/Menus";
import Slider from "../components/Slider";

export default function Home({ continents }) {
  console.log(JSON.stringify(continents, null, 2), 'continents')
  return (
    <Box>
      <Header />
      <Box align="center" justify="center">
        <Banner/>
        <Menus />
        <Divider />
        <Text
          mt={["8", "10"]}
          mb={["5", "10"]}
          fontSize={["24px", "36px"]}
          fontWeight="500"
          color="gray.500"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
        <Slider continents={continents} />
        <footer style={{ marginBottom: 30 }} />
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const response = [
    {
      slug: "europe",
      title: "Europa",
      summary: "O continente mais antigo",
      image: "europa.svg",
      smallImage: "small_europe.svg",
      continentDescription: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
      
    },
    {
      slug: "americaSul",
      title: "América do Sul",
      summary: "O continente abundante em recurso naturais",
      image: "south_america.jpg",
      smallImage: "small_europe.svg"
    },
    {
      slug: "americaNorte",
      title: " América do Norte",
      summary: "Maior país: Canadá Menor país: México",
      image: "north_america11.jpg",
      smallImage: "small_europe.svg"
    },
    {
      slug: "asia",
      title: "Ásia",
      summary: "É o maior dos continentes, tanto em área como em população.",
      image: "asia5.jpg",
      smallImage: "small_europe.svg"
    },
    {
      slug: "africa",
      title: "África",
      summary:
        "É o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados",
      image: "africa1.jpg",
      smallImage: "small_europe.svg"
    },
    {
      slug: "oceania",
      title: "Oceania",
      summary:
        "É uma região geográfica composta por vários grupos de ilhas do oceano Pacífico",
      image: "oceania3.jpg",
      smallImage: "small_europe.svg"
    },
  ];
  const continents = response.map((continent) => {
    return {
      slug: continent.slug,
      title: continent.title,
      summary: continent.summary,
      image: continent.image,
      smallImage: continent.smallImage,
    };
  });

  return {
    props: {
      continents,
    },
  };
};
