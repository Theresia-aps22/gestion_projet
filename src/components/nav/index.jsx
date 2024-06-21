import React, {useState} from 'react';
import "../../assets/css/nav.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideNav from "../sideNav";
import Navbar from "../navbar";

export default function Nav() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className="navigation">
            {isSidebarVisible && <SideNav />}
            <div className="navbar-fixed">
                <Navbar toggleSidebar={toggleSidebar}/>
            </div>
        </div>
    );
}
