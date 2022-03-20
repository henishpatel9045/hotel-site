import React from "react";
import { NavIcon, NavLink } from "./Navbar";
import "./navbar.css";

function Navbar({ toggle }) {
  return (
    <div className="nav">
      <NavLink to="/">
        <h1 id="home">Pizzeria Da Angelo</h1>
        <h2>Hatzenbühl</h2>
      </NavLink>
      <NavIcon toggle={toggle} />
    </div>
  );
}

export default Navbar;
