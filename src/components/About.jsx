import React from 'react';
import stackImage from '../assets/about/image.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';
import javaImg from '../assets/about/Java-removebg-preview.png';
import pythonImg from '../assets/about/Python-removebg-preview.png';
import springImg from '../assets/about/sqlpng.png';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] pt-20 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        




{/* Floating Background Effects */}
  <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>

  <div
    className="absolute top-1/2 right-10 w-72 h-72 bg-purple-500/10 blur-[140px] rounded-full animate-pulse"
    style={{ animationDelay: "1s" }}
  ></div>

  <div
    className="absolute bottom-10 left-1/2 w-80 h-80 bg-pink-500/10 blur-[150px] rounded-full animate-pulse"
    style={{ animationDelay: "2s" }}
  ></div>

  {/* Existing Content */}
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"></div>
























        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div
  className="
  bg-gray-900
  w-[220px]
  sm:w-[260px]
  md:w-[300px]
  rounded-2xl
  p-3
  shadow-[0_20px_50px_rgba(0,0,0,0.5)]
  relative
  z-20
  transform
  -rotate-3
  hover:rotate-0
  hover:scale-105
  transition-all
  duration-500
"
>
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2
  data-aos="fade-up"
  className="
  text-4xl
  sm:text-5xl
  lg:text-6xl
  font-black
  text-white
  mb-6
"
>Hello!</h2>
         <p
  data-aos="fade-up"
  data-aos-delay="200"
  className="
  text-base
  md:text-lg
  leading-relaxed
  text-slate-300
  max-w-3xl
"
>
  My name is
  <span className="text-cyan-400 font-bold mx-2">
    Javvadi Lokesh Satya Anjibabu
  </span>

  and I am a Full Stack Developer & Software Engineer currently working at
  Tech Mahindra on Meta Platforms including Facebook, Instagram, WhatsApp,
  Threads and Messenger.

  I specialize in MERN Stack Development, Java, Spring Boot, Python,
  REST APIs and scalable web applications, creating modern digital
  experiences with clean architecture and performance-focused solutions.
</p>

          {/* Horizontal Skills Row (Transparent & Large) */}
          <div
  className="
  grid
  grid-cols-3
  sm:grid-cols-3
  md:grid-cols-6
  gap-6
  md:gap-10
  mt-12
"
>
            <img
  data-aos="zoom-in"
  data-aos-delay="300"
  src={reactImage}
  alt="React"
  className="
    w-16 h-16
    sm:w-20 sm:h-20
    md:w-24 md:h-24
    object-contain
    hover:scale-125
    hover:-translate-y-2
    transition-all
    duration-500
    cursor-pointer
    drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]
  "
/>
            <img
  data-aos="zoom-in"
  data-aos-delay="300"
  src={nodeImage}
  alt="Node.js"
  className="
    w-16 h-16
    sm:w-20 sm:h-20
    md:w-24 md:h-24
    object-contain
    hover:scale-125
    hover:-translate-y-2
    transition-all
    duration-500
    cursor-pointer
    drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]
  "
/>
            <img
  data-aos="zoom-in"
  data-aos-delay="300"
  src={mongoImage}
  alt="MongoDB"
  className="
    w-16 h-16
    sm:w-20 sm:h-20
    md:w-24 md:h-24
    object-contain
    hover:scale-125
    hover:-translate-y-2
    transition-all
    duration-500
    cursor-pointer
    drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]
  "
/>
            <img
  data-aos="zoom-in"
  data-aos-delay="300"
  src={javaImg}
  alt="Java"
  className="
    w-16 h-16
    sm:w-20 sm:h-20
    md:w-24 md:h-24
    object-contain
    hover:scale-125
    hover:-translate-y-2
    transition-all
    duration-500
    cursor-pointer
    drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]
  "
/>
           <img
  data-aos="zoom-in"
  data-aos-delay="300"
  src={pythonImg}
  alt="Python"
  className="
    w-16 h-16
    sm:w-20 sm:h-20
    md:w-24 md:h-24
    object-contain
    hover:scale-125
    hover:-translate-y-2
    transition-all
    duration-500
    cursor-pointer
    drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]
  "
/>
           <img
  data-aos="zoom-in"
  data-aos-delay="300"
  src={springImg}
  alt="Spring Boot"
  className="
    w-16 h-16
    sm:w-20 sm:h-20
    md:w-24 md:h-24
    object-contain
    hover:scale-125
    hover:-translate-y-2
    transition-all
    duration-500
    cursor-pointer
    drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]
  "
/>
          </div>





<div className="flex flex-wrap gap-3 mt-10">
  {[
    "React",
    "Node.js",
    "MongoDB",
    "Java",
    "Python",
    "Spring Boot"
  ].map((skill) => (
    <span
      key={skill}
      className="
      px-4 py-2
      rounded-full
      bg-white/5
      border
      border-white/10
      text-slate-300
      text-sm
      backdrop-blur-md
      hover:border-cyan-400
      hover:text-cyan-400
      hover:-translate-y-1
      transition-all
      duration-300
      cursor-default
      "
    >
      {skill}
    </span>
  ))}
</div>

























        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
