import { MdLocalGroceryStore } from "react-icons/md";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Heading,
  Stack,
  Badge,
  Button,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    </Menu>
  );
}
