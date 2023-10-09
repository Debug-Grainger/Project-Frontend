"use client";

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

export default function BasicStatistics() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      {/* (Socials.map () => (
        <Box key={Socials.id}>
          <Flex
            direction="column"
            align="center"
            justify="center"
            bg="gray.200"
            rounded="md"
            p={4}
            w="100%"
            h="100%"
          >
            <img src={Socials.icon} alt={Socials.name} />
            <Box mt={2} fontWeight="bold">
              {Socials.name}
            </Box>
          </Flex>
        </Box>
      )) */}
    </SimpleGrid>
  );
}
