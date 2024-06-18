import "../../assets/css/nav.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importation de FontAwesome

export default function Nav() {
    return (
        <nav className="sidebar">
            <span>Gestion Projet</span>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-home"></i> Link name
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-info-circle"></i> About page
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-list"></i> Category name
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-file-alt"></i> Another page
                    </a>
                </li>
            </ul>
        </nav>
    );
}
