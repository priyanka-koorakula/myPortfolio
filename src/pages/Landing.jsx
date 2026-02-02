import React from "react";
import { Header } from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import Experience from "./ExperienceSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import Contact from "./Contact.jsx";

export const Landing = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Experience />
      <ProjectsSection/>
      <SkillsSection/>
      <Contact />
    </div>
  );
};
