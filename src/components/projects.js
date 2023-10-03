import React from "react";
import { projects } from "./data";
import "@/app/flexbox.css";

const ProjectsCards = () => {
  return (
    <>
      <div className="projects flex-container bg-primaryOrange text-white">
        {projects.map((value, index) => {
          const { project, description, skills } = value;

          return (
            <div
              className="project-card_container col-2 border-[2px] border-cyan-500 w-[200px]"
              key={index}
            >
              {project}
              <div>
                <p>{description}</p>
              </div>

              <ul>
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
