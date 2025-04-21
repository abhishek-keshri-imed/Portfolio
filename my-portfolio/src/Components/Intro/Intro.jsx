// Importing React library
import React from "react";

// Importing external CSS for styling
import "./Intro.css";

// Importing image assets
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Crown from "../../img/crown.png";
import DpBoy from "../../img/dpboy.png";
import Thumb from "../../img/thumbup.png";
import Database from "../../img/database.png";
import GlassEmoji from "../../img/glassesimoji.png";

// Importing custom FloatingDiv component
import FloatingDiv from "../FloatingDiv/FlaotingDiv";

// Defining the Intro functional component
const Intro = () => {
  return (
    // Main container div for Intro section
    <div className="intro">
      {/* Left section: Contains name, about text, button and social media icons */}
      <div className="i-left">
        {/* Name and description block */}
        <div className="i-name">
          {/* Greeting line */}
          <span>Hi! I Am</span>

          {/* Developer's full name */}
          <span>Abhishek Keshri</span>

          {/* Professional description with highlighted key skills */}
          <span>
            <p>
              Full Stack Developer with 2+ years of experience in the IT sector,
              currently working at TCS. I have overseen the administration of 5+
              banking applications and am passionate about problem-solving,
              continuous learning, and driving impactful projects.
            </p>
          </span>
        </div>

        {/* 'Hire Me' call-to-action button */}
        <button className="button i-button">Hire me</button>

        {/* Social media icons */}
        <div className="i-icons">
          {/* GitHub profile link */}
          <a
            href="https://github.com/abhishek-keshri-imed"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github" />
          </a>

          {/* LinkedIn profile link */}
          <a
            href="https://www.linkedin.com/in/abhishek-keshri-a7a3b3192/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>

          {/* Instagram profile link */}
          <a
            href="https://www.instagram.com/abhi_quests/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Right section: Contains images and floating divs */}
      <div className="i-right">
        {/* Background decorative images */}
        <img src={Vector1} alt="Background Vector 1" />
        <img src={Vector2} alt="Background Vector 2" />

        {/* Main profile image */}
        <img src={DpBoy} alt="Profile" />

        {/* Decorative emoji graphic */}
        <img src={GlassEmoji} alt="Glasses Emoji" />

        {/* FloatingDiv components showcasing achievements and skills */}

        {/* FloatingDiv 1: Full Stack Developer Badge */}
        <div style={{ top: "14%", left: "60%" }}>
          <FloatingDiv image={Crown} text1="Full Stack" text2="Developer" />
        </div>

        {/* FloatingDiv 2: SQL Developer Badge */}
        <div style={{ top: "34%", left: "60%" }}>
          <FloatingDiv image={Database} text1="SQL" text2="Developer" />
        </div>

        {/* FloatingDiv 3: Award Badge */}
        <div style={{ top: "50%", left: "-10%" }}>
          <FloatingDiv image={Thumb} text1="Star of the Month" text2="Award" />
        </div>

        <div className="blur blue-blur"></div>
      </div>
    </div>
  );
};

// Exporting the Intro component to be used elsewhere
export default Intro;
