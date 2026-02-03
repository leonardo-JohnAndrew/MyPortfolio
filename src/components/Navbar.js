import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  //    declare a state
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  // function to handle click
  const handleClick = () => setClick(!click);

  // function to handle scroll
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>PORTFOLIO</h1>
      </Link>
      {/* menu items */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/certificates">Certificates</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ?
          <FaTimes size={20} style={{ color: "gold" }} />
        : <FaBars size={20} style={{ color: "gold" }} />}
      </div>
    </div>
  );
};

export default Navbar;
