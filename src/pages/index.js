import React from "react";
import Link from "next/link";
import Layout from "@/app/layout";
import Hero from "../components/hero";

function HomePage() {
  return (
    <div>
      <Layout />
      <Hero />
    </div>
  );
}

export default HomePage;
