// Nav.js
import React from "react";
import { HashLink } from "react-router-hash-link";
import logoImg from "../../assets/Logo.svg";
import basketImg from "../../assets/basket.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <HashLink to="/">
            <img src={logoImg} alt="Little Lemon Restaurant Logo" />
          </HashLink>
        </li>
        <li>
          <HashLink to="/">Home</HashLink>
        </li>
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#menu">Menu</HashLink>
        </li>
        <li>
          <HashLink to="/bookings">Reservations</HashLink>
        </li>
        <li className="orderBtn">
          <HashLink role="button" to="#">
            Order Online
          </HashLink>
        </li>
        <li>
          <img className="basketIcon" src={basketImg} alt="Basket" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
