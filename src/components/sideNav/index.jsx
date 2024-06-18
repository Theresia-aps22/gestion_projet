import logo from "../assets/images/gestion.jpg"



export default function SideNav(){
    return(
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a href="../../index3.html" class="brand-link">
                <img src={logo} alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"/>
                <span class="brand-text font-weight-light">AdminLTE 3</span>
            </a>
        </aside>
    )
}