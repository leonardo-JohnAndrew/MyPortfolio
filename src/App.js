import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Projects from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Certificate from "./routes/Certificate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
