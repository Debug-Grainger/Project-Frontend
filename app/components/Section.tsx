"use client";

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Socials from "../constants/Socials";

export default function BasicStatistics() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacing={{ base: 5, lg: 8 }}
      p="2rem"
    >
      {Socials.map((social, index) => (
        <Flex
          align="center"
          justify="space-between"
          bg="gray.200"
          rounded="md"
          p={4}
          _hover={{ bg: "gray.300" }}
          key={index}
          cursor="pointer"
        >
          <Flex alignItems="center" justifyContent="center">
            <Box
              as="span"
              fontWeight="semibold"
              color="gray.500"
              textTransform="uppercase"
            >
              {social.name}
            </Box>
          </Flex>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
