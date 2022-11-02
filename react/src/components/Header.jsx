import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
function Header() {
  const burger = (e) => {
    burgerMenuRef.current.classList.toggle("active");
    let burgerLogoImage = e.target;
    if (burgerMenuRef.current.classList.contains("active")) {
      burgerLogoImage.setAttribute("src", "../images/burger-open-black.png");
    } else {
      burgerLogoImage.setAttribute("src", "../images/burger-close-black.png");
    }
  };
  const burgerMenuRef = useRef();
  const location = useLocation();
  console.log(location);
  const checkActive = (e) => {
    return e.isActive ? "actived" : "";
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="../images/qara-qura-logo-black.png" alt="" />
        </div>
        <div id="header-right">
          <NavLink to="/upload">
            <div className="plus">
              <img src="../images/circle-black.png" alt="" />
              <img src="../images/plus-black.png" alt="" />
            </div>
            <span>Pis nümunəni yüklə</span>
          </NavLink>
          <div id="burger-menu-logo" onClick={(e) => burger(e)}>
            <img src="../images/burger-close-black.png" alt="" />
          </div>
          <div ref={burgerMenuRef} className="ii" id="burger-menu">
            <ul>
              <li>
                <NavLink to="/home" className={(e) => checkActive(e)}>
                  <span>01</span>
                  <span>Ana səhifə</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={(e) => checkActive(e)}>
                  <span>02</span>
                  <span>Haqqımızda</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/galery" className={(e) => checkActive(e)}>
                  <span>03</span>
                  <span>Qalereya</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={(e) => checkActive(e)}>
                  <span>04</span>
                  <span>Əlaqə</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
