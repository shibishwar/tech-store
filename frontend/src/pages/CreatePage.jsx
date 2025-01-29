import { Box, Text, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useProductStore } from "../store/product"

const CreatePage = () => {

    const [newProduct, setNewProduct] = useState({name: "", price: "", image: ""})

    const toast = useToast()

    const {createProduct} = useProductStore()

    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newProduct)
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error",
                duration: 5000,
                isClosable:true
            })
        }
        else{
            toast({
                title:"Success",
                description:message,
                status:"success",
                duration: 5000,
                isClosable:true
            })
        }
        setNewProduct({name:"", price:"", image:""})
    }

    return(
        <Container maxW={"container.sm"}>
            <VStack
                spacing={8}
                pt="100px"
            >
                <Text 
                    fontSize={"50"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.500, green.400)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Add a product
                </Text>

                <Box 
                    w={"full"} 
                    bg={useColorModeValue("white", "gray.800")}
                    p={6}
                    rounded={"lg"}
                    shadow={"lg"}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            name="name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <Input
                            placeholder="Price"
                            name="price"
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        />
                        <Input
                            placeholder="Image URL"
                            name="image"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        />
                        <Button colorScheme="green" onClick={handleAddProduct} w='full'>
                            Add Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage