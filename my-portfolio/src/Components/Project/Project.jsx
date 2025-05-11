import React from 'react'
import './Project.css'
import PortFolio from "../../img/project.png";

const projects = [
  {
    title: "Portfolio Project",
    description: "This is my personal portfolio project where I showcase my skills and work.",
    img: PortFolio,
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "BookHeaven Project",
    description: "Currently, I’m working on the BookHeaven project, a book management platform.",
    img: "https://via.placeholder.com/150",
    github: "https://github.com/yourusername/bookheaven",
  },
  {
    title: "Project 3",
    description: "Description for project 3.",
    img: "https://via.placeholder.com/150",
    github: "https://github.com/yourusername/project3",
  },
  {
    title: "Project 4",
    description: "Description for project 4.",
    img: "https://via.placeholder.com/150",
    github: "https://github.com/yourusername/project4",
  },
];


const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container mt-4">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
       )
}

export default Project
