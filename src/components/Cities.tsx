import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';

import City from './City';

export default function Cities() {
  return (
    <Box pt={["20px", "80px"]} height="700px" width={"82%"}>
      <Heading fontWeight="bold">Cidades +100</Heading>
      <Grid
        pt={["5", "10"]}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        pl={[14, 0]}
        templateRows="repeat(2, 1fr)"
        alignItems="start"
        gap={[5, 5]}
      >
        <City
          image="images/londres.svg"
          city="Londres"
          country="Reino Unido"
          countryFlagImage="images/reinounido_bandeira.svg"
          countryFlagDescription="Bandeira Londres"
        />
        <City
          image="images/paris.svg"
          city="Paris"
          country="França"
          countryFlagImage="images/franca_bandeira.svg"
          countryFlagDescription="Bandeira França"
        />
        <City
          image="images/roma.svg"
          city="Roma"
          country="Itália"
          countryFlagImage="images/italia_bandeira.svg"
          countryFlagDescription="Bandeira Itália"
        />
        <City
          image="images/praga.svg"
          city="Praga"
          country="República Tcheca"
          countryFlagImage="images/republica_bandeira.svg"
          countryFlagDescription="Bandeira Reública Tcheca"
        />
        <City
          image="images/amsterda.svg"
          city="Amsterdã"
          country="Holanda"
          countryFlagImage="images/holanda_bandeira.svg"
          countryFlagDescription="Bandeira Holanda"
        />
      </Grid>
    </Box>
  );
}
