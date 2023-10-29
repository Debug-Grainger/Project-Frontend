"use client"
import Navbar from "../components/Navbar";
import { Button, Text, Flex, Center, Menu, MenuItem, MenuButton } from '@chakra-ui/react';
import { FaArrowRight, FaCoins, FaCreditCard, FaGooglePay, FaPaypal } from 'react-icons/fa';
export default function Credits() {


  return (
    <div>
      <Navbar />
      <Center h="100vh">
        <Flex direction="column" alignItems="center" borderRadius="md" boxShadow="md" p={8} border="1px solid gray" width="50%">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Choose a payment method:</Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaCoins />} size="lg" >Current Credit: $1</MenuButton>
            <MenuButton as={Button} value="credit-card" rightIcon={<FaCreditCard />} >Credit Card</MenuButton>
            <MenuButton as={Button} value="paypal" rightIcon={<FaPaypal />} >PayPal</MenuButton>
            <MenuButton as={Button} value="google-pay" rightIcon={<FaGooglePay />} >Google Pay</MenuButton>
          </Menu>
        </Flex>
      </Center>
    </div>
  );
}