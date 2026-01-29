import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Building real-world, enterprise-grade applications with a focus on
            scalability and user experience.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div
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

            {/* Header */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Software Engineer
                </h3>
                <p className="text-lg text-primary font-medium">
                  XDlinx Space Labs
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>June 2023 – Present</span>
              </div>
            </div>

            {/* Description */}
            <div className="relative z-10 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Working as a{" "}
                <strong className="text-white">Software Engineer</strong> on a
                mission-critical{" "}
                <strong className="text-white">Space ERP platform</strong>,
                contributing to the design and development of scalable frontend
                solutions.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  Developed and maintained{" "}
                  <strong className="text-white">
                    responsive, user-friendly interfaces
                  </strong>{" "}
                  using <strong className="text-white">React.js</strong> and{" "}
                  <strong className="text-white">JavaScript</strong>.
                </li>
                <li>
                  Collaborated with cross-functional teams to translate{" "}
                  <strong className="text-white">
                    complex business requirements
                  </strong>{" "}
                  into intuitive UI workflows.
                </li>
                <li>
                  Contributed to enterprise modules such as{" "}
                  <strong className="text-white">MES</strong> and{" "}
                  <strong className="text-white">VMS</strong>, ensuring
                  performance, reliability, and maintainability.
                </li>
                <li>
                  Focused on writing{" "}
                  <strong className="text-white">
                    clean, modular, and reusable code
                  </strong>{" "}
                  while following best frontend practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
