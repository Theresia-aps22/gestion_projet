import MessageDropDown from "../messageNav"
import Notifications from "../notifications"
import SearchNav from "../searchNav"
import ExtendsNav from "../expends"
import OptionNav from "../optionNav"



export default function RightNav(){
    return(
            <ul className="navbar-nav ml-auto">
                <SearchNav/>
                <MessageDropDown/>
                <Notifications/>
                <ExtendsNav/>
                <OptionNav/>
            </ul>
    )
}