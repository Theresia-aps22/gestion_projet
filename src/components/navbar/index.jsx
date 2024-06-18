import LeftNav from "../leftNav"
import RightNav from "../rightNav"



export default function Navbar(){
    return(
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <LeftNav/>  
            <RightNav/>
        </nav>
    )
}