import React from "react";
import { HashLink } from "react-router-hash-link";
import restaurant from "../../assets/llrfooterimg.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterContent">
        <img className="image" src={restaurant} alt="Restaurant Food" />
        <div className="column">
          <h4>Little Lemon</h4>
          <ul>
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
            <li>
              <HashLink to="/#">Order Online</HashLink>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                777 E Chicago <br />
                LansaStreet Chicago,
                <br />
                Illinois 54678 <br />
                USA
              </address>
            </li>
            <li>
              <a
                href="tel:+999999999999"
                target="_blank"
                rel="external noreferrer"
              >
                +99 99 9999-9999
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@littlelemonrestaurant.com"
                target="_blank"
                rel="external noreferrer"
              >
                contact@littlelemon.com
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>Social Media</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="external noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="external noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="external noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
