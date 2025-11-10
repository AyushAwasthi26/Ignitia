export default function StyledStickyCard({ imageSrc, altText, subTitle, title, url }) {
  return (
    <div className="sticky top-0 w-full min-h-[80vh] sm:h-screen flex items-center justify-center px-1 sm:px-6 lg:px-8 py-8">
      <div
        onClick={() => window.open(url)}
        // Reduced hover intensity: smaller shadow-2xl, smoother border transition
        className="relative cursor-pointer font-[font2] w-full h-full max-w-9xl mx-auto rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.005] border border-white/10 hover:border-[#f0af23]/40"
      >
        <img
          src={imageSrc}
          alt={altText}
          // Softer image effects: reduced brightness, slightly slower transition
          className="w-full h-full object-cover object-top transition-all duration-1000 ease-in-out hover:scale-[1.03] brightness-[.5] hover:brightness-[.6]"
        />

        {/* Text Overlay for contrast - Softer black fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />

        {/* Text Content - Increased padding, revised typography */}
        <div className="absolute flex flex-col space-y-1 md:space-y-5 justify-end items-start font-[font2] bottom-0 left-0 p-4 md:p-14 lg:p-20 text-white">
          
          {/* Subtitle - Softer color, removed aggressive bottom border */}
          <div className="text-sm sm:text-base md:text-xl text-[#d9bf86] uppercase tracking-widest opacity-80">
            {subTitle}
          </div>
          
          {/* Title - Tone down: reduced font size, softer color (white/gold blend) */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white/95">
            {/* The primary color is still the accent, but we blend it with white for sophistication */}
            <span className="text-[#f0af23] italic font-[font1] text-5xl sm:text-7xl md:text-8xl block mb-2">{title}</span>
          </h2>
          
          {/* Subtle Call to Action - Reduced boldness, slightly transparent background */}
          <div className="mt-4 px-6 py-3 bg-white/10 backdrop-blur-sm border  text-[#f0af23] rounded-full text-sm sm:text-base font-semibold opacity-80 transition-all duration-300 hover:bg-[#f0af23]/20 hover:text-white">
            View Project Details &rarr;
          </div>
        </div>
      </div>
    </div>
  );
}