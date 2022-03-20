import {NavLink as Link} from "react-router-dom";
import {FaPizzaSlice} from "react-icons/fa"
import "./navbar.css"

export const NavLink = ({...extra}) => <Link className="nav-link" {...extra} ></Link>

export const NavIcon = ({ toggle }) => (
  <div className="nav-icon" onClick={toggle}>
    <p>Menü</p>
    {<FaPizzaSlice className="icon" />}
  </div>
);
