import React from "react";
import { motion } from "framer-motion";

const EventsLanding = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden select-none">
      {/* =========================================================================
          1. BACKGROUND VIDEO LAYER
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Dark overlay specifically tuned for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70 scale-105"
        >
          <source src="/Video/ev2.mp4" type="video/mp4" />
        </video>

        {/* Gradient: Heavy left fade for desktop text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10 hidden md:block" />
        {/* Gradient: Bottom fade for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10 md:hidden" />
      </div>

      {/* =========================================================================
          2. MAIN CONTENT (Responsive Alignment)
          ========================================================================= */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 sm:px-10 md:px-20 lg:px-32">
        
        {/* Container: Centers on mobile, Left-aligns on Desktop */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Top Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4 mb-2 md:mb-4"
          >
            <span className="h-[1px] w-8 md:w-12 bg-[#f0af23] hidden md:block"></span>
            <span className="text-[#f0af23] font-[font2] tracking-[0.3em] text-xs sm:text-sm uppercase font-bold">
              Ignitia 2K25
            </span>
            <span className="h-[1px] w-8 md:w-12 bg-[#f0af23] hidden md:block"></span>
          </motion.div>

          {/* MASSIVE TITLE: "EVENTS" */}
          <div className="relative leading-none">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="text-[20vw] md:text-[15vw] font-black font-[font1] text-white tracking-tighter mix-blend-overlay"
              style={{ 
                textShadow: "0 0 20px rgba(240, 175, 35, 0.3)",
                background: "linear-gradient(to bottom, #ffffff, #d9bf86)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              EVENTS
            </motion.h1>
            
            {/* Outline / Stroke Copy for depth */}
            <motion.h1
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full text-[20vw] md:text-[15vw] font-black font-[font1] text-transparent tracking-tighter"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)" }}
            >
              EVENTS
            </motion.h1>
          </div>

          {/* Sub-line / Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-4 md:mt-2 max-w-lg md:max-w-xl"
          >
            <div className="h-1 w-20 bg-gradient-to-r from-[#f0af23] to-transparent mx-auto md:mx-0 mb-6 rounded-full" />
            
            <p className="text-gray-300 font-[font1] text-sm sm:text-base md:text-lg leading-relaxed font-light tracking-wide">
              Witness the <span className="text-white font-bold">clash of titans</span> across 
              <span className="text-[#f0af23] font-bold"> 70+ categories</span>. 
              From the logic of code to the rhythm of dance, step into the arena where legends are forged.
            </p>
          </motion.div>

          {/* CTA Button (Optional visual cue) */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.6, duration: 1 }}
             className="mt-8 group cursor-pointer"
             onClick={() => document.getElementById('events-grid-start')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex items-center gap-3 text-white/80 group-hover:text-[#f0af23] transition-colors duration-300">
              <span className="font-[font2] text-xs tracking-[0.2em] uppercase">Explore Events</span>
              <span className="text-xl transform group-hover:translate-y-1 transition-transform">↓</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Glow (Bottom Right) */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-[#f0af23] opacity-[0.08] rounded-full blur-[120px] pointer-events-none md:block hidden" />
      <div className="absolute bottom-0 w-full h-[70%] lg:h-[25%] bg-gradient-to-t  from-black via-black/80 to-transparent pointer-events-none" />

    </section>
  );
};

export default React.memo(EventsLanding);