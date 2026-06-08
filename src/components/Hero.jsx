import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import lokiVideo from '../assets/hero video/Loki_intro.mp4';
import lokiImg from '../assets/about/IMG-20251019-WA0063.jpg.jpeg';
import lokiResume from '../assets/about/Javvadi L S Anjibabu_MERN Stack Developer.pdf';
import lokiBack from '../assets/about/Loki in Mntabu.jpeg'

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
    // Video does NOT autoplay anymore
  }, []);

  const toggleVideo = (e) => {
  e.stopPropagation();

  if (videoRef.current) {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }
};

  return (
    <section id='home' className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        poster={lokiBack}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={lokiVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-6 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1
  data-aos="fade-up"
  className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
  style={{
    color: "#FFD700",
    textShadow: "2px 2px 2px rgba(255, 255, 255, 0.8)"
  }}
>
  Hi, My Name is Anjibabu <br />
  <span
    style={{
      color: "#00E5FF",
      textShadow: "2px 2px 2px rgba(255, 255, 255, 0.8)"
    }}
  >
    I’m a Full Stack Developer
  </span>
</h1>

          {/* Subheading */}
          <p style={{
    color: "#a2ff73",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.8)"
  }}
  data-aos="zoom-in"
data-aos-delay="100"
  className="
    mt-6
    text-gray-200
    text-base
    md:text-xl
    leading-relaxed
    max-w-xl
    font-medium
    backdrop-blur-sm
    bg-white/5
    border border-white/10
    rounded-xl
    px-5
    py-4
    shadow-[0_0_20px_rgba(255,255,255,0.08)]
  "
>
  I build scalable full-stack applications, robust REST APIs,
  and modern digital experiences using
  <span className="text-yellow-300 font-bold"> MERN Stack</span>,
  <span className="text-orange-300 font-bold"> Java Spring Boot</span>,
  and
  <span className="text-red-300 font-bold"> Python</span>.
</p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap items-center gap-3 w-full">
  {/* View Work */}
  <button
    onClick={(x) => {
      x.preventDefault();
      document.getElementById('my work').scrollIntoView({
        behavior: 'smooth',
      });
    }}
    className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
  >
    View My Work
  </button>

  {/* Resume Button */}
  
  
  
       <div className="relative group hidden md:block">










  <button className="px-4 py-2 md:px-6 md:py-2 rounded-full bg-[#ff2a2a] text-white font-semibold">
    Resume
  </button>

  <div className="absolute hidden group-hover:flex flex-col top-full min-w-[180px] bg-white rounded-lg shadow-xl overflow-hidden z-50">
   <a
  href={lokiResume}
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-3 hover:bg-gray-100 text-gray-800 font-medium"
>
  👁️ View Resume
</a>

<a
  href={lokiResume}
  download="Anjibabu_Resume.pdf"
  className="px-5 py-3 hover:bg-gray-100 text-gray-800 font-medium border-t"
>
  ⬇️ Download Resume
</a>
  </div>
</div>

{/* Mobile Resume Button */}
<a
  href={lokiResume}
  target="_blank"
  rel="noopener noreferrer"
  className="
  md:hidden
  px-4 py-2
  rounded-full
  bg-[#ff2a2a]
  text-white
  font-semibold
  shadow-lg
  "
>
  Resume
</a>





















  {/* Contact */}
  <button
    onClick={(x) => {
      x.preventDefault();
      document
        .getElementById('contact')
        .scrollIntoView({ behavior: 'smooth' });
    }}
    className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md"
  >
    Contact Me
  </button>
</div>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="fade-up" data-aos-delay="0" 
 className="
mt-6
md:mt-0
flex
flex-row
md:flex-col
items-center
gap-3
cursor-pointer
group
self-start
md:self-auto
"
 onClick={toggleVideo}
        >
          <div className="
w-14
h-14
md:w-20
md:h-20
rounded-full
border
border-white/30
bg-white/10
backdrop-blur-xl
flex
justify-center
items-center
transition-all
duration-500
group-hover:scale-110
group-hover:bg-[#ff2a2a]
group-hover:border-[#ff6b6b]
shadow-[0_0_25px_rgba(255,255,255,0.15)]
group-hover:shadow-[0_0_40px_rgba(255,42,42,0.7)]
">
            {!isPlaying || isMuted ? (
              // Play Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-[#FFD700]
drop-shadow-[0_0_12px_rgba(255,215,0,0.8)] ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-[#FFD700]
drop-shadow-[0_0_12px_rgba(255,215,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="
px-4
py-2
rounded-full
border
text-[#FFD700]
bg-black/30
border-[#FFD700]/30
backdrop-blur-xl

text-[10px]
md:text-xs
font-semibold
tracking-[0.18em]
uppercase
transition-all
duration-500
group-hover:bg-[#ff2a2a]
group-hover:border-[#ff6b6b]
group-hover:shadow-[0_0_25px_rgba(255,42,42,0.5)]
">
           {!isPlaying || isMuted
  ? "▶ Watch My Journey"
  : "❚❚ Pause Video"}
          </span>
        </div>
      </div>





      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
