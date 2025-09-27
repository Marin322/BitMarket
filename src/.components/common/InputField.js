import '../../.styles/common/InputField.css'
export const InputField = ({ text ,placeholder, onChange }) => {
    return (
        <div className='input-container'>
            <p>{text}</p>
            <input
                className='input-field'
                placeholder={placeholder}
                onChange={onChange} />
        </div>
    );
};
