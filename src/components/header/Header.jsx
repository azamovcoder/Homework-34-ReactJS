import "./header.scss";

import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="header__nav__logo">
          <NavLink className={"header__nav__logo-icon"} to={"/"}>
            Products
          </NavLink>
        </div>
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <NavLink className={"header__nav__item-link"} to={"/home"}>
              Home
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink className={"header__nav__item-link"} to={"/"}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
