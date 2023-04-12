import { Link } from "react-router-dom";
import  {AiOutlineShopping} from "react-icons/ai";
import './Navbar.css'

function Navbar() {
    return (
      <nav className=" my-header justify-content-between p-4 navbar navbar-fixed-top " >
          
        <div className="navbar-header">
            <Link className="heading-homepage"to = "/" >
              <h2 className="multicolortext">Candy Cloud</h2>
            </Link>
        </div>
        <div className="form-group has-search rounded search-group">
            <Link className="heading-homepage" to = "/Cart">
            <AiOutlineShopping size={40} className="cart-icon custom"/>
            </Link>
        </div>
              
      </nav>
    );
  }
  export default Navbar;