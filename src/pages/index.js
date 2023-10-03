import React from "react";
import Link from "next/link";
import Layout from "@/app/layout";
import Hero from "../components/hero";
import ProjectsCards from "@/components/projects";
// import "@/app/globals.css";

function HomePage() {
  return (
    <div>
      <Layout />
      <Hero />
      <ProjectsCards />
    </div>
  );
}

export default HomePage;
