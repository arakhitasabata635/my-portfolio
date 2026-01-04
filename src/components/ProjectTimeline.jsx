import { motion } from "framer-motion";
import { useState } from "react";
import ProjectVideoModal from "./ProjectVideoModal";
import airbnb from "../assets/airbnb.png";
import ecommers from "../assets/ecommers.png";
import country from "../assets/country-flag.png";

const projects = [
  {
    title: "ArkCart – Multi-Vendor E-Commerce Platform",
    image: ecommers,
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Stripe Webhooks",
      "Cloudinary",
    ],
    description:
      "A production-grade multi-vendor e-commerce platform supporting Users, Sellers/Admins, and a single Super Owner. Implemented JWT-based authentication, role-based authorization, owner-only seller approval workflow, secure Stripe checkout with webhook-driven order confirmation, and real-time cart management. Designed RESTful APIs and scalable backend architecture to handle multi-role access and order lifecycle management.",
    liveLink: "https://arak-cart.vercel.app/",
    videoLink: "",
    gitLink: "https://github.com/arakhitasabata635/ArakCart",
  },
  {
    title: "Airbnb Clone – Full Stack Booking Platform",
    image: airbnb,
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
      "A full-stack Airbnb-style web application built using MVC architecture. Features secure session-based authentication, role-based access for Hosts and Guests, property listing management with image uploads, and MongoDB-backed session storage.",
    liveLink: "",
    videoLink: "https://res.cloudinary.com/dah6qrspo/video/upload/v1767530057/airbnb_qneagj.mp4",
    gitLink: "https://github.com/arakhitasabata635/airbnb-backend-for-learning",
  },
  {
    title: "Country Flag Explorer – React Application",
    image: country,
    tech: ["React", "Context API", "React Router", "REST API", "CSS"],
    description:
      "A responsive React application consuming REST Countries API, featuring dynamic routing, region-based filtering, theme toggling, and shimmer loading states for improved user experience.",
    liveLink: "",
    videoLink: "https://res.cloudinary.com/dah6qrspo/video/upload/v1767530740/countryFlag_vepdry.mp4",
    gitLink: "https://github.com/arakhitasabata635/country-flag-using-react",
  },
];

export default function ProjectTimeline() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world projects demonstrating my skills in full-stack
              development, authentication, payments, and scalable backend
              systems.
            </p>
          </div>

          <div className="space-y-20 relative">
            {/* Vertical center line */}
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
                          ? 90
                          : -90,
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
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          className="text-primary font-medium"
                        >
                          View Live →
                        </a>
                      ) : (
                        <button
                          onClick={() => setActiveVideo(project.videoLink)}
                          className="text-primary font-medium"
                        >
                          Watch Demo →
                        </button>
                      )}

                      <a
                        href={project.gitLink}
                        target="_blank"
                        className=" block mt-3 text-sm font-medium text-primary"
                      >
                        View Code →
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
                  {activeVideo && (
                    <ProjectVideoModal
                      videoLink={project.videoLink}
                      onClose={() => setActiveVideo(null)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
