import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import libraryLogo from '../assets/Library.svg'
import { Link } from "react-router-dom";


const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open"
  }

  function closeMenu() { 
    document.body.classList.remove('menu--open')
  }
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={libraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="Nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
              <span className="cart__length">2</span>
            </Link>
          </li>
        </ul>
        <div className="menu__backdrop" onClick={closeMenu}>
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon="times"/>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link">
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav
