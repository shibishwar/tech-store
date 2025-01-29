import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useProductStore } from "../store/product"
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSearch from "../components/ProductSearch";

const HomePage = () => {

    const {fetchProducts, products} = useProductStore();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    useEffect(() => {
        setFilteredProducts(products);
    }, [products])

    return(
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8} pt="50px">
                <Text 
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.500, green.400)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Currently Available 
                </Text>

                {/* Product Search Component */}
                <ProductSearch products={products} onSearch={setFilteredProducts} />
                <SimpleGrid
                    columns={{
                        base:1,
                        md:2,
                        lg:3
                    }}
                    spacing={10}
                    w={"full"}
                >
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product}/>
                    ))}
                </SimpleGrid>


                {/* <SimpleGrid
                    columns={{
                        base:1,
                        md:2,
                        lg:3
                    }}
                    spacing={10}
                    w={"full"}
                >
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product}/>
                    ))}
                </SimpleGrid> */}
                
                {products.length === 0 && (
                    <Text 
                    fontSize='xl'
                    fontWeight='bold'
                    textAlign={"center"}
                    color='gray.500'
                    >
                        No products found! {" "}
                        <Link to={"/create"}>
                            <Text as='span' color='blue.500' _hover={{textDecoration: "underline"}}>
                                Create a product
                            </Text>
                        </Link>
                    </Text>
                )}
                
            </VStack>
        </Container>
    )
}

export default HomePage