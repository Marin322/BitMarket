import './CartPage.css'
import { cartService } from '../../.services/api/Cart';
import { useEffect, useState } from 'react';
import CartElement from './CartElement';
import Header from '../../.components/layout/Header/Header';

const CartPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));

            const cartData = await cartService.GetCartItems(userData.cartId);

            setProducts(cartData);
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteCartItem = async (productId) => {
        try {
            const del = await cartService.DeleteItem(productId)
        }
        catch (error) {

        };
    };

    const updateQuantity = async (itemId, newQuantity) => {
        try {
            await cartService.ChangeQuantity(itemId, newQuantity);
            if (newQuantity === 0) {
                await deleteCartItem(itemId);
                loadCartItems;
            };
        }
        catch(error) {

        };
    };

    return (
        <div className='CartPage-container'>
            <div className='Header-container'>
                <Header
                    currentPage='cart' />
            </div>
            <div className='CartPage-cart-items'>
                {products.map(product => (
                    <CartElement
                        onClick={() => deleteCartItem(product.itemId)}
                        itemId={product.itemId}
                        onQuantityChange={updateQuantity}
                        key={product.itemId}
                        name={product.productName}
                        price={product.price}
                        quantity={product.quantity} />
                ))}
            </div>
        </div>
    );
};

export default CartPage;