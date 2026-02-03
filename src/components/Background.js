import "./Background.css";
import React from "react";
import BackgroundImage from "../assets/Background.jpg";
import { Link } from "react-router-dom";
const Background = () => {
  return (
    <div className="background-image">
      <div className="mask">
        <img className="intro-img" src={BackgroundImage} alt="Background" />
      </div>
      <div className="content">
        <p>HI , I'M CURRENTLY 4TH YEAR BS INFORMATION TECHNOLOGY STUDENT</p>
        <h1>JOHN ANDREW R. LEONARDO</h1>
        <p>ATTEMPTING TO BE FULL - STACK WEB DEVELOPER</p>
        {/* Links button */}
        <div className="links">
          <Link to="/projects" className="btn">
            PROJECTS
          </Link>

          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Background;
