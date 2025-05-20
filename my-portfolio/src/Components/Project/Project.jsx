import React from "react";
import "./Project.css";
import PortFolio from "../../img/project.png";
import BookHeaven from "../../img/bookheaven.png";

const projects = [
  {
    title: "Portfolio",
    description:
      "This is my personal portfolio where I showcase my skills, projects, and experience using modern web technologies. Built with React and styled for responsiveness and accessibility.",
    img: PortFolio,
    github: "https://github.com/abhishek-keshri-imed/Portfolio",
  },
  {
    title: "BookHeaven",
    description:
      "An online bookstore built with React, providing an intuitive user interface and secure user authentication. Features include book categories, detailed pages, cart functionality, and profile management.",
    img: BookHeaven,
    github: "https://github.com/abhishek-keshri-imed/BOOK-STORE",
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects-section mt-5 mb-2">
      <h2 className="projectheading text-center mb-4">projects</h2>
      <div className="projects-container mt-4 ">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.github}
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub Logo"
                  style={{
                    width: "24px",
                    height: "24px",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
