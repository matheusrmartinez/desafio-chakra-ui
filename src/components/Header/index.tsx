import { Flex, HStack, Icon, IconButton, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex w="100%" h={["50px", "100px"]} alignItems="center">
      {notHomePage && (
        <HStack ml={["20px", "140px"]}>
          <Link passHref href="/">
            <IconButton
              aria-label="Open navigation"
              variant="unstyled"
              color="#rgb(0,0,0,0.25)"
              zIndex="1"
              icon={<Icon fontSize="30" as={RiArrowLeftSLine} />}
            />
          </Link>
        </HStack>
      )}
      <HStack position="absolute" w="100%" justify="center">
        <Image src="/images/logo.svg" w={["81px", "185px"]} h={["20px","46px"]} alt="logo" />
      </HStack>
    </Flex>
  );
}
