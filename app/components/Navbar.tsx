"use client";

import { MdLocalGroceryStore } from "react-icons/md";

import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Heading,
  Stack,
  Badge,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      p="2rem"
      background="#2f2f2f"
      color="white"
      alignContent="center"
    >
      <Flex w="50%" alignItems="center" justifyContent="flex-start">
        <Heading>NO NAME</Heading>
      </Flex>
      <Flex justifyContent="center" w="40%" alignItems="center">
        <Box px={10} cursor="pointer">
          <MdLocalGroceryStore size={35} />
        </Box>
        <Badge ml="1" fontSize="1rem" colorScheme="green" alignSelf="start">
          49$
        </Badge>
        <Stack direction="row" spacing={4}>
          <Avatar>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </Stack>
      </Flex>
    </Flex>
  );
}
