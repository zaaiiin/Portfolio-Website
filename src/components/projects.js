import React from "react";
import { projects } from "./data";
import "@/app/flexbox.css";
import "@/app/globals.css";
import Image from "next/image";
import { Img } from "public/images/ai-image-gen_preview.png";
import "@/styles/projects.css";

const ProjectsCards = () => {
  return (
    <>
      <div className="projects flex-container text-black mt-[40px] mb-[112px] mx-0 lg:my-auto justify-center align-center  lg:w-[1200px]">
        <h1 className="projects-title mb-[20px]">My Projects</h1>

        {projects.map((value, index) => {
          const { project, caption, skills, cover } = value;

          return (
            <div className="projects-container col-2 justify-center pt-[0px] flex">
              <div
                className="project-card shadow w-[340px] h-[500px]  bg-gray
                 rounded-lg p-5  my-[10px] mb-[20px] mx-auto"
                key={index}
              >
                <div className="flex flex-col h-full justify-between">
                  <h2 className="project-name  text-xl mb-5 justify-center ">
                    {project}
                  </h2>

                  <div className="img   justify-center mx-0 rounded-md border-2">
                    <Image
                      src={cover}
                      alt="image-gen"
                      className="preview-image rounded-md"
                      width={300}
                      height={200}
                    ></Image>
                  </div>

                  <div className="project-caption_container flex-end flex">
                    <p className="project-caption text-black px-4 py-2 mb-0 rounded-md ">
                      {caption}
                    </p>
                  </div>

                  <div className="skills-used_container">
                    <ul className="skills-used flex flex-wrap justify-start cursor-pointer ">
                      {skills.map((skill, skillIndex) => (
                        <li
                          className="each-skill bg-primaryDarkBrown text-white px-5 m-1 rounded"
                          key={skillIndex}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsCards;
