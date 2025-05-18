import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Abhishek</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <button className="button">Contact </button>
      </div>
    </div>
  );
}

export default Navbar;
