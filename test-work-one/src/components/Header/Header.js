import React from "react";
import logo from '../../images/Logo.svg';


function Header() {

  return (
    <header className="header">
      <div className="header__main-line">

        <img src={logo} className="header__logo" alt="logo" />

        <form action="" className="header__search-form">
          <input type="search" className="header__input-search" placeholder="Let's find it" minLength={2} maxLength={30} />
          <button type="submit" className="header__button-submit"></button>
        </form>

      </div>

      <nav className="header__nav-menu">
        <ul className="header__nav-list">
          <li className="header__list-item">
            <a className="header__link" href="*">
              Demos<i className="fa fa-angle-down fa-down-custom" aria-hidden="true"></i>
            </a>
          </li>
          <li className="header__list-item">
            <a className="header__link" href="*">
              Post<i className="fa fa-angle-down fa-down-custom" aria-hidden="true"></i>
            </a>
            <ul className="header__submenu">
              <li className="header__submenu-item"><a href="*" className="header__submenu-link">Post Header</a><i className="fa fa-angle-right fa-right-custom" aria-hidden="true"></i></li>
              <li className="header__submenu-item"><a href="*" className="header__submenu-link">Post Layout</a><i className="fa fa-angle-right fa-right-custom" aria-hidden="true"></i></li>
              <li className="header__submenu-item"><a href="*" className="header__submenu-link">Share Buttons</a ><i className="fa fa-angle-right fa-right-custom" aria-hidden="true"></i></li>
              <li className="header__submenu-item"><a href="*" className="header__submenu-link">Gallery Post</a><i className="fa fa-angle-right fa-right-custom" aria-hidden="true"></i></li>
              <li className="header__submenu-item"><a href="*" className="header__submenu-link">Video Post</a><i className="fa fa-angle-right fa-right-custom" aria-hidden="true"></i></li>
            </ul>
          </li>
          <li className="header__list-item">
            <a className="header__link" href="*">
              Features<i className="fa fa-angle-down fa-down-custom" aria-hidden="true"></i>
            </a>
          </li>
          <li className="header__list-item">
            <a className="header__link" href="*">
              Categories<i className="fa fa-angle-down fa-down-custom" aria-hidden="true"></i>
            </a>
          </li>
          <li className="header__list-item">
            <a className="header__link" href="*">
              Shop<i className="fa fa-angle-down fa-down-custom" aria-hidden="true"></i>
            </a>
          </li>
          <li className="header__list-item">
            <a className="header__link" href="*">
              Buy Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;


