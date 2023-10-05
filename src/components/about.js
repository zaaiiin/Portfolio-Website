import React from "react";
import { aboutMe } from "./data";

const About = () => {
  return (
    <div className="about-me bg-primaryDarkBrown text-white text-center">
      <h1 className="about-me">More about me</h1>
      <p className="about-me_text">{aboutMe}</p>
    </div>
  );
};

export default About;
