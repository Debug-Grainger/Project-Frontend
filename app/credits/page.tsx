"use client"
import Navbar from "../components/Navbar";
import {Button, Text, Flex} from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import Link from "next/link";
export default function Credits() {
  const router = useRouter();



    return (<div>
      <Navbar />
      <div>
      <Text>Choose an option:</Text>
      <Flex justifyContent="center" alignItems="center">
      <Link href={"/credits/option1"}> <Button borderRadius="5px" boxShadow="0 0 5px rgba(0, 0, 0, 0.3)" colorScheme="blue" >Option 1</Button> </Link>
      <Link href={"/credits/option2"}> <Button borderRadius="5px" boxShadow="0 0 5px rgba(0, 0, 0, 0.3)" colorScheme="blue" >Option 2</Button> </Link>
      <Link href={"/credits/option3"}> <Button borderRadius="5px" boxShadow="0 0 5px rgba(0, 0, 0, 0.3)" colorScheme="blue" >Option 3</Button> </Link>
    </Flex>
    </div>
      </div>
    );
  }
  