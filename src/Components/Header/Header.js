import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header>
      <Link exact to="/">
        <div className="brand-logo"></div>
      </Link>
      <ul className="navbar">
        <li className="nav-items">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink exact to="/products">
            Prodcuts
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink exact to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
