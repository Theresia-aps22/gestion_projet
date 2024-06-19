import React from 'react';
import LeftNav from "../leftNav";
import RightNav from "../rightNav";

export default function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand-lg navbar-light bg-light position-fixed" style={{width:'80%'}}>
            <div className="container-fluid">
                <LeftNav />
                <RightNav />
            </div>
        </nav>
    );
}
