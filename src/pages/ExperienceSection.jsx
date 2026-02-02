import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative mt-28 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience building real-world, production-grade
            applications in fast-paced environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/15 pl-8 space-y-16">
          {/* Timeline Icon */}
          <div className="absolute -left-[14px] top-0">
            <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Experience Card */}
          <div
            className="
              group
              relative
              bg-[var(--bg-sec)]
              border border-white/10
              rounded-2xl
              p-8
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.35)]
            "
          >
            {/* Role */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <span className="text-sm text-muted-foreground">
                2023 – Present
              </span>
            </div>

            {/* Company */}
            <p className="text-primary font-medium mb-6">Xdlinx Space Labs</p>

            {/* Description */}
            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li>
                • Contributed to the development of{" "}
                <strong className="text-white">
                  enterprise-level platforms
                </strong>{" "}
                including <strong className="text-white">MES</strong> and{" "}
                <strong className="text-white">VMS</strong>, focusing on
                performance and usability.
              </li>

              <li>
                • Built{" "}
                <strong className="text-white">
                  reusable and scalable React components
                </strong>{" "}
                using <strong className="text-white">React.js</strong>,{" "}
                <strong className="text-white">JavaScript</strong>, and{" "}
                <strong className="text-white">Vite</strong>.
              </li>

              <li>
                • Worked closely with{" "}
                <strong className="text-white">backend and design teams</strong>{" "}
                to translate requirements into clean, intuitive UI solutions.
              </li>

              <li>
                • Improved UI consistency and maintainability using{" "}
                <strong className="text-white">
                  Material UI and Tailwind CSS
                </strong>
                .
              </li>

              <li>
                • Focused on writing{" "}
                <strong className="text-white">clean, maintainable code</strong>{" "}
                while delivering features in{" "}
                <strong className="text-white">fast-paced sprint cycles</strong>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
