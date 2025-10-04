import { useNavigate } from 'react-router-dom';
import '../../../.styles/layout/Header/Header.css'
import SearchMenuItem from './SearchMenuItem';
const Header = () => {
    const navigate = useNavigate();
    const toCart = () => {
        navigate('/cart');
    };
    return (
        <div className='header'>
            <div className='header-name'>
                <span>BitMarket</span>
            </div>
            <div className='header-menu'>
                <SearchMenuItem
                    text="Главная" />
                <SearchMenuItem
                    text="Каталог" />
                <SearchMenuItem
                    text="Покупателям" />
                <SearchMenuItem
                    text="О нас" />
            </div>
            <div className='header-user'>
                <img
                    className='header-user-cart'
                    onClick={toCart} />
                <img className='header-user-avatar' />
            </div>
        </div>
    );
};

export default Header;