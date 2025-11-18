import React from "react";
import InfiniteCarousel from '../InfiniteCarousel';
import TextType from "../TextType"; 

const AboutCelebs = () => {
  // Define celebrity images for different rows
  const row1Images = [
    { src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=280&h=350&fit=crop&crop=face', alt: 'Shah Rukh Khan', title: 'Shah Rukh Khan', subtitle: 'Bollywood Actor' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=350&fit=crop&crop=face', alt: 'A.R. Rahman', title: 'A.R. Rahman', subtitle: 'Music Composer' },
    { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=280&h=350&fit=crop&crop=face', alt: 'Sundar Pichai', title: 'Sundar Pichai', subtitle: 'CEO of Google' },
    { src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=280&h=350&fit=crop&crop=face', alt: 'Priyanka Chopra', title: 'Priyanka Chopra', subtitle: 'Global Icon' },
    { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=280&h=350&fit=crop&crop=face', alt: 'Vishal Shekhar', title: 'Vishal Shekhar', subtitle: 'Music Duo' },
  ];

  const row2Images = [
    { src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=280&h=350&fit=crop&crop=face', alt: 'Amitabh Bachchan', title: 'Amitabh Bachchan', subtitle: 'Legendary Actor' },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=280&h=350&fit=crop&crop=face', alt: 'Kirron Kher', title: 'Kirron Kher', subtitle: 'Actress & Judge' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=280&h=350&fit=crop&crop=face', alt: 'Raghav Juyal', title: 'Raghav Juyal', subtitle: 'Dancer & Actor' },
    { src: 'https://images.unsplash.com/photo-1514222709107-180e6dbd9d29?w=280&h=350&fit=crop&crop=face', alt: 'Nucleya', title: 'Nucleya', subtitle: 'Music Producer' },
    { src: 'https://images.unsplash.com/photo-1512374382143-06d78e95b7d2?w=280&h=350&fit=crop&crop=face', alt: 'Divine', title: 'Divine', subtitle: 'Rapper' },
  ];

  const row3Images = [
    { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=280&h=350&fit=crop&crop=face', alt: 'Ranveer Singh', title: 'Ranveer Singh', subtitle: 'Bollywood Actor' },
    { src: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=280&h=350&fit=crop&crop=face', alt: 'Kalki Koechlin', title: 'Kalki Koechlin', subtitle: 'Actress' },
    { src: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=280&h=350&fit=crop&crop=face', alt: 'Vijay Deverakonda', title: 'Vijay Deverakonda', subtitle: 'Actor' },
    { src: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=280&h=350&fit=crop&crop=face', alt: 'Badshah', title: 'Badshah', subtitle: 'Rapper' },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=280&h=350&fit=crop&crop=face', alt: 'Shilpa Shetty', title: 'Shilpa Shetty', subtitle: 'Actress' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#f0af23] opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d9bf86] opacity-10 rounded-full blur-3xl -z-10" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[font2] font-extrabold text-white leading-tight">
              Celebrity <span className="text-[#f0af23]">Showcase</span>
            </h2>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f0af23] to-transparent" />
          </div>
          
          <TextType
            text="The stars who have graced our stage and made Ignitia unforgettable."
            typingSpeed={20}
            initialDelay={300}
            showCursor={true}
            hideCursorAfterTyping={true}
            cursorCharacter="|"
            cursorClassName="text-[#f0af23]"
            as="p"
            className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto"
          />
        </div>

        {/* Carousel Rows */}
        <div className="space-y-1 md:space-y-6">
          {/* Row 1 - Moving Left */}
          <div>
            <InfiniteCarousel
              images={row1Images}
              direction="left"
              speed={3}
              gap={20}
            />
          </div>
          
          {/* Row 2 - Moving Right */}
          <div>
            <InfiniteCarousel
              images={row2Images}
              direction="right"
              speed={2}
              gap={20}
            />
          </div>
          
          {/* Row 3 - Moving Left */}
          <div>
            <InfiniteCarousel
              images={row3Images}
              direction="left"
              speed={3}
              gap={20}
            />
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-24 md:mt-32 flex items-center gap-4">
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

export default AboutCelebs;