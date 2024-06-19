import MessageDropDown from "../messageNav"
import Notifications from "../notifications"
import SearchNav from "../searchNav"



export default function RightNav(){
    return(
            <ul className="navbar-nav ml-auto">
                <SearchNav/>
                <MessageDropDown/>
                <Notifications/>
            </ul>
    )
}