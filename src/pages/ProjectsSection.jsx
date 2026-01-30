import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "SpaceLinx ERP Platform",
    subtitle: "Enterprise Space ERP System",
    description:
      "A comprehensive Space ERP platform designed to manage and integrate multiple enterprise operations within a single system. I worked as a frontend developer contributing to core ERP modules with a focus on scalability and usability.",
    highlights: [
      "Worked on the Manufacturing Execution System (MES) module within the ERP",
      "Contributed to modules such as PLM, Manufacturing, Procurement, and Inventory",
      "Built scalable, reusable UI components for enterprise workflows",
      "Collaborated with cross-functional teams to implement complex business logic",
    ],
    tech: ["React.js", "JavaScript", "Material UI", "Tailwind CSS", "Vite"],
  },
  {
    title: "Visitor Management System (VMS)",
    subtitle: "Enterprise Web Application",
    description:
      "A standalone Visitor Management System built to manage visitor registration, tracking, and approvals for enterprise environments.",
    highlights: [
      "Developed intuitive and responsive frontend interfaces",
      "Implemented clean UI workflows for visitor entry and approvals",
      "Worked closely with backend teams to integrate APIs",
      "Focused on performance, security, and maintainable code",
    ],
    tech: ["React.js", "JavaScript", "Material UI", "REST APIs"],
  },
  {
    title: "Swiggy Clone Application",
    subtitle: "Personal Frontend Project",
    description:
      "A frontend clone of the Swiggy food delivery platform built to strengthen my understanding of modern frontend development and real-world UI patterns.",
    highlights: [
      "Implemented restaurant listings, menus, and cart functionality",
      "Focused on responsive design and smooth user experience",
      "Practiced component-based architecture and state management",
      "Improved understanding of API-driven UI development",
    ],
    tech: ["React.js", "JavaScript", "CSS", "API Integration"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A mix of enterprise-level and personal projects showcasing my
            experience in building scalable, real-world frontend applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group relative
                p-8 rounded-2xl
                border border-white/20
                bg-white/5 backdrop-blur-md
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.35)]
              "
            >
              {/* Hover glow */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-primary/10 via-cyan-400/10 to-primary/10
                  opacity-0 blur-xl
                  group-hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
              />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-primary/10 text-primary
                        border border-primary/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Placeholder CTAs (can link later) */}
                <div className="flex items-center gap-4 pt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 hover:text-primary transition">
                    <Code className="w-4 h-4" />
                    <span>Code</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-primary transition">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
