import '../../../.styles/layout/Header/Header.css'
import SearchMenu from './SearchMenu';
const Header = () => {
    return (
        <div className='header'>
            <div className='header-name'>
                <span>BitMarket</span>
            </div>
            <div>
                <SearchMenu/>
            </div>
        </div>
    );
};

export default Header;