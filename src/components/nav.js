import React from "react";
import "@/src/styles/nav.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link href="/about" className="about" />
          About Me
        </li>
        <li>
          <Link href="/projects" className="projects" />
          Projects
        </li>
        <li>
          <Link href="/contact" className="contact" />
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
