import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/gestion.jpg";
import MenuNav from "../menuNav";

export default function SideNav() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 position-fixed">
            <Link to="/" className="brand-link">
                <img 
                    src={logo} 
                    alt="AdminLTE Logo" 
                    className="brand-image img-circle elevation-3" 
                    style={{ opacity: 0.8 }} 
                />
                <span className="brand-text font-weight-light">Gestion Projet</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={logo} className="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
            </div>
            <nav className="mt-2">
                <MenuNav />
            </nav>
        </aside>
    );
}
