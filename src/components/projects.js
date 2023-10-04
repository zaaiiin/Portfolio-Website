import React from "react";
import { projects } from "./data";
import "@/app/flexbox.css";

const ProjectsCards = () => {
  return (
    <>
      <div className="projects flex-container bg-primaryOrange text-white m-20">
        {projects.map((value, index) => {
          const { project, caption, skills } = value;

          return (
            <div
              className="project-card col-2 border-[2px] w-[200px]"
              key={index}
            >
              <h2 className="project-name">{project}</h2>
              <div>
                <p className="project-caption">{caption}</p>
              </div>

              <ul className="skills-used">
                {skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsCards;
