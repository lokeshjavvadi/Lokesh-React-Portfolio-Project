import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaUsers,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";

const experiences = [
  {
    company: "Tech Mahindra Ltd.",
    role: "Associate Software Engineer",
    duration: "Jan 2025 - Present",
    icon: <FaBriefcase />,
    color: "from-red-500 to-orange-500",

    description:
      "Working with Meta Platforms across Facebook, Instagram, WhatsApp, Threads and Messenger.",

    achievements: [
      "Validated 5000+ localized strings across Meta products",
      "Supported localization quality across 30+ languages built with React.js",
      "Improved testing efficiency by 15% using Java automation",
      "Tracked and resolved 200+ localization issues",
      "Performed testing for 30+ Facebook Marketplace features",
      "Identified 200+ bugs across multiple environments",
      "Reduced release cycle delays by 10%",
      "Supported products used by millions of users",
    ],
  },

  {
    company: "ALTechCareers",
    role: "Freelance Career Mentor & Content Creator",
    duration: "2024 - Present",
    icon: <FaUsers />,
    color: "from-blue-500 to-cyan-500",

    description:
      "Helping students and job seekers improve their careers through guidance, mentorship and educational content.",

    achievements: [
      "Managed WhatsApp and Instagram communities",
      "Shared daily job opportunities and interview updates",
      "Guided candidates in building ATS-friendly resumes",
      "Mentored students on project development",
      "Helped freshers improve portfolios and LinkedIn profiles",
      "Provided MERN Stack and Java Full Stack guidance",
      "Assisted job seekers with interview preparation",
      "Built a growing career-focused community",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="my work"
      className="bg-[#050505] text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="border border-white/20 px-5 py-2 rounded-full text-sm">
            Professional Journey
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8">
            Experience
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            2+ years of professional experience across software engineering,
            localization testing, quality assurance, mentoring and career
            guidance.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-blue-500 to-cyan-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              } mb-20`}
            >
              {/* Icon */}

              <div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white text-xl shadow-lg`}
              >
                {exp.icon}
              </div>

              {/* Card */}

              <div className="ml-20 md:ml-0 md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-red-500 transition duration-500">
                <span className="text-red-400 font-semibold">
                  {exp.duration}
                </span>

                <h3 className="text-3xl font-bold mt-2">
                  {exp.role}
                </h3>

                <h4 className="text-xl text-gray-400 mt-1">
                  {exp.company}
                </h4>

                <p className="text-gray-300 mt-5">
                  {exp.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-gray-300"
                    >
                      <span className="text-green-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/5 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-red-400">2+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-400">5000+</h3>
            <p className="text-gray-400">Localized Strings</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400">30+</h3>
            <p className="text-gray-400">Languages Supported</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">200+</h3>
            <p className="text-gray-400">Issues Resolved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;