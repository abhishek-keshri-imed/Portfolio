// Importing React library
import React from "react";

// Importing external CSS for styling
import "./Intro.css";

// Importing image assets
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import DpBoy from "../../img/dpboy.png";

// Defining the Intro functional component
const Intro = () => {
  return (
    <div className="intro">
      {/* Left Section */}
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Abhishek Keshri</span>
          <span>
            <p>
              Full Stack Developer with 2+ years of experience in the IT sector,
              currently working at TCS. I have overseen the administration of 5+ banking applications and am passionate about problem-solving, continuous learning, and driving impactful projects.
            </p>
          </span>
        </div>

        {/* Call-to-action button */}
        <button className="button i-button">Download CV</button>

        {/* Social Media Icons */}
        <div className="i-icons">
          <a href="https://github.com/abhishek-keshri-imed" target="_blank" rel="noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-keshri-a7a3b3192/" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/abhi_quests/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="i-right">
        <img src={DpBoy} alt="Profile" />
        <div className="blur blue-blur"></div>
      </div>
    </div>
  );
};

export default Intro;
