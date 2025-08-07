import React from "react";
import Hero from "./LandingPage/Hero";
import OurServices from "./LandingPage/OurServices";
import ProjectIdea from "./LandingPage/ProjectIdea";
import IndustriesWeServe from "./LandingPage/IndustriesWeServe";
import ContactForm from "./LandingPage/ContactForm";
import WhyChooseUs from "./LandingPage/WhyChooseUs";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <ProjectIdea />
      <IndustriesWeServe />
      <WhyChooseUs />
      <ContactForm />
    </>
  );
};

export default LandingPage;
