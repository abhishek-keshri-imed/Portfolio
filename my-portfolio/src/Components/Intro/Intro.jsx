import React from "react";
import "./Intro.css";

const Intro = () => {

  const openCV = () => {
    window.open("/cv/ABHISHEK_RESUME.pdf", "_blank", "noopener,noreferrer");
  };


  return (
    <div className="intro" id="intro">
      {/* Left Section */}
      <div className="i-left">
        <h2>Hi! I Am</h2>
        <h1>Abhishek Keshri</h1>
        <p>
          Full Stack Developer with 2+ years of experience in the IT sector,
          currently working at TCS. I have overseen the administration of 5+
          banking applications and am passionate about problem-solving,
          continuous learning, and driving impactful projects.
        </p>
        <button className="button i-button" onClick={openCV}>Download CV</button>
      </div>

      {/* Right Section */}
      <div className="i-right">
        <img
          src="https://static.vecteezy.com/system/resources/previews/044/428/143/non_2x/cartoon-character-with-the-desk-working-concept-illustration-free-png.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Intro;
