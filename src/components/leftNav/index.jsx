
export default function LeftNav({toggleSidebar}){
    return(
             <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="nav-link" data-widget="pushmenu" href="#" role="button" onclick={toggleSidebar}><i className="fas fa-bars"></i></button>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>
        
    )
}