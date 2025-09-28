import '../../../.styles/layout/Header/SearchMenuItem.css'

const SearchMenuItem = ({text, onClick}) => {
    return (
        <div className='search-menu-container'>
            <span onClick={onClick}>{text}</span>
        </div>
    );
};

export default SearchMenuItem;