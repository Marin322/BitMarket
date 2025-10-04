import '../../../.styles/ui/ProductCard/ProductCard.css'
import { easeInOut, inertia, motion, spring } from "framer-motion";
const ProductCard = ({ img, name, description, price }) => {

    return (
        <motion.div
            className="product-card"
            whileHover="hover"
            style={{
                transformStyle: 'preserve-3d'
            }}
            variants={{
                hover: {
                    y: -10,
                    transition: { duration: 0.3 }
                }
            }}>
            <div className='product-card-info'>
                <motion.div
                    variants={{
                        hover: {
                            scale: 1.1,
                            transition: {
                                type: spring,
                                duration: 0.5
                            }
                        }
                    }}>
                    <img src={img} />
                </motion.div>
                <div className='product-card-info-text'>
                    <h3>{name}</h3>
                    <span>{description}</span>
                    <span>{price} ₽</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;