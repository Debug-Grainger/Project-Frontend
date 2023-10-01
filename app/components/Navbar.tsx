"use client";

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
    <Menu>
      <Flex
        h={16}
        justifyContent="space-between"
        p="2rem"
        background="#2f2f2f"
        color="white"
        alignContent="center"
        alignItems={'center'}
      >
        <Flex w="50%" alignItems="center" justifyContent="flex-start">
          <Heading>NO NAME</Heading>
        </Flex>

        {/* Shtova kete pr butonin e nates ZZZ */}
          
        <Flex justifyContent="center" w="20%" alignItems="center">

        <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Box px={10} cursor="pointer">
            <MdLocalGroceryStore size={35} />
          </Box>
          <Badge ml="1" fontSize="1rem" colorScheme="green" alignSelf="start">
            49$
          </Badge>
          <MenuButton>
            <Stack direction="row" spacing={4}>
              <Avatar src={'https://cdn.discordapp.com/avatars/399911902211473410/1dd5b0e986c2ccd2f0e82257d94b6b33.png?size=512'}>
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
            </Stack>
          </MenuButton>
          <MenuList alignItems={'center'}>
            <br />
            <Center>
              <Avatar
                size={'2xl'}
                src={'https://cdn.discordapp.com/avatars/399911902211473410/1dd5b0e986c2ccd2f0e82257d94b6b33.png?size=512'}
              />
            </Center>
            <br />
            <Center>
              <p>Username</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Your Orders</MenuItem>
            <MenuItem>Add to balance</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Flex>
      </Flex>
    </Menu>
  );
}
