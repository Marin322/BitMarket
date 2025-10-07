import { useState } from 'react';
import '../../../.styles/layout/SideBar/SideBar.css'
import SideBarElement from './SideBarElement';

const SideBar = ({ activeElement, setActiveElement }) => {
    return (
        <div className='SideBar-menu'>
            <SideBarElement
                text="Профиль"
                isActive={activeElement === 1}
                onClick={() => setActiveElement(1)} />
            <SideBarElement
                text="Акции"
                isActive={activeElement === 2}
                onClick={() => setActiveElement(2)} />
        </div>
    );
};

export default SideBar;