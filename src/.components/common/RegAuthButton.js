import '../../.styles/common/RegAuthButton.css'
const RegAuthButton = ({ text, onClick }) => {
    return (
        <div className="RegAuth-container">
            <button className="RegAuth-button" onClick={onClick}>{text}</button>
        </div>
    );
};

export default RegAuthButton;