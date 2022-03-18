import React from "react";
import { NavIcon, NavLink } from "./Navbar";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <NavLink to="/">Pizza</NavLink>
      <NavIcon />
    </div>
  );
}

export default Navbar;
