import React from "react";
import "./Skill.css"; // Importing external CSS for styling

// Array of skills with title, description, and image link
const skills = [
  {
    title: "HTML",
    description: "Standard markup language to structure content on the web.",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    title: "CSS",
    description: "Styles web pages with layout, colors, fonts, and animations.",
    img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    title: "Bootstrap",
    description: "Frontend framework for faster, responsive website development.",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
  {
    title: "JavaScript",
    description: "Adds interactivity, logic, and dynamic behavior to web pages.",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    title: "ReactJS",
    description: "JavaScript library for building fast, interactive UIs using components.",
    img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    title: "Node.js",
    description: "JavaScript runtime for building server-side applications.",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    title: "ASP.NET",
    description: "Microsoft framework for building scalable web apps and APIs.",
    img: "https://www.albiorixtech.com/wp-content/uploads/2022/03/asp-net-mvc-development.png",
  },
  {
    title: "SQL",
    description: "Language for managing and querying relational databases.",
    img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    title: "C#",
    description: "Object-oriented programming language for building modern applications.",
    img: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
  },
  {
    title: "Python",
    description: "High-level language famous for simplicity, data science, and AI.",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    title: "Selenium",
    description: "Automation tool for testing web applications across browsers.",
    img: "https://img.icons8.com/?size=512&id=38553&format=png",
  },
  {
    title: "AWS",
    description: "Cloud computing platform offering servers, storage, and services.",
    img: "https://brandlogos.net/wp-content/uploads/2021/11/amazon_web_services-logo.png",
  },
];

// Skill component to render the list of skills
const Skill = () => {
  return (
    <div className="container mt-4 mb-4" >
      {/* Row for responsive grid layout */}
      <div className="row g-4">
        {/* Loop through each skill and create a card */}
        {skills.map((skill, index) => (
          <div className="col-md-3" key={index}>
            <div className="card h-100 p-3 d-flex flex-row align-items-center">
              {/* Skill image */}
              <img
                src={skill.img}
                alt={`${skill.title} Logo`}
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              {/* Skill title and description */}
              <div>
                <h5 className="card-title mb-1">{skill.title}</h5>
                <p className="card-text">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting Skill component to be used in other parts of the app
export default Skill;
