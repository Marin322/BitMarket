import { useState } from 'react';
import '../../../.styles/layout/SideBar/SideBar.css'
import SideBarElement from './SideBarElement';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ activeElement, setActiveElement }) => {
    const navigate = useNavigate();

    const handleToProfile = () => {
        navigate('/profile')
    }
    return (
        <div className='SideBar-menu'>
            <SideBarElement
                text="Профиль"
                isActive={activeElement === 1}
                onClick={() => {
                    setActiveElement(1);
                    handleToProfile();
                }} />
            <SideBarElement
                text="Акции"
                isActive={activeElement === 2}
                onClick={() => setActiveElement(2)} />
        </div>
    );
};

export default SideBar;