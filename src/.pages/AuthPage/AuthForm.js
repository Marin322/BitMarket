import { InputField } from "../../.components/common/InputField";
import './AuthForm.css'
const AuthForm = () => {
    return (
        <div className="auth-form-container">
            <InputField
                text="Логин"
                placeholder="Введите свой логин..." />
            <InputField
                text="Пароль"
                placeholder="Введите свой пароль..." />
        </div>
    );
};

export default AuthForm;