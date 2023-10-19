import React from "react";
import "@/styles/nav.css";
import Link from "next/link";
import "@/app/globals.css";

const Nav = () => {
  return (
    <nav className="nav-bar invisible md:visible ">
      <ul className="nav-list">
        <li>
          <a href="#about" className="about">
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" className="projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
