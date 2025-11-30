import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "/media/home/ab2.webp";
import ThemeImage from "/media/home/theme.webp";
import Masonry from "../Masonry";
import StyledStickyCard from "../StyledStickyCard";
import GuestImage from "/media/home/guest.jpeg"; // <-- New image import

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const items = [
  {
    id: "1",
    img: "/grid/imgi_58_image.webp",
    height: 400,
  },
  {
    id: "2",
    img: "/grid/imgi_60_image.webp",
    height: 550,
  },
  {
    id: "3",
    img: "/grid/imgi_61_image.webp",
    height: 350,
  },
  {
    id: "4",
    img: "/grid/imgi_64_image.webp",
    height: 600,
  },
  {
    id: "5",
    img: "/grid/p16.webp",
    height: 450,
  },
  {
    id: "6",
    img: "/grid/p1.jpg",
    height: 500,
  },
  {
    id: "7",
    img: "/grid/p2.jpg",
    height: 380,
  },
  {
    id: "8",
    img: "/grid/p3.jpg",
    height: 520,
  },
  {
    id: "9",
    img: "/grid/p4.jpg",
    height: 420,
  },
  {
    id: "10",
    img: "/grid/p5.jpg",
    height: 480,
  },
  {
    id: "11",
    img: "/grid/p6.jpg",
    height: 540,
  },
  {
    id: "12",
    img: "/grid/p7.webp",
    height: 390,
  },
  {
    id: "13",
    img: "/grid/p8.webp",
    height: 460,
  },
  {
    id: "14",
    img: "/grid/p9.webp",
    height: 510,
  },
  {
    id: "15",
    img: "/grid/p10.webp",
    height: 430,
  },
  {
    id: "16",
    img: "/grid/p11.webp",
    height: 570,
  },
  {
    id: "17",
    img: "/grid/p12.webp",
    height: 410,
  },
  {
    id: "18",
    img: "/grid/p13.webp",
    height: 490,
  },
  {
    id: "19",
    img: "/grid/p14.webp",
    height: 530,
  },
  {
    id: "20",
    img: "/grid/p15.webp",
    height: 440,
  },
];

function TiltedImageCard({ imageSrc }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -14;
    const rotationY = (offsetX / (rect.width / 2)) * 14;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(1.05);
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
          alt="Ignitia Event"
          className="w-full h-full object-cover rounded-2xl will-change-transform [transform:translateZ(0)] shadow-2xl"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f0af23]/20 to-transparent pointer-events-none" />
      </motion.div>
    </figure>
  );
}

function HomeAbout() {
  return (
    <>
      {/* Section 1: About Ignitia */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Enhanced background decorative elements with better positioning */}
        <div className="absolute top-10 left-5 w-72 h-72 bg-[#f0af23] opacity-10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-5 w-96 h-96 bg-[#d9bf86] opacity-10 rounded-full blur-3xl -z-10" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header with better spacing and typography */}
          <div className="mb-12 md:mb-16">
            <h2 className="lg:flex lg:items-center lg:gap-[1vw] gap-[1vw] text-[#f0af23] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[font2] font-extrabold tracking-tight mb-4">
              {/* About <span className="italic font-[font1]">IGNITIA</span> */}
              About{" "}
              <img
                src="/media/svgs/ignitia.svg"
                alt="Ignitia"
                className="w-[50vw] lg:w-[30vw]"
              />
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#f0af23] to-[#d9bf86]" />
          </div>

          {/* Enhanced Main Content Grid with better gap and alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Enhanced Text Content with better typography and spacing */}
            <div className="space-y-6 md:space-y-8">
              <div className="relative pl-4 sm:pl-6">
                {/* Enhanced vertical line with gradient */}
                <div className="absolute -left-4 sm:-left-6 top-0 w-1 h-full bg-gradient-to-b from-[#f0af23] via-[#d9bf86] to-transparent" />

                <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-[font1] mb-6">
                  <span className="text-[#d9bf86] font-[font2] text-2xl sm:text-3xl md:text-4xl block mb-2">
                    Ignitia 2025
                  </span>
                  PSIT's highly anticipated annual techno-cultural fest, stands
                  as a true reflection of our commitment to fostering holistic
                  student development.
                </p>

                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed font-[font1] mb-6">
                  This two-day extravaganza features an exciting mix of events,
                  performances, and competitions, offering students unique
                  opportunities to showcase their talents, leadership skills,
                  and creativity.
                </p>

                <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-[font1] mb-6">
                  From electrifying performances to innovative competitions,
                  Ignitia brings together the best of technology and culture in
                  a celebration that ignites passion and creativity across
                  campus.
                </p>

                {/* Enhanced managed by box with better styling */}
                <div className="mt-8 p-5 sm:p-6 bg-gradient-to-br from-[#f0af23]/10 to-transparent border border-[#d9bf86]/30 rounded-xl backdrop-blur-sm">
                  <p className="text-[#f0af23] text-xs sm:text-sm font-[font2] uppercase tracking-wider mb-2">
                    Managed by
                  </p>
                  <p className="text-white text-xl sm:text-2xl font-[font2] font-bold">
                    SAHYOG JANKALYAN SAMITI
                  </p>
                </div>
              </div>

              {/* Enhanced Feature Pills with better styling and hover effects */}
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-[#f0af23]/20 border border-[#f0af23]/40 text-[#f0af23] rounded-full text-sm font-[font2] transition-all duration-300 hover:bg-[#f0af23]/30 hover:scale-105">
                  Techno-Cultural Fest
                </span>
                <span className="px-4 py-2 bg-[#d9bf86]/20 border border-[#d9bf86]/40 text-[#d9bf86] rounded-full text-sm font-[font2] transition-all duration-300 hover:bg-[#d9bf86]/30 hover:scale-105">
                  Two-Day Event
                </span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full text-sm font-[font2] transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  Student Showcase
                </span>
              </div>
            </div>

            {/* Right: Enhanced Tilted Image Card with better container styling */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
              <TiltedImageCard imageSrc={Image} />

              {/* Enhanced decorative corner elements with better styling */}
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 border-t-2 border-r-2 border-[#f0af23] rounded-tr-3xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 border-b-2 border-l-2 border-[#d9bf86] rounded-bl-3xl opacity-50" />

              {/* Additional decorative element */}
              <div className="absolute top-1/2 -left-4 w-1 h-16 bg-gradient-to-b from-transparent via-[#f0af23] to-transparent transform -translate-y-1/2 opacity-30" />
            </div>
          </div>

          {/* Enhanced Bottom Decorative Line with better styling */}
          <div className="mt-16 md:mt-20 flex items-center gap-3 md:gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#f0af23] to-transparent" />
            <div className="w-2 h-2 bg-[#f0af23] rounded-full shadow-[0_0_8px_2px_rgba(240,175,35,0.5)]" />
            <div className="w-2 h-2 bg-[#d9bf86] rounded-full shadow-[0_0_8px_2px_rgba(217,191,134,0.5)]" />
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#d9bf86] to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 2: Guest Spotlight */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Enhanced background decorative elements */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#d9bf86] opacity-10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl -z-10" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-[#f0af23] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[font2] font-extrabold tracking-tight mb-4">
              Star{" "}
              <span className="text-white italic font-[font1]">Attraction</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#f0af23] to-[#d9bf86] mx-auto" />
            <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-[font1] mt-6 max-w-2xl leading-relaxed">
              Witness the electrifying performances of renowned artists.
            </p>
          </div>

          {/* Main Guest Card Container */}
          <div className="relative w-full max-w-4xl mx-auto h-[600px] md:h-[800px] lg:h-[900px]">
            {/* Enhanced Tilted Image Card with integrated name display */}
            <div className="relative w-full h-full p-4">
              <div className="relative w-full h-full [perspective:1000px] flex items-center justify-center group">
                <motion.div
                  className="relative [transform-style:preserve-3d] w-full h-full"
                  whileHover={{
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Guest Image */}
                  <img
                    src={GuestImage}
                    alt="Guest Performer"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />

                  {/* Fixed Gradient Overlay - Reduced opacity and simplified */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f0af23]/10 to-transparent pointer-events-none" />

                  {/* Name Overlay - Hidden by default, appears on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Names Container - Bottom Left */}
                    <div className="w-full">
                      {/* First Name - Top */}
                      <div
                        className="text-[#f0af23] font-[font2] font-black leading-none mb-1"
                        style={{
                          fontSize: "clamp(3rem, 7vw, 7rem)",
                        }}
                      >
                        Arjit
                      </div>

                      {/* Surname - Bottom */}
                      <div
                        className="text-[#f0af23] font-[font2] font-black leading-none"
                        style={{
                          fontSize: "clamp(3.5rem, 9vw, 9rem)",
                        }}
                      >
                        Singh
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 border-t-2 border-l-2 border-[#f0af23] rounded-tl-3xl opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 border-b-2 border-r-2 border-[#d9bf86] rounded-br-3xl opacity-50" />

            {/* Additional decorative elements */}
            <div className="absolute top-1/2 -left-4 w-1 h-16 bg-gradient-to-b from-transparent via-[#f0af23] to-transparent transform -translate-y-1/2 opacity-30" />
            <div className="absolute top-1/2 -right-4 w-1 h-16 bg-gradient-to-b from-transparent via-[#d9bf86] to-transparent transform -translate-y-1/2 opacity-30" />
          </div>

          {/* Enhanced Bottom Decorative Line */}
          <div className="mt-16 md:mt-20 flex items-center gap-3 md:gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
            <div className="w-2 h-2 bg-[#f0af23] rounded-full shadow-[0_0_8px_2px_rgba(240,175,35,0.5)]" />
            <div className="w-2 h-2 bg-[#d9bf86] rounded-full shadow-[0_0_8px_2px_rgba(217,191,134,0.5)]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#f0af23] to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 3: Glimpses Gallery Grid */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Enhanced background decorative elements with better positioning */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#d9bf86] opacity-10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#f0af23] opacity-10 rounded-full blur-3xl -z-10" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header with better spacing and typography */}
          <div className="mb-12 md:mb-16">
            <h2 className="xl:flex lg:items-center lg:gap-[1vw] text-[#d9bf86] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[font2] font-extrabold tracking-tight mb-4">
              Glimpses of{" "}
              {/* <span className="text-[#f0af23] italic font-[font1]">
                Excellence
              </span> */}
              <img
                src="/media/svgs/excellence.svg"
                alt="Excellence"
                className="w-[50vw] lg:w-[40vw]"
              />
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#d9bf86] to-[#f0af23]" />
            <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-[font1] mt-6 max-w-2xl leading-relaxed">
              Moments that define our legacy of innovation, creativity, and
              celebration
            </p>
          </div>

          {/* Enhanced Masonry Grid container with better spacing */}
          <div className="relative w-full py-8" style={{ minHeight: "1000px" }}>
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>

          {/* Enhanced Bottom Decorative Line with better styling */}
          <div className="mt-16 md:mt-20 flex items-center gap-3 md:gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d9bf86] to-transparent" />
            <div className="w-2 h-2 bg-[#d9bf86] rounded-full shadow-[0_0_8px_2px_rgba(217,191,134,0.5)]" />
            <div className="w-2 h-2 bg-[#f0af23] rounded-full shadow-[0_0_8px_2px_rgba(240,175,35,0.5)]" />
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#f0af23] to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 4: Theme */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Enhanced background decorative elements with better positioning */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#f0af23] opacity-10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -z-10" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header with better spacing and typography */}
          <div className="mb-12 md:mb-16 text-right">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[font2] font-extrabold tracking-tight mb-4">
              Our{" "}
              {/* <span className="text-[#f0af23] italic font-[font1]">Theme</span> */}
              <img
                src="/media/svgs/Theme.svg"
                alt="Theme"
                className="inline-block w-[50vw] lg:w-[20vw] text-[#f0af23] italic font-[font1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[font2] font-extrabold tracking-tight mb-4"
              />
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-l from-[#f0af23] to-[#d9bf86] ml-auto" />
          </div>

          {/* Enhanced Main Content Grid with better gap and alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Enhanced Tilted Image Card with better container styling */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] order-1 lg:order-1">
              <TiltedImageCard imageSrc={ThemeImage} />

              {/* Enhanced decorative corner elements with better styling */}
              <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 border-t-2 border-l-2 border-[#f0af23] rounded-tl-3xl opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 border-b-2 border-r-2 border-[#d9bf86] rounded-br-3xl opacity-50" />

              {/* Additional decorative element */}
              <div className="absolute top-1/2 -right-4 w-1 h-16 bg-gradient-to-b from-transparent via-[#d9bf86] to-transparent transform -translate-y-1/2 opacity-30" />
            </div>

            {/* Right: Enhanced Theme Content with better typography and spacing */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-2">
              <div className="relative pr-4 sm:pr-6">
                {/* Enhanced vertical line with gradient */}
                <div className="absolute -right-4 sm:-right-6 top-0 w-1 h-full bg-gradient-to-b from-[#f0af23] via-[#d9bf86] to-transparent" />

                {/* Enhanced Theme Title/Logo with better alignment and spacing */}
                <div className="flex flex-col items-start mb-6">
                  <img
                    src="/media/theme.webp"
                    alt="Abhivirddhi"
                    className="h-16 md:h-34 w-auto"
                  />
                  <p className="text-white text-2xl sm:text-3xl md:text-xl font-[font2] leading-tight">
                    <span className="text-[#d9bf86] block sm:inline">
                      cultivating growth,
                    </span>{" "}
                    empowering progress...
                  </p>
                </div>

                <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-[font1] mb-6">
                  <span className="text-[#d9bf86] font-[font2] text-2xl sm:text-3xl md:text-4xl block mb-2">
                    Ignitia
                  </span>{" "}
                  is more than a fest; it's a catalyst for{" "}
                  <span className="font-semibold text-white">
                    transformation
                  </span>
                  —personal, professional, and societal. It's a platform where
                  students showcase their skills, learn from industry experts,
                  and connect with a vibrant community of peers.
                </p>

                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed font-[font1] mb-6">
                  This year's theme,{" "}
                  <span className="font-semibold text-[#d9bf86]">
                    'Abhivirddhi,'
                  </span>{" "}
                  underscores the importance of{" "}
                  <span className="font-semibold text-white">
                    lifelong learning
                  </span>
                  , embracing{" "}
                  <span className="font-semibold text-white">innovation</span>,
                  and striving for{" "}
                  <span className="font-semibold text-white">excellence</span>.
                  The theme is a call to action for students to invest in their
                  growth, reflecting the energy of the torch, a symbol of
                  enlightenment and progress.
                </p>

                <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-[font1] mb-8">
                  We invite you to be a part of this powerful experience and
                  contribute to the collective journey of{" "}
                  <span className="font-semibold text-[#f0af23]">growth</span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#f0af23]">
                    empowerment
                  </span>
                  .
                </p>

                {/* Enhanced button with better styling and hover effects */}
                <button className="mt-4 px-6 sm:px-8 py-3 bg-gradient-to-r from-[#f0af23] to-[#d9bf86] text-black font-[font2] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f0af23] focus:ring-opacity-50">
                  Discover Events
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Decorative Line with better styling */}
          <div className="mt-16 md:mt-20 flex items-center gap-3 md:gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#f0af23] to-transparent" />
            <div className="w-2 h-2 bg-[#f0af23] rounded-full shadow-[0_0_8px_2px_rgba(240,175,35,0.5)]" />
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
            <div className="w-2 h-2 bg-[#d9bf86] rounded-full shadow-[0_0_8px_2px_rgba(217,191,134,0.5)]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white to-transparent" />
          </div>
        </div>
      </section>

      {/* 3 overlap slides */}
      {/* 💥 Section 5: Overlap Slides - IMPROVED STYLE 💥 */}
      <section>
        {/* 🧩 Container height = 100vh × number of sticky cards
      This ensures each card has full scroll space to stick properly 
      and the last one doesn't overflow or escape the section */}
        <div
          className="relative w-full bg-black"
          style={{ height: `${3 * 100}vh` }} // 3 cards × 100vh each
        >
          {/* Card 1: Opto-Réseau */}
          <StyledStickyCard
            videoSrc="/Video/bg-idea-footfall.mp4" // You must provide a path to your video file
            targetNumber={10000} // The number to count up to
            statisticText="Annual Average Footfall" // The text below the number
            url="https://example.com/data-report" // Optional: URL to link the card to
          />
          <StyledStickyCard
            videoSrc="/Video/dance-bg.mp4" // You must provide a path to your video file
            targetNumber={100} // The number to count up to
            statisticText="Performances" // The text below the number
            url="https://example.com/data-report" // Optional: URL to link the card to
          />
          <StyledStickyCard
            videoSrc="/Video/bg-idea-disco.mp4" // You must provide a path to your video file
            targetNumber={50} // The number to count up to
            statisticText="Exciting Events" // The text below the number
            url="https://example.com/data-report" // Optional: URL to link the card to
          />
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
