import { Zap, ArrowRight } from "lucide-react";
import webFrontendDev from "../assets/web_front_end_dev.png";

export function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative flex items-center justify-center text-center
        overflow-hidden gradient-navy-radial
        pt-24 sm:pt-26 md:pt-28 py-16
      "
    >
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-glow/10 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main intro */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Get to know me
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold animate-fade-in-up">
            <span className="text-gradient">Building</span>{" "}
            <span className="text-foreground">interfaces</span>{" "}
            <span className="text-gradient">that users love</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground">
            I’m a passionate <strong>Frontend / React Developer</strong> focused
            on crafting clean, scalable, and user-centric web applications.
          </p>

          {/* About text */}
          <p className="leading-relaxed text-base md:text-lg">
            With over a 2 years of professional experience, I specialize in
            building <strong>responsive</strong> and{" "}
            <strong>high-performance</strong> applications using{" "}
            <strong>React.js</strong>, <strong>JavaScript</strong>,{" "}
            <strong>Material UI</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>Vite</strong>.
            <br />
            <br />
            I’ve worked on enterprise-grade platforms such as{" "}
            <strong>MES</strong> and <strong>VMS</strong>, contributing across
            the full frontend lifecycle — from{" "}
            <strong>planning and UI design</strong> to{" "}
            <strong>implementation and optimization</strong>.
            <br />
            <br />I enjoy solving real-world problems through{" "}
            <strong>clean, maintainable code</strong>, collaborating with
            cross-functional teams, and delivering{" "}
            <strong>reliable solutions</strong> in fast-paced environments. I’m
            always eager to learn and take on{" "}
            <strong>challenging frontend roles</strong> that create meaningful
            impact.
          </p>
        </div>

        {/* What I Do */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>

          <div
            className="
      group
      relative
      flex flex-col md:flex-row items-center gap-8
      p-8
      rounded-2xl
      border border-white/20
      bg-white/5
      backdrop-blur-md
      transition-all duration-500 ease-out
      hover:-translate-y-2
      hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.4)]
      hover:border-primary/60
    "
          >
            {/* Glow effect */}
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

            {/* Image */}
            <div className="relative z-10 overflow-hidden rounded-xl">
              <img
                src={webFrontendDev}
                alt="Web Front-End Development"
                className="
          w-40 h-40 object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-left">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                Web Front-End Development
              </h3>

              <p
                className="
          text-gray-300 leading-relaxed
          transition-colors duration-300
          group-hover:text-gray-100
        "
              >
                I design and build{" "}
                <strong className="text-white">
                  modern, user-friendly interfaces
                </strong>{" "}
                using <strong className="text-white">React.js</strong>,{" "}
                <strong className="text-white">JavaScript</strong>, and tools
                like <strong className="text-white">Material UI</strong> and{" "}
                <strong className="text-white">Tailwind CSS</strong>.
                <br />
                <br />
                My focus is on{" "}
                <strong className="text-white">
                  scalable components
                </strong>,{" "}
                <strong className="text-white">clean architecture</strong>, and
                delivering a smooth, intuitive{" "}
                <strong className="text-white">user experience</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
