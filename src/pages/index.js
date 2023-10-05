import React from "react";
import Link from "next/link";
import Layout from "@/app/layout";
import Hero from "../components/hero";
import ProjectsCards from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
// import "@/app/globals.css";

function HomePage() {
  return (
    <div>
      <Layout />
      <Hero />
      <About />
      <ProjectsCards />
      <Contact />
    </div>
  );
}

export default HomePage;
