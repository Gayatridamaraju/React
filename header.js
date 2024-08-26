import { img } from "./content";
import Navitems from "./Navitems";

const Header=()=>{
    return(
    <div className="header-div">
        <div className="logo">
            <img className="logo-img" src={img}/>            
        </div>
        <Navitems/>
    </div>
    ) 
}
export default Header;
