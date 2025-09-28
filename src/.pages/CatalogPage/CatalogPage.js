import Header from "../../.components/layout/Header/Header";
import SearchBlock from "../../.components/layout/SearchBlock/SearchBlock";
import './CatalogPage.css'
const CatalogPage = () => {
    return (
        <div className="CatalogPage">
            <div className="Header-container">
                <Header />
            </div>
            <div className="SearchBlock-container">
                <SearchBlock />
            </div>
        </div>
    );
};

export default CatalogPage;