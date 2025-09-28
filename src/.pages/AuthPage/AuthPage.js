import { useState } from 'react';
import './AuthPage.css'
import AuthForm from './AuthForm';
import RegisterForm from './RegisterForm';
import { select } from 'framer-motion/client';
import { userService } from '../../.services/api/User';
export const AuthPage = ({ setIsAuth }) => {
    const [selected, setSelected] = useState('auth');

    const ChooseAuthReg = (type) => {
        setSelected(type);
    }
    return (
        <div className='auth-container'>
            <div className="auth-window">
                <div className='auth-window-auth-reg'>
                    <p
                        className={`auth-window-categories ${selected === 'auth' ? 'active-tab' : ''}`}
                        onClick={() => ChooseAuthReg('auth')}>
                        Авторизация
                    </p>
                    <p
                        className={`auth-window-categories ${selected === 'reg' ? 'active-tab' : ''}`}
                        onClick={() => ChooseAuthReg('reg')}>
                        Регистрация
                    </p>
                </div>
                <div>
                    {selected === 'auth' ? (
                        <AuthForm setIsAuth={setIsAuth}/>
                    ) : (
                        <RegisterForm/>
                    )}
                </div>
            </div>
        </div>
    );
};