"use client";

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Socials from "../constants/Socials";

export default function BasicStatistics() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap="3rem"
      p="2rem"
    >
      {Socials.map((social, index) => (
        <Flex
          align="center"
          justify="space-between"
          bg={social.color}
          rounded="md"
          // _hover={{ bg: "gray.300" }}
          key={index}
          cursor="pointer"
        >
          <Flex alignItems="center" justifyContent="center" p="5rem">
            <Box
              as="span"
              fontSize="2rem"
              fontWeight="semibold"
              color="whiteAlpha.900"
              textTransform="uppercase"
            >
              {social.name}
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

// export default function BasicStatistics() {
//   return (
//     <SimpleGrid
//       columns={{ base: 1, md: 3 }}
//       spacing={{ base: 5, lg: 8 }}
//       p="2rem"
//     >
//       {Socials.map((social, index) => (
//         <Flex
//           align="center"
//           justify="space-between"
//           bg={social.color}
//           rounded="md"
//           // _hover={{ bg: "gray.300" }}
//           key={index}
//           cursor="pointer"
//         >
//           <Flex alignItems="center" justifyContent="center" p="5rem">
//             <Box
//               as="span"
//               fontSize="2rem"
//               fontWeight="semibold"
//               color="whiteAlpha.900"
//               textTransform="uppercase"
//             >
//               {social.name}
//             </Box>
//           </Flex>
//         </Flex>
//       ))}
//     </SimpleGrid>
//   );
// }
