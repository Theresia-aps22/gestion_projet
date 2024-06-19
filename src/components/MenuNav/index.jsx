import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuNav() {
    return (
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" style={{padding: "5px"}}>
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/project" className="nav-link">
                    <i className="fa-solid fa-folder-open"></i>
                    <p>  Project</p>
                </Link>
            </li>
        </ul>
    );
}
