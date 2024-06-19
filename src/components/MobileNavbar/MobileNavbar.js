import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./MobileNavbar.css";
import logoImg from "../../assets/Logo.svg";
import menuImg from "../../assets/icon _hamburger_menu.svg";
import basketImg from "../../assets/basket.svg";
import closeImg from "../../assets/close.svg";

const MobileNavbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="MobileNavbar" {...props}>
      <ul>
        <li>
          <button aria-label="Open menu" onClick={handleMenu}>
            <img src={menuImg} alt="Open menu" />
          </button>
        </li>
        <li>
          <img className="basketIcon" src={basketImg} alt="Basket" />
        </li>
      </ul>

      <div className={`menu ${menuOpen ? "opened" : ""}`}>
        <button aria-label="Close menu" onClick={handleMenu}>
          <img src={closeImg} alt="Close menu" />
        </button>
        <ul>
          <li>
            <img src={logoImg} alt="Little Lemon Logo" />
          </li>
          <li>
            <HashLink to="/" onClick={closeMenu}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="#about" onClick={closeMenu}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="#menu" onClick={closeMenu}>
              Menu
            </HashLink>
          </li>
          <li>
            <HashLink to="/bookings" onClick={closeMenu}>
              Reservations
            </HashLink>
          </li>
          <li className="orderBtn">
            <HashLink role="button" to="#" onClick={closeMenu}>
              Order Online
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
