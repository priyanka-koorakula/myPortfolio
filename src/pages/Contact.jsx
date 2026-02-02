import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative mt-32 px-4 md:px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have an opportunity, project, or role in mind? I’d love to connect
            and discuss how I can contribute.
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="
            relative
            bg-[var(--bg-sec)]
            border border-white/10
            rounded-2xl
            p-10
            transition-all duration-500
            hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.35)]
          "
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold">Get in touch</h3>

              <p className="text-gray-300 leading-relaxed">
                I’m currently open to frontend roles, collaborations, and
                exciting product opportunities. Feel free to reach out via email
                or phone.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-200">
                    priyankakoorakula@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-200">+91 76598 79539</span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-200">Vizag, India</span>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col justify-center items-start gap-6">
              <p className="text-gray-300 leading-relaxed">
                Whether you’re a recruiter, hiring manager, or fellow developer
                — I’m always open to meaningful conversations.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=priyankakoorakula@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
    inline-flex items-center gap-2
    bg-primary text-primary-foreground
    px-6 py-3 rounded-lg
    font-semibold
    transition-all duration-300
    hover:scale-105
  "
              >
                Say Hello
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
