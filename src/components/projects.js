import React from "react";
import { projects } from "./data";
import "@/app/flexbox.css";
import "@/app/globals.css";
import Image from "next/image";
import "@/styles/projects.css";

const ProjectsCards = () => {
  return (
    <>
      <div className="projects flex-container  text-black mx-0 justify-center">
        {projects.map((value, index) => {
          const { project, caption, skills, cover } = value;

          return (
            <div className="projects-container justify-center">
              <h2 className="project-name col-2 text-xl">{project}</h2>

              <div
                className="project-card shadow w-[300px] border-[2px] bg-primaryOrange"
                key={index}
              >
                <div className="img h-40">
                  <Image src={cover} alt="project-screenshot" />
                </div>

                <div>
                  <p className="project-caption">{caption}</p>
                </div>

                <ul className="skills-used flex flex-row flex-wrap cursor-pointer">
                  {skills.map((skill, skillIndex) => (
                    <li
                      className="each-skill bg-white px-2 m-2 "
                      key={skillIndex}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsCards;
