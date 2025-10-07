import Header from "../../.components/layout/Header/Header";
import SearchBlock from "../../.components/layout/SearchBlock/SearchBlock";
import SideBar from "../../.components/layout/SideBar/SideBar";
import './CatalogPage.css'
import { productService } from "../../.services/api/Product";
import { useEffect, useState } from "react";
import ProductCard from "../../.components/ui/ProductCard/ProductCard";
import { AnimatePresence, motion, spring } from "framer-motion";
import { cartService } from "../../.services/api/Cart";
const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [activeElement, setActiveElement] = useState(null);

    const OpenSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    }

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

    const handleAddToCart = async (productId) => {
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            await cartService.AddToCart({
                cartId: userData.cartId,
                productId: productId,
                quantity: 1
            });
        }
        catch(error) {

        }
    }
    return (
        <div className="CatalogPage">
            <div className="Header-container">
                <Header
                    onClick={OpenSideBar}
                    currentPage='catalog' />
            </div>
            <div className="SearchBlock-container">
                <SearchBlock />
            </div>
            <AnimatePresence>
                {sideBarOpen && (
                    <motion.div
                        className="SideBar-container"
                        initial={{ x: 300 }}
                        animate={{ x: 0 }}
                        exit={{ x: 300 }}
                        transition={{ type: spring, bounce: 0.1 }}>
                        <SideBar
                            activeElement={activeElement}
                            setActiveElement={setActiveElement} />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="Catalog-container">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        onClick={() => handleAddToCart(product.id)} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;