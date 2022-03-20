import React from "react";
import { NavIcon, NavLink } from "./Navbar";
import "./navbar.css";

function Navbar({ toggle }) {
  return (
    <div className="nav">
      <NavLink to="/">
        <h1>Pizzeria Da Angelo</h1>
      </NavLink>
      <NavIcon toggle={toggle} />
    </div>
  );
}

export default Navbar;
