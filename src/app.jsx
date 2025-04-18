import React from "react";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoShowcase />
      <FeatureCards />
    </>
  );
};

export default App;
