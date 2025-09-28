import '../../../.styles/layout/Header/Header.css'
import SearchMenuItem from './SearchMenuItem';
const Header = () => {
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
                <img/>
            </div>
        </div>
    );
};

export default Header;