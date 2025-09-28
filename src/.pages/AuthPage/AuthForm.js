import { InputField } from "../../.components/common/InputField";
import './AuthForm.css'
import { useState } from "react";
import { userService } from "../../.services/api/User";
import RegAuthButton from "../../.components/common/RegAuthButton";
const AuthForm = ({ setIsAuth }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const changeLogin = (event) => {
        setLogin(event.target.value);
    };

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const enterAccount = async () => {
        setError('');
        try {
            const user = await userService.EnterAccount({
                login: login,
                password: password
            })
            setIsAuth(true);
        }
        catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="auth-form-container">
            <InputField
                text="Логин"
                placeholder="Введите свой логин..."
                value={login}
                onChange={changeLogin} />
            <InputField
                text="Пароль"
                placeholder="Введите свой пароль..."
                value={password}
                onChange={changePassword} />
            <RegAuthButton
                text="Войти"
                onClick={enterAccount} />
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
        </div>
    );
};

export default AuthForm;