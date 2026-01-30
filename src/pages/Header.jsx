import { useState } from "react";
import { Menu } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const navLinks = [
  { label: "About", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#clients" },
  {
    label: "Resume",
    href: "/resume.pdf",
    external: true,
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          {/* Name row */}
          <div className="relative flex items-center justify-center">
            <a
              href="#home"
              className="text-xl md:text-2xl font-bold text-foreground tracking-wide"
            >
              Priyanka Koorakula
            </a>

            {/* Social icons (desktop) */}
            <div className="absolute right-0 hidden md:flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/priyanka-koorakula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <SiLinkedin size={22} />
              </a>
              <a
                href="https://github.com/priyanka-koorakula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <SiGithub size={22} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="absolute right-0 md:hidden p-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex justify-center gap-10 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`text-sm font-medium transition-colors ${
                  link.label === "Resume"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu panel */}
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`py-2 transition-colors ${
                    link.label === "Resume"
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
