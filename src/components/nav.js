import React from "react";
import "@/styles/nav.css";
import Link from "next/link";
import "@/app/globals.css";

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
