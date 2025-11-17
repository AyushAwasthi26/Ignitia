import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import TextType from "../TextType"; 

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const TiltedImageCard = ({ imageSrc }) => {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -5; // Reduced from -14 to -5
    const rotationY = (offsetX / (rect.width / 2)) * 5; // Reduced from 14 to 5

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(1.02); // Reduced from 1.05 to 1.02
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:1000px] flex items-center justify-center"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: "100%",
          height: "100%",
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt="Ignitia"
          className="w-full h-full object-cover rounded-2xl will-change-transform [transform:translateZ(0)] shadow-2xl"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f0af23]/10 to-transparent pointer-events-none" />
      </motion.div>
    </figure>
  );
};

const Image = "/media/home/guest.jpg";
const ThemeImage = "/media/home/p1.jpg";

const AboutText = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#f0af23] opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d9bf86] opacity-10 rounded-full blur-3xl -z-10" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* === ROW 1: IMAGE LEFT / TEXT RIGHT === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 md:mb-40">
          
          {/* Left: Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-1">
            <TiltedImageCard imageSrc={Image} />
          </div>

          {/* Right: Text */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="relative pl-6">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#f0af23] via-[#d9bf86] to-transparent" />

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[font2] font-extrabold text-white mb-8 leading-tight">
                Where Innovation <span className="text-[#f0af23]">Ignites</span>
              </h2>

              <TextType
                text="Ignitia is PSIT's flagship annual festival—a vibrant celebration where technology meets culture, and students from across the nation come together to compete, collaborate, and create extraordinary experiences."
                typingSpeed={10}
                initialDelay={300}
                showCursor={true}
                hideCursorAfterTyping={true}
                cursorCharacter="|"
                cursorClassName="text-[#f0af23]"
                as="p"
                className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-[font1] mb-6"
              />
              <TextType
                text="This two-day extravaganza features over 50 diverse events spanning hackathons, robotics competitions, cultural performances, and electrifying concerts. It's where future leaders showcase their talents and push the boundaries of what's possible."
                typingSpeed={10}
                initialDelay={300}
                showCursor={true}
                hideCursorAfterTyping={true}
                cursorCharacter="|"
                cursorClassName="text-[#f0af23]"
                as="p"
                className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-[font1] mb-6"
              />
              <TextType
                text="From innovative tech challenges to mesmerizing cultural showcases, Ignitia brings together brilliant minds and passionate hearts in a celebration that defines excellence and inspires greatness."
                typingSpeed={10}
                initialDelay={300}
                showCursor={true}
                hideCursorAfterTyping={true}
                cursorCharacter="|"
                cursorClassName="text-[#f0af23]"
                as="p"
                className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-[font1] mb-6"
              />
            </div>
          </div>
        </div>

        {/* === ROW 2: TEXT LEFT / IMAGE RIGHT === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="relative pr-6">
              <div className="absolute -right-6 top-0 w-1 h-full bg-gradient-to-b from-[#d9bf86] via-[#f0af23] to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/media/theme_abhivirddhi_logo.png"
                  alt="Abhivirddhi"
                  className="h-12 md:h-16 w-auto"
                />
                <span className="text-[#d9bf86] font-[font2] text-xl sm:text-2xl font-bold">
                  Theme 2025: Abhivirddhi
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[font2] font-extrabold mb-8 leading-tight">
                <span className="text-white">Cultivating </span>
                <span className="text-[#d9bf86]">Growth</span>
              </h3>

              <TextType
                text="Abhivirddhi embodies the spirit of continuous evolution and progress. It's a call to embrace lifelong learning, champion innovation, and unlock your unlimited potential as tomorrow's changemaker."
                typingSpeed={10}
                initialDelay={500}
                showCursor={true}
                hideCursorAfterTyping={true}
                cursorCharacter="|"
                cursorClassName="text-[#d9bf86]"
                as="p"
                className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-[font1] mb-6"
              />
              <TextType
                text="This theme celebrates transformation—personal, professional, and societal. It's about breaking boundaries, exploring new frontiers, and building a future where innovation and creativity drive meaningful change."
                typingSpeed={10}
                initialDelay={500}
                showCursor={true}
                hideCursorAfterTyping={true}
                cursorCharacter="|"
                cursorClassName="text-[#d9bf86]"
                as="p"
                className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-[font1] mb-6"
              />
              <TextType
                text=" Join us on this journey of growth and empowerment. Connect with industry leaders, collaborate with fellow visionaries, and be part of an experience that shapes the future."
                typingSpeed={10}
                initialDelay={500}
                showCursor={true}
                hideCursorAfterTyping={true}
                cursorCharacter="|"
                cursorClassName="text-[#d9bf86]"
                as="p"
                className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-[font1] mb-6"
              />

              

              <div className="pt-4">
                <span className="text-white/50 text-sm font-[font1]">Managed by </span>
                <span className="text-[#f0af23] text-sm font-[font2] font-semibold">Sahyog Jankalyan Samiti</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <TiltedImageCard imageSrc={ThemeImage} />
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-32 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#f0af23] to-transparent" />
          <div className="w-2 h-2 bg-[#f0af23] rounded-full shadow-[0_0_8px_2px_rgba(240,175,35,0.5)]" />
          <div className="w-2 h-2 bg-[#d9bf86] rounded-full shadow-[0_0_8px_2px_rgba(217,191,134,0.5)]" />
          <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#d9bf86] to-transparent" />
        </div>
      </div>
    </section>
    
  );
};

export default AboutText;