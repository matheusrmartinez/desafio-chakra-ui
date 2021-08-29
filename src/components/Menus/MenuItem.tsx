import React from 'react';
import {Flex, Text, Image, useBreakpointValue} from '@chakra-ui/react';

interface MenuItemProps {
  icon: string;
  text: string;
}

export function MenuItem({icon, text}){
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  })
  return (
    <Flex 
      direction={["row","column"]} 
      align="center" 
      justify="center">
      {isMobile ? 
        <Image 
          src={`/images/${icon}.svg`}
          alt={text} 
          w="85px" 
          h="85px" 
          mb="6" /> : 
          <Text color="yellow" fontSize="4xl" mr="2">•</Text>}
      <Text 
        fontWeight="600" 
        color="gray.700" 
        fontSize={["md", "xl","2xl"]}>{text}</Text>
    </Flex>
)
}