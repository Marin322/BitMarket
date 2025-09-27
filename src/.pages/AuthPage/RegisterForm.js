import { useState } from "react";
import { InputField } from "../../.components/common/InputField";
import { userService } from "../../.services/api/User";

const RegisterForm = () => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const changeLogin = (event) => {
        setLogin(event.target.value);
    }

    const changlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleRegister = async () => {
        try {
            const newUser = await userService.CreateUser({
                login: login,
                password: password
            })
            console.log("user crated");
        }
        catch {
            console.log("Окак")
        }
    }
    return (
        <div>
            <InputField
                text="Логин"
                placeholder="Введите ваш логин..."
                value={login}
                onChange={changeLogin}/>
            <InputField
                text="Пароль"
                placeholder="Введите ваш пароль..."
                value={password}
                onChange={changlePassword}/>
                <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
};

export default RegisterForm;