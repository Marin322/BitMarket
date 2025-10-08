import { useState } from 'react';
import './CartElement.css'
import { motion } from 'framer-motion';
const CartElement = ({ name, price, quantity, onClick, itemId, onQuantityChange }) => {
    const [count, setCount] = useState(quantity);
    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    const lineVariants = {

    };

    const minusUnit = async () => {
        const newCount = count - 1;
        if (newCount > 0) {  // ← меняем >= на >
            setCount(newCount);
            await onQuantityChange(itemId, newCount);
        } else if (newCount === 0) {
            // Если стало 0, спрашиваем или сразу удаляем
            if (window.confirm('Удалить товар из корзины?')) {
                setCount(0);
                await onQuantityChange(itemId, 0);
            }
        }
    };

    const plusUnit = async () => {
        const newCount = count + 1;
        setCount(newCount);
        await onQuantityChange(itemId, newCount);
    };

    return (
        <div className="CartElement-container">
            <div className='CartElement-image'>
                <img />
            </div>
            <div className='CartElement-info'>
                <div className='CartElement-info-container'>
                    <p className='CartElement-info-name'>Процессор</p>
                    <p>{name}</p>
                </div>
                <div className='CartElement-quantity-container'>
                    <div className='CartElement-quantity-change'>
                        <p onClick={minusUnit}><b>-</b></p>
                    </div>
                    <div className='CartElement-quantity-background'>
                        <p>{count}</p>
                    </div>
                    <div className='CartElement-quantity-change'>
                        <p onClick={plusUnit}><b>+</b></p>
                    </div>
                </div>
                <div className='CartElement-price-container'>
                    <p className='CartElement-price-info'>Цена</p>
                    <p>{price} ₽</p>
                </div>
                <div className='CartElement-delete-container'>
                    <div>
                        <motion.button
                            onClick={onClick}
                            className="close-btn"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                        >
                            <motion.span
                                variants={lineVariants}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '15%',
                                    width: '75%',
                                    height: '3px',
                                    background: '#000',
                                    transform: 'rotate(45deg)',
                                    background: 'var(--main-button-color)'
                                }}
                            />
                            <motion.span
                                variants={lineVariants}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '15%',
                                    width: '75%',
                                    height: '3px',
                                    background: '#000',
                                    transform: 'rotate(-45deg)',
                                    background: 'var(--main-button-color)'
                                }}
                            />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartElement;