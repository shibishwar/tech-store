import { useState, useEffect } from "react";
import { Input, VStack } from "@chakra-ui/react";

const ProductSearch = ({ products, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        onSearch(products);
    }, [products, onSearch]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredProducts = query ? products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase())
        ) : products;
        onSearch(filteredProducts);
    };

    return (
        <VStack spacing={4} width="full">
            <Input 
                placeholder="Search product..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </VStack>
    );
};

export default ProductSearch;