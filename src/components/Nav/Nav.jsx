import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
      {/* <a className="nav-menu__item" href="">Home</a> */}
        HOME
      </Link>

      <Link className="nav-menu__item" to={"locations"}> 
      {/* <a className="nav-menu__item" href="">Destination details</a>  */}
        Destination details
      </Link>

      {/* <Link className="nav-menu__item" > */}
      {/* <a className="nav-menu__item" href="">Add Destination</a> */}
        
      {/* </Link> */}
    </div>
  )
}

export default Nav
