import React from 'react';
import MessageDropDown from "../messageNav";
import Notifications from "../notifications";
import {Link} from "react-router-dom"

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="main-header navbar navbar-expand-lg navbar-light bg-light position-fixed"  style={{width: '80%'}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                    <Link to="/" className="nav-link">
                          Home
                    </Link>
                </ul>
                <ul className="navbar-nav ml-auto" style={{display: 'flex'}}>
                    <MessageDropDown />
                    <Notifications />
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
