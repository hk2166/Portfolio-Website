import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Stats from "./Stats";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
