import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";


const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section ref={ref} id="contact" /* className="bg-transparent w-full min-h-screen relative overflow-hidden flex justify-center items-center pt-32 pb-0 md:pb-0 border-t border-gray-900" */>
     
     

     
     
     
      {/* Huge Background Text 
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>  */}

      {/* Form Card Overlay */}
     <div className="relative z-10 w-full flex justify-center items-center">
        <div
  data-aos="fade-up"
  className="
    bg-gradient-to-br
    from-[#ff2a2a]
    via-[#ff3838]
    to-[#d61f1f]
    w-full
    md:w-[90%]
    lg:w-[80%]
    p-8
    md:p-16
    text-white
    flex
    flex-col
    justify-between
    rounded-tl-[60px]
    shadow-[0_0_60px_rgba(255,42,42,0.35)]
    border
    border-white/10
    backdrop-blur-sm
  "
>
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Reach Us
          </div>

         <form className="grid lg:grid-cols-2 gap-16 w-full">

  {/* LEFT SIDE - CONTACT FORM */}
  <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex flex-col gap-10"
>
    
    <h2 className="text-4xl md:text-5xl font-black leading-tight">
  Let's Work
  <span className="block text-white/80">
    Together 🚀
  </span>
</h2>

    <div>
      <input
        type="text"
        placeholder="First Name"
        className="
w-full
bg-white/5
backdrop-blur-sm
border
border-white/20
rounded-xl
px-4
py-4
text-lg
focus:outline-none
focus:border-white
focus:bg-white/10
transition-all
duration-300
placeholder-white/60
"
      />
    </div>

    <div>
      <input
        type="text"
        placeholder="Last Name"
        className="
w-full
bg-white/5
backdrop-blur-sm
border
border-white/20
rounded-xl
px-4
py-4
text-lg
focus:outline-none
focus:border-white
focus:bg-white/10
transition-all
duration-300
placeholder-white/60
"
      />
    </div>

    <div>
      <input
        type="email"
        placeholder="Email Address"
        className="
w-full
bg-white/5
backdrop-blur-sm
border
border-white/20
rounded-xl
px-4
py-4
text-lg
focus:outline-none
focus:border-white
focus:bg-white/10
transition-all
duration-300
placeholder-white/60
"
      />
    </div>

    <div>
      <textarea
        placeholder="Tell me about your project..."
        rows="3"
        className="
w-full
bg-white/5
backdrop-blur-sm
border
border-white/20
rounded-xl
px-4
py-4
text-lg
focus:outline-none
focus:border-white
focus:bg-white/10
transition-all
duration-300
placeholder-white/60
"
      />
    </div>

    <button
      type="submit"
      className="w-fit px-8 py-4 rounded-full bg-white text-[#ff2a2a] font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      Send Message →
    </button>

  </motion.div>

  {/* RIGHT SIDE - CONTACT DETAILS */}
  <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex flex-col justify-start gap-8"
>
    <div>
      <h2 className="text-4xl font-black mb-8">
        Contact Details
      </h2>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-2xl" />
          <a
            href="mailto:anjibabujavvadi@gmail.com"
            className="hover:underline text-lg"
          >
            anjibabujavvadi@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaPhone className="text-2xl" />
          <a
            href="tel:+919701587978"
            className="hover:underline text-lg"
          >
            +91 9701587978
          </a>
        </div>

      </div>
    </div>

    {/* SOCIAL LINKS */}
    <div>
      <h3 className="text-2xl font-bold mb-6">
        Connect With Me
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/altechcareers?igsh=MXdtY2ZremtxeHRxdw=="
          target="_blank"
          rel="noreferrer"
          className="
group
relative
overflow-hidden
bg-white/10
backdrop-blur-md
border
border-white/20
rounded-2xl
p-5
hover:bg-white
hover:text-[#ff2a2a]
transition-all
duration-500
hover:scale-105
hover:-translate-y-2
hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
"
           >
          <FaInstagram className="text-3xl mb-3 group-hover:rotate-12 transition-transform" />
          <h4 className="font-bold">@altechcareers</h4>
          <p className="text-sm opacity-80">
            Instagram Community
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/lokeshjavvadi"
          target="_blank"
          rel="noreferrer"
          className="
group
relative
overflow-hidden
bg-white/10
backdrop-blur-md
border
border-white/20
rounded-2xl
p-5
hover:bg-white
hover:text-[#ff2a2a]
transition-all
duration-500
hover:scale-105
hover:-translate-y-2
hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
"
        >
          <FaGithub className="text-3xl mb-3 group-hover:rotate-12 transition-transform" />
          <h4 className="font-bold">GitHub</h4>
          <p className="text-sm opacity-80">
            View My Projects
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/javvadi-lokesh-satya-anjibabu-352482213"
          target="_blank"
          rel="noreferrer"
          className="
group
relative
overflow-hidden
bg-white/10
backdrop-blur-md
border
border-white/20
rounded-2xl
p-5
hover:bg-white
hover:text-[#ff2a2a]
transition-all
duration-500
hover:scale-105
hover:-translate-y-2
hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
"
        >
          <FaLinkedin className="text-3xl mb-3 group-hover:rotate-12 transition-transform" />
          <h4 className="font-bold">LinkedIn</h4>
          <p className="text-sm opacity-80">
            Professional Network
          </p>
        </a>

        {/* Email */}
        <a
          href="mailto:anjibabujavvadi@gmail.com"
          className="
group
relative
overflow-hidden
bg-white/10
backdrop-blur-md
border
border-white/20
rounded-2xl
p-5
hover:bg-white
hover:text-[#ff2a2a]
transition-all
duration-500
hover:scale-105
hover:-translate-y-2
hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
"
        >
          <FaEnvelope className="text-3xl mb-3 group-hover:rotate-12 transition-transform" />
          <h4 className="font-bold">Email Me</h4>
          <p className="text-sm opacity-80">
            Quick Response
          </p>
        </a>

      </div>
    </div>

  </motion.div>

</form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
