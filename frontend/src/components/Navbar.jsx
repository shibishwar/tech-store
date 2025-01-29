import { Box, Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { PlusSquareIcon } from '@chakra-ui/icons'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return(
        <Box 
            position="fixed" 
            top="0" 
            left="0" 
            width="100%" 
            bg={"gray.800"} 
            boxShadow="md" 
            zIndex="1000"
            pb={{base:"10px", sm:"0"}}
        >
            <Container maxW="1140px" px={4}>
                <Flex 
                    h={{ base: "20", sm: "20" }} 
                    alignItems="center" 
                    justifyContent="space-between" 
                    flexDir={{ base: "column", sm: "row" }}
                >
                    <Text
                        fontSize={{ base: "22px", sm: "28px" }}
                        fontWeight="bold"
                        textTransform="uppercase"
                        textAlign="center"
                        bgGradient="linear(to-r, cyan.500, green.400)"
                        bgClip="text"
                    >
                        <Link to="/">Tech Store</Link>
                    </Text>
                    <HStack spacing={2} alignItems="center">
                        <Link to="/create">
                            <Button>
                                <PlusSquareIcon fontSize={20} />
                            </Button>
                        </Link>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar