import React from "react";
import Hero from "./Hero";
import KeyboardSkills from "./KeyboardSkills";
import Stats from "./Stats";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <KeyboardSkills />
      <Stats />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
