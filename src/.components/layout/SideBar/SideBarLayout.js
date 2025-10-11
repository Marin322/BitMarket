import { Children, useState } from "react";
import Header from "../Header/Header";
import SideBar from "./SideBar";
import '../../../.styles/layout/SideBar/SideBarLayout.css'

const SideBarLayout = ({ children }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [activeElement, setActiveElement] = useState(null);

    const OpenSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    return (
        <div>
            <Header onClick={OpenSideBar} />
            <SideBar
                activeElement={activeElement}
                setActiveElement={setActiveElement}
                isOpen={sideBarOpen}
            />
            <main>
                {children}
            </main>
        </div>
    );
};

export default SideBarLayout;