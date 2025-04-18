import React from "react";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
    </>
  );
};

export default App;
