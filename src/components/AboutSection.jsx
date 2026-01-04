const AboutSection = () => {
  const languages = ["JavaScript (ES6+)", "HTML5", "CSS3"];
  const frontend = [
    "React",
    "Redux Toolkit",
    "Bootstrap",
    "Tailwind CSS",
  ];
  const backend = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "MongoDB",
    "MySQL",
  ];
  const tools = [
    "Cloudinary",
    "Stripe (Test Mode)",
    "Nodemailer",
    "Git",
    "GitHub",
    "Vercel",
    "Railway",
    "Render",
    "VS Code",
    "Figma",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A quick overview of my background and technical skill set
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="rounded-lg border  text-card-foreground shadow-sm p-8 glass-effect hover-glow transition-smooth">
                <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                <p className="text-muted-foreground leading-relaxed ">
                  I am a MERN stack developer focused on building full-stack web
                  applications with clean UI, scalable backend architecture, and
                  secure APIs.
                  <br />
                  I have worked on multiple projects using MongoDB, Express,
                  React, and Node.js, where I implemented authentication,
                  payment flows, and real-world features.
                  <br /> I enjoy learning new technologies, improving code
                  quality, and turning ideas into working products. My goal is
                  to grow as a professional developer by contributing to
                  impactful, real-world applications.
                </p>
                <ul className="my-4 space-y-2 text-muted-foreground">
                  <li>
                    • Built 2+ full-stack web applications using MERN stack
                  </li>
                  <li>
                    • Experience with RESTful APIs, JWT authentication, and
                    role-based access
                  </li>
                  <li>
                    • Implemented payment flows, file uploads, and email
                    notifications
                  </li>
                </ul>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Location:</span>
                    <span className="text-muted-foreground">
                      Berhampur, Odisha
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Email:</span>
                    <a
                      href="mailto:work.arakhita@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      work.arakhita@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid gap-4">
                <div
                  className="rounded-lg border text-card-foreground shadow-sm p-6 glass-effect hover-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-braces w-5 h-5"
                      >
                        <path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2" />
                        <path d="M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" />
                      </svg>
                    </div>
                    <h4 className="font-semibold">Languages</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {languages.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth hover:scale-105"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-lg border  text-card-foreground shadow-sm p-6 glass-effect hover-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-code w-5 h-5"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <h4 className="font-semibold">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {frontend.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth hover:scale-105"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="rounded-lg border  text-card-foreground shadow-sm p-6 glass-effect hover-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-database w-5 h-5"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold">Backend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {backend.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth hover:scale-105"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="rounded-lg border  text-card-foreground shadow-sm p-6 glass-effect hover-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-wrench w-5 h-5"
                      >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold">Cloud & Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2  focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth hover:scale-105"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
