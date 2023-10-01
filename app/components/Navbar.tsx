"use client";

import { Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      justifyContent="space-around"
      p="2rem"
      background="#2f2f2f"
      color="white"
    >
      <Box
        py="1rem"
        px="3rem"
        cursor="pointer"
        borderBottom="2px"
        borderColor="white"
        display="flex"
        justifyContent="center"
      >
        Instagram
      </Box>
      <Box
        py="1rem"
        px="3rem"
        cursor="pointer"
        borderBottom="2px"
        borderColor="white"
        display="flex"
        justifyContent="center"
      >
        Tik Tok
      </Box>
      <Box
        py="1rem"
        px="3rem"
        cursor="pointer"
        borderBottom="2px"
        borderColor="white"
        display="flex"
        justifyContent="center"
      >
        You Tube
      </Box>
      <Box
        py="1rem"
        px="3rem"
        cursor="pointer"
        borderBottom="2px"
        borderColor="white"
        display="flex"
        justifyContent="center"
      >
        X
      </Box>
    </Flex>
  );
}
