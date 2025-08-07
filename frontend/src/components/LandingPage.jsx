import React from "react";
import Hero from "./LandingPage/Hero";
import OurServices from "./LandingPage/OurServices";
import ProjectIdea from "./LandingPage/ProjectIdea";
import IndustriesWeServe from "./LandingPage/IndustriesWeServe";
import ContactForm from "./LandingPage/ContactForm";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <ProjectIdea />
      <IndustriesWeServe />
      <ContactForm />
    </>
  );
};

export default LandingPage;
