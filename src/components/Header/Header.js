import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import MobileNavbar from "../MobileNavbar/MobileNavbar.js";

const Header = (props) => {
  const headerRef = useRef(null);
  const [lastScrollPosition, setLastScrollPosition] = useState(
    window.pageYOffset || document.documentElement.scrollTop
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const header = headerRef.current;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    setLastScrollPosition((prevState) => {
      if (!header) return scrollPosition > 0 ? scrollPosition : 0;

      if (scrollPosition > prevState) {
        header.style.transform = "translateY(-200px)";
      } else {
        header.style.transform = "translateY(0)";
      }
      return scrollPosition > 0 ? scrollPosition : 0;
    });
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Window width changed to:", window.innerWidth);
    setIsMobile(window.innerWidth <= 768);
  }, [window.innerWidth]);

  return <>{isMobile ? <MobileNavbar /> : <Navbar />}</>;
};

export default Header;
