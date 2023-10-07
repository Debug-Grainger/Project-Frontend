"use client";

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

export default function BasicStatistics() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      <Flex>Helllooo</Flex>

      <Box>HELLO</Box>
    </SimpleGrid>
  );
}
