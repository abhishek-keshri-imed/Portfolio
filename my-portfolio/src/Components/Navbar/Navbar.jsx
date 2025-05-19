import React from "react";
import "./Navbar.css";

function Navbar() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Abhishek</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li><a href="#intro">Home</a></li>
            <li><a href="#containerskill">Skills</a></li>
            <li><a href="#mainheading">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
       <button className="button" onClick={() => scrollToSection("contact-section")}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
