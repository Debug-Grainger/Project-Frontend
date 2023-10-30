"use client";

import { MdLocalGroceryStore } from "react-icons/md";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
  Center,
  background,
} from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu>
      <Flex
        h={16}
        justifyContent="space-between"
        p="2rem"
        background="#000a1d"
        color="white"
        alignContent="center"
        alignItems={"center"}
        bg={useColorModeValue("rgb(17, 17, 17)", "rgb(3, 3, 3)")}
      >
        <Flex w="50%" alignItems="center" justifyContent="flex-start">
        <Link href={"/"}> <Heading>NO NAME</Heading>
        </Link>
        </Flex>

        {/* Shtova kete pr butonin e nates ZZZ */}

        <Flex justifyContent="center" w="20%" alignItems="center">
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Box px={5} cursor="pointer">
            <MdLocalGroceryStore size={35} />
          </Box>
          <Badge ml="1" fontSize="1rem" colorScheme="green" alignSelf="start">
            49$
          </Badge>
          <MenuButton>
            <Stack direction="row" spacing={4}>
              <Avatar
                src={
                  "https://cdn.discordapp.com/avatars/399911902211473410/1dd5b0e986c2ccd2f0e82257d94b6b33.png?size=512"
                }
              >
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
            </Stack>
          </MenuButton>
          <MenuList alignItems={"center"} background="gray.800">
            <br />
            <Center>
              <Avatar
                size={"2xl"}
                src={
                  "https://cdn.discordapp.com/avatars/399911902211473410/1dd5b0e986c2ccd2f0e82257d94b6b33.png?size=512"
                }
              />
            </Center>
            <br />
            <Center>
              <p>(Username)</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem background="gray.800" _hover={{ background: "gray.600" }}>
              Your Orders
            </MenuItem>
            <Link href={"/credits"}>
            <MenuItem background="gray.800" _hover={{ background: "gray.600" }}>
              Add to balance
            </MenuItem>
            </Link>
            <MenuItem background="gray.800" _hover={{ background: "gray.600" }}>
              Logout
            </MenuItem>
          </MenuList>
        </Flex>
      </Flex>
    </Menu>
  );
}
