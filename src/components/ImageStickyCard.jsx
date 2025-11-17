import React, { useState } from 'react';

// --- Main Component: ImageStickyCard ---
export default function ImageStickyCard({ imageSrc, year, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sticky font-[font2] top-0 w-full min-h-[80vh] sm:h-screen flex items-center justify-center px-1 sm:px-2 lg:px-3 py-0 lg:sticky lg:top-0">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-full max-w-9xl mx-auto rounded-[10vw] lg:rounded-[8vw] overflow-hidden transition-all duration-700 ease-in-out"
      >
        {/* Background Image Element */}
        <img
          src={imageSrc}
          alt={`Year ${year}`}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[.9] transition-all duration-1000"
        />

        {/* Gradient Overlay for better contrast and visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 transition-opacity duration-1000" />

        {/* Content Container */}
        <div className="relative w-full h-full flex flex-col justify-end items-start text-white p-10 sm:p-6 md:p-10 lg:p-16 pb-120 md:pb-10 lg:pb-10">
          
          {/* Year Text at Bottom Left - Moves up on hover */}
          <div 
            className={`text-7xl lg:text-[13vw] font-extrabold text-[#edc672] tracking-tighter transition-all duration-700 ease-in-out drop-shadow-[0_0_15px_rgba(240,175,35,0.5)] ${
              isHovered ? '-translate-y-4 sm:-translate-y-6 md:-translate-y-6' : 'translate-y-0'
            }`}
          >
            {year}
          </div>

          {/* Description Paragraph - Appears on Hover below the year */}
          {/* Description Paragraph - Always visible on mobile, appears on hover on desktop */}
          <div
            className={`mt-2 sm:mt-2 md:mt-0 max-w-xl lg:max-w-2xl xl:max-w-3xl text-left text-xl sm:text-xl md:text-2xl lg:text-2xl text-white/90 leading-relaxed transition-all duration-700 ease-in-out ${
              isHovered
                ? 'opacity-100 translate-y-0'
                : 'lg:opacity-0 md:translate-y-8 md:pointer-events-none opacity-100 translate-y-0'
            }`}
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}