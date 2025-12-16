import { motion } from "framer-motion";

const projects = [
  {
    title: "ArkCart (E‑commerce)",
    image: "./src/assets/ecommers.png",
    tech: ["React", "Redux Toolkit", "Stripe"],
    description:
      "Cart management, checkout, user login, and order summary with toast alerts.",
    link: "#",
  },
  {
    title: "Airbnb Clone (Full-Stack)",
    image: "./src/assets/airbnb.png",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Tailwind CSS",
      "Session Authentication",
      "Multer",
    ],
    description:
      "A full-stack Airbnb-like web application with authentication, role-based access (Guest & Host), home listings, image uploads, favourites, and session-based login. Hosts can add, edit, and delete homes, while guests can browse, view details, and manage favourites.",
    features: [
      "User authentication with encrypted passwords (bcrypt)",
      "Role-based access for Host and Guest users",
      "CRUD operations for home listings",
      "Image upload using Multer",
      "Session management with MongoDB session store",
      "Add / remove homes from favourites",
      "Responsive UI using Tailwind CSS",
    ],
    link: "https://github.com/arakhitasabata635/airbnb-clone",
  },
  {
    title: "Country Flag Explorer",
    image: "./src/assets/country-flag.png",
    tech: ["React", "Context API", "React Router", "REST API", "CSS"],
    description:
      "A responsive React application that displays country details using the REST Countries API. Features include search and region-based filtering, dark/light theme toggle, dynamic routing for country details, border-country navigation, and shimmer loading for better UX.",
    link: "https://github.com/arakhitasabata635/country-flag-using-react",
  },
];

export default function ProjectTimeline() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my MERN stack skills
            </p>
          </div>

          {/* Vertical center line */}

          <div className="space-y-20 relative">
            {/* Vertical center line (desktop only) */}
            <div className=" md:block absolute md:left-1/2 top-0 h-full w-[2px] bg-primary" />

            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col mb-1 md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Project Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x:
                        typeof window !== "undefined" && window.innerWidth < 768
                          ? 90
                          : isLeft
                          ? -90
                          : 90,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full pl-16 md:w-1/2 ${
                      isLeft ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div className="rounded-lg border text-card-foreground shadow-sm p-6 glass-effect hover-glow transition-smooth">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-md mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2  focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth hover:scale-105"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-block mt-2 text-sm font-medium text-primary"
                      >
                        View Project →
                      </a>
                    </div>
                  </motion.div>

                  {/* Connector  */}
                  <div className="block absolute md:left-1/2 top-1/2 ">
                    <div className="relative flex items-center">
                      {/* Horizontal line */}
                      <div
                        className={`h-[3px] bg-primary ${
                          isLeft ? "w-16 md:-translate-x-full" : "w-16"
                        }`}
                      />
                      {/* Dot */}
                      <div className="w-5 h-5 rounded-full bg-primary absolute ml-[-10px]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
