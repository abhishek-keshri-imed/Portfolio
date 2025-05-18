import "./Exp.css";

import React from "react";

const Exp = () => {
  return (
    <>
      <h2 className="mainheading text-center mt-5 mb-2">Career Timeline</h2>
      <div className="containerexp mt-5">
        {/* Experience Column */}
        <div className="column">
          <h2>Experience</h2>
          <div className="card">
            <h3>System Engineer, TCS</h3>
            <p>Sep 2024 – Present (Full Stack Developer)</p>
          </div>
          <div className="card">
            <h3>Intern @ Posit Source Technologies</h3>
            <p>Jan 2022 – Jun 2022 (ReactJS Developer)</p>
          </div>
        </div>

        {/* Education Column */}
        <div className="column">
          <h2>Education</h2>
          <div className="card">
            <h3>MCA - IMED Pune (BVDU)</h3>
            <p>2020 – 2022</p>
          </div>
          <div className="card">
            <h3>B.Sc Computer Science</h3>
            <p>2017 – 2020</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exp;
