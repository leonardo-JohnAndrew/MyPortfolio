import "./Footer.css";
import React from "react";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>038 Riles Bunducan Bocaue</p>
              <p>Bulacan Philippines.</p>
            </div>
          </div>

          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>0950 - 369 - 0340</p>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>leonardojohnandrew11@gmail.com</p>
              <p>leonardojohnandrew@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            I currently am a student taking Bachelor of Science in Information
            Technology . I am looking for internship opportunities where I can
            utilize my skills and knowledge in the field of web development. I
            am open for learning new things and collaborating with other people
            to enhance my skills.
          </p>

          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
