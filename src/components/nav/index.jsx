import React, { useState } from 'react';
import "../../assets/css/nav.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideNav from "../sideNav";
import Navbar from "../navbar";

export default function Nav() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    // Define la fonction toggleSidebar qui inverse la valeur de isSidebarVisible lorsque le menu est cliqué.
    // Cela permet de basculer l'état du menu entre visible et masqué.
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    }

    // Masque le menu sur les appareils mobiles lorsque la largeur de la fenêtre est inférieure ou égale à 1150 pixels.
    const closeMenuOnPhone = () => {
        if (window.innerWidth <= 1150) {
            setIsSidebarVisible(false);
        }
    }

    return (
        <div className="navigation">
            <div className={isSidebarVisible ? "" : "side-nav"}>
                <SideNav />
            </div>
            <div className="navbar-fixed">
                <Navbar toggleSidebar={toggleSidebar} />
            </div>
        </div>
    );
}
