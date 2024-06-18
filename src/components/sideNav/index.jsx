import React from 'react';
import logo from "../../assets/images/gestion.jpg";
import MenuNav from "../menuNav";

export default function SideNav() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="../../index3.html" className="brand-link">
                <img 
                    src={logo} 
                    alt="AdminLTE Logo" 
                    className="brand-image img-circle elevation-3" 
                    style={{ opacity: 0.8 }} 
                />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            <nav className="mt-2">
                <MenuNav />
            </nav>
        </aside>
    );
}
