import React from "react";
import { Header } from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import SkillsSection from "./SkillsSection.jsx";

export const Landing = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection/>
      <SkillsSection/>
    </div>
  );
};
