import './CartElement.css'
import { motion } from 'framer-motion';
const CartElement = ({ name, price, quantity }) => {
    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    const lineVariants = {

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
                        <p><b>+</b></p>
                    </div>
                    <div className='CartElement-quantity-background'>
                        <p>{quantity}</p>
                    </div>
                    <div className='CartElement-quantity-change'>
                        <p><b>-</b></p>
                    </div>
                </div>
                <div className='CartElement-price-container'>
                    <p className='CartElement-price-info'>Цена</p>
                    <p>{price} ₽</p>
                </div>
                <div className='CartElement-delete-container'>
                    <div>
                        <motion.button
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