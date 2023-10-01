import Hero from "./components/Home";
import { ChakraProvider } from '@chakra-ui/react'
export default function Home() {
  return (
    <div>
      <ChakraProvider>
      <Hero />
      </ChakraProvider>
    </div>
  );
}
