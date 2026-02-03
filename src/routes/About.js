import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background2 from "../components/Background2";

const About = () => {
  return (
    <div>
      <Navbar />
      <Background2 heading="ABOUT ME" text="Get to know me more" />
      <Footer />
    </div>
  );
};

export default About;
