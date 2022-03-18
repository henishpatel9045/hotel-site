import {NavLink as Link} from "react-router-dom";
import {FaPizzaSlice} from "react-icons/fa"
import "./navbar.css"

export const NavLink = ({...extra}) => <Link className="nav-link" {...extra} ></Link>

export const NavIcon = ({...extra}) => <div className="nav-icon"><p>Menu</p>{<FaPizzaSlice className="icon" />}</div>
