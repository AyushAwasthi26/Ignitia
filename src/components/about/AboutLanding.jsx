import React from "react";


function AboutLanding() {
  // Color palette inferred from HomeAbout component:
  // Primary: #f0af23 (Orange/Gold)
  // Secondary: #d9bf86 (Light Gold/Cream)
  const primaryColor = "#f0af23";

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Full-screen background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Video/about-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text visibility */}
        {/* Reduced opacity for a slightly brighter background, matching the inspiration's general feel */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Large, Center-Stacked Text (Ignitia 2025) */}
        <div className="font-[font1] text-center text-white select-none">
          {/* IGNITIA */}
          <div
            className="text-[25vw] sm:text-[18vw] justify-center flex items-center uppercase leading-[30vw] sm:leading-[16vw] 
             bg-gradient-to-t from-[#f5d795] via-[#e4ae39] to-[#e77149] 
             text-transparent bg-clip-text"
          >
            Ignitia
          </div>

          {/* 2025 (with video component) */}
          <div className="text-[18vw] text-[#f5cc76] sm:text-[15vw] justify-center flex items-center align-center uppercase leading-[10vw] sm:leading-[12vw] gap-[1.5vw] mt-[1vw]">
            2{/* The circular/oval video component for '0' in '2025' */}
            <div className="h-[12vw] w-[40vw] sm:h-[10vw] sm:w-[18vw] md:h-[10vw] md:w-[20vw] lg:h-[10vw] lg:w-[25vw] rounded-full overflow-hidden -mt-[2vw] transform">
              <div className="w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/Video/about-bg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            25
          </div>

          {/* Subtext: Turn up the heat! (Very small and subtle) */}
          {/* Adjusted to be very small, almost blending in, with primary color */}
          <div
            className="hidden text-[#f1ddb1] sm:block mt-2 text-sm  md:text-md font-[font2] uppercase tracking-widest space-x-[4vw]"
          >
            <span>DANCE</span>
            <span>INNOVATE</span>
            <span>CELEBRATE</span>
            <span>THE</span>
            <span>SPARK</span>
            <span>OF</span>
            <span>IGNITIA</span>
          </div>
        </div>
      </div>

      {/* Small Descriptive Text (Like K72's right side text) */}
      <div className="absolute bottom-[70vh] xl:bottom-[17vh] right-4 sm:right-6 lg:right-8 z-20 pointer-events-none">
        <p className="text-[#f7da9c] text-md md:text-sm leading-snug w-[250px] sm:w-[200px] lg:w-[250px] font-[font1] opacity-90">
          Ignitia 2025 is PSIT's highly anticipated annual techno-cultural fest.
          It's a two-day extravaganza that reflects our commitment to holistic
          student development, offering unique opportunities to showcase
          talents, leadership skills, and **creative** expression. It's where
          the **spark** of innovation meets the fire of culture.
        </p>
      </div>

      {/* Decorative elements (Kept the original placement and colors) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#f0af23] opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d9bf86] opacity-10 rounded-full blur-3xl -z-10" />

      {/* Scroll indicator (Kept the original placement) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-[#f6e2b6]/80 text-sm font-[font1] uppercase tracking-widest">
          Scroll
        </div>
        <div className="w-6 h-10 border-2 border-[#f6e2b6]/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#f6e2b6]/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default AboutLanding;
