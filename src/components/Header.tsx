import { Flex, HStack, Icon, IconButton, Image } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import {useRouter} from "next/router";
import Link from 'next/link';

interface HeaderProps {
  isHomePage?: boolean;
}

export function Header({ isHomePage = false }: HeaderProps) {
  return (
    <Flex w="100%" h="100px" alignItems="center">
      {!isHomePage && (
        <HStack ml="140px">
          <Link passHref href="/">
          <IconButton
            aria-label="Open navigation"
            variant="unstyled"
            color="#rgb(0,0,0,0.25)"
            zIndex="1"
            icon={<Icon fontSize="30" as={RiArrowLeftSLine}/>}
          />
          </Link>
        </HStack>
      )}
      <HStack position="absolute" w="100%" justify="center">
        <Image src="/images/logo.svg" alt="logo" />
      </HStack>
    </Flex>
  );
}
