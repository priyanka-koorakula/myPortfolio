import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNpm } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiVite,
  SiAxios,
  SiReactrouter,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import LogoLoop from "./LogoLoop";
import StarBorder from "./StarBoarder";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: TbBrandJavascript, color: "text-[#F7DF1E]" },
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "React Router", icon: SiReactrouter, color: "text-[#CA4245]" },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
  ];

  const tools = [
    { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
    { name: "GitHub", icon: BsGithub, color: "text-black dark:text-white" },
    { name: "NPM", icon: FaNpm, color: "text-[#CB3837]" },
  ];

  const techLogos = [...skills, ...tools].map((item) => ({
    node: <item.icon className={`${item.color} w-12 h-12`} />,
    title: item.name,
  }));

  const renderSkill = ({ name, icon: Icon, color }) => (
    <div
      key={name}
      className="
        group
        flex flex-col items-center gap-4
        transition-transform duration-300
        hover:-translate-y-2
      "
    >
      <div
        className="
          w-20 h-20 flex items-center justify-center
          border-2 border-[var(--border-main)]
          rounded-xl
          bg-[var(--bg-sec)]
          shadow-[0_6px_18px_rgba(248,223,145,0.35)]
          transition-all duration-300
          group-hover:shadow-[0_12px_30px_rgba(56,189,248,0.5)]
        "
      >
        <Icon className={`${color} w-12 h-12`} />
      </div>

      <h3 className="text-sm font-semibold text-center">{name}</h3>
    </div>
  );

  return (
    <section
      id="skills"
      className="
        relative
        mt-24
        bg-[var(--bg-sec)]
        border-2 border-[var(--border-main)]
        rounded-2xl
        p-10
        space-y-14
      "
    >
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Skills & Tools</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable, and
          user-friendly web applications.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Core Skills</h3>
        <div className="flex flex-wrap gap-8">{skills.map(renderSkill)}</div>
      </div>

      {/* Tools */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Tools & Software</h3>
        <div className="flex flex-wrap gap-8">{tools.map(renderSkill)}</div>
      </div>

      {/* Logo Loop Highlight */}
      <div className="pt-8">
        <StarBorder className="w-full" color="cyan" speed="3s">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--bg-sec)"
            ariaLabel="Technology logos"
          />
        </StarBorder>
      </div>
    </section>
  );
};

export default Skills;
