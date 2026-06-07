import React from "react";
import { motion } from "framer-motion";




import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiFlask,
  SiScikitlearn,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";





const projects = [
  {
    id: "01",
    title: "Smart TaskHub",
    subtitle: "AI-Powered Productivity & Task Management System",
    description:
      "A full-stack MERN application that enables task creation, assignment, tracking, real-time collaboration, JWT authentication, AI-based task prioritization and optimized REST APIs.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",

    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "JWT",
      "Socket.io",
      "Tailwind",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: "02",
    title: "Multi Search Engine",
    subtitle: "Multi-Platform Smart Search System",

    description:
      "Integrated Google, YouTube, Weather, Maps, Spotify, News and Movie APIs into one intelligent search platform. Used Machine Learning & NLP for ranking search results.",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",

    tech: [
      "Python",
      "Flask",
      "Machine Learning",
      "NLP",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: "03",
    title: "Language Detection System",
    subtitle: "NLP Text Classification",

    description:
      "Built and trained a language identification model using TF-IDF and Naive Bayes. Achieved 94% accuracy across multilingual datasets.",

    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200",

    tech: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NLP",
      "Flask",
      "Machine Learning",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: "04",
    title: "Employee Management System",

    subtitle: "REST API Backend Application",

    description:
      "Developed RESTful APIs for employee management including CRUD operations, database integration, validation and scalable backend architecture.",

    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",

    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "CRUD",
      "Postman",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: "05",
    title: "Portfolio Website",

    subtitle: "MERN Stack Personal Portfolio",

    description:
      "Modern responsive portfolio showcasing projects, skills, experience and achievements with Framer Motion animations and Tailwind CSS.",

    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",

    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
      "JavaScript",
      "Node.js",
    ],

    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-black overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="border border-white/20 rounded-full px-5 py-2 text-white text-sm">
            Featured Work
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-8">
            My Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Full Stack Applications, AI Solutions, REST APIs and Machine
            Learning Projects built using modern technologies.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="space-y-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] object-cover rounded-3xl"
                />
              </motion.div>

              {/* Content */}

              <div>
                <span className="text-red-400 font-bold text-lg">
                  {project.id}
                </span>

                <h3 className="text-4xl font-black text-white mt-2">
                  {project.title}
                </h3>

                <h4 className="text-xl text-gray-400 mt-2">
                  {project.subtitle}
                </h4>

                <p className="text-gray-300 mt-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons */}

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 right-10 text-red-500 text-7xl opacity-10"
        >
          <FaReact />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-10 text-green-500 text-7xl opacity-10"
        >
          <SiMongodb />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 right-0 text-yellow-500 text-7xl opacity-10"
        >
          <FaNodeJs />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;