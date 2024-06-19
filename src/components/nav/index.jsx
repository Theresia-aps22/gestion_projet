import React from 'react';
import "../../assets/css/nav.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideNav from "../sideNav";
import Navbar from "../navbar";

export default function Nav() {
    return (
        <div className="navigation">
            <div className="sidenav-fixed">
                <SideNav />
            </div>
            <div className="navbar-fixed">
                <Navbar />
            </div>
        </div>
    );
}
