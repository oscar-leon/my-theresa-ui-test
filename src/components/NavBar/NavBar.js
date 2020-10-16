import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <Link className="navbar__link" to="/">
        <li className="navbar__item">Home</li>
      </Link>
    </ul>
  </nav>
);

export default NavBar;
