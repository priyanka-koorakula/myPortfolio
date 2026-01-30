import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiVite,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Material UI", icon: SiMui },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I use to build scalable, modern web applications.
          </p>
        </div>

        {/* Scrolling container */}
        <div
          className="
            relative overflow-hidden
            group
          "
        >
          {/* Gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Track */}
          <div
            className="
              flex gap-10 w-max
              animate-skill-scroll
              group-hover:[animation-play-state:paused]
            "
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="
                    group/skill
                    flex flex-col items-center gap-3
                    p-6 min-w-[140px]
                    rounded-xl
                    border border-white/20
                    bg-white/5 backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-primary/60
                    hover:shadow-[0_15px_40px_-10px_rgba(56,189,248,0.4)]
                  "
                >
                  <Icon
                    className="
                      text-4xl text-gray-300
                      transition-all duration-300
                      group-hover/skill:text-primary
                      group-hover/skill:scale-110
                    "
                  />
                  <span className="text-sm text-gray-300 group-hover/skill:text-white">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
