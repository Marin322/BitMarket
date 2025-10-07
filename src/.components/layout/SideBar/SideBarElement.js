import '../../../.styles/layout/SideBar/SideBarElement.css'
import { motion } from 'framer-motion';

const SideBarElement = ({ text, onClick, isActive }) => {
    return (
        <div className='SideBar-element-container' onClick={onClick}>
            <div className='SideBar-element-text-icon'>
                <p>{text}</p>
                <p>+</p>
            </div>
            <div
                className={isActive ? "SideBar-element-neon" : "SideBar-element-noneon"}>
            </div>
        </div>
    );
};

export default SideBarElement;