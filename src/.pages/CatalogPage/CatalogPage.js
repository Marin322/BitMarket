import Header from "../../.components/layout/Header/Header";
import SearchBlock from "../../.components/layout/SearchBlock/SearchBlock";
import './CatalogPage.css'
import { productService } from "../../.services/api/Product";
import { useEffect, useState } from "react";
import ProductCard from "../../.components/ui/ProductCard/ProductCard";
const CatalogPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const productsData = await productService.GetAllProducts();
            setProducts(productsData);
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="CatalogPage">
            <div className="Header-container">
                <Header />
            </div>
            <div className="SearchBlock-container">
                <SearchBlock />
            </div>
            <div className="Catalog-container">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;