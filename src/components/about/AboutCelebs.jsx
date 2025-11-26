import React from "react";
import InfiniteCarousel from '../InfiniteCarousel';
import TextType from "../TextType"; 

const AboutCelebs = () => {
  // Define celebrity images for different rows
  const row1Images = [
    { src: '/media/cele/c22.jpg', alt: 'Sukhwinder Singh', title: 'Sukhwinder Singh', subtitle: 'Singer' },
    { src: '/media/cele/c23.jpg', alt: 'Sushant Singh Rajput', title: 'Sushant Singh Rajput', subtitle: 'Bollywood Actor' },
    { src: '/media/cele/c12.jpg', alt: 'Kailash Kher', title: 'Kailash Kher', subtitle: 'Singer' },
    { src: '/media/cele/c16.jpg', alt: 'Monali Thakur', title: 'Monali Thakur', subtitle: 'Singer' },
    { src: '/media/cele/c13.jpg', alt: 'Kirti Kulhari', title: 'Kirti Kulhari', subtitle: 'Actress' },
    { src: '/media/cele/c14.webp', alt: 'Manav Kaul', title: 'Manav Kaul', subtitle: 'Actor' },
  ];


  const row2Images = [
    { src: '/media/cele/c1.jpeg', alt: 'Anupam Kher', title: 'Anupam Kher', subtitle: 'Actor' },
    { src: '/media/cele/c6.jpeg', alt: 'Hardy Sandhu', title: 'Hardy Sandhu', subtitle: 'Singer & Actor' },
    { src: '/media/cele/c2.jpeg', alt: 'Bhumi Pednekar', title: 'Bhumi Pednekar', subtitle: 'Actress' },
    { src: '/media/cele/c8.jpg', alt: 'Hema Malini', title: 'Hema Malini', subtitle: 'Actress' },
    { src: '/media/cele/c10.jpeg', alt: 'Javed Ali', title: 'Javed Ali', subtitle: 'Singer' },
    { src: '/media/cele/c21.jpg', alt: 'Shirley Setia', title: 'Shirley Setia', subtitle: 'Singer' },
  ];


  const row3Images = [
    { src: '/media/cele/c11.jpg', alt: 'John Abraham', title: 'John Abraham', subtitle: 'Actor' },
    { src: '/media/cele/c15.jpg', alt: 'Manoj Joshi', title: 'Manoj Joshi', subtitle: 'Actor' },
    { src: '/media/cele/c20.jpg', alt: 'Sadhguru', title: 'Sadhguru', subtitle: 'Spiritual Leader' },
    { src: '/media/cele/c17.jpg', alt: 'Nitish Bharadwaj', title: 'Nitish Bharadwaj', subtitle: 'Actor' },
    { src: '/media/cele/c21.jpg', alt: 'Shirley Setia', title: 'Shirley Setia', subtitle: 'Singer' },
    { src: '/media/cele/c24.jpg', alt: 'Neeti Mohan', title: 'Neeti Mohan', subtitle: 'Singer' },
  ];


  const row4Images = [
    { src: '/media/cele/c3.jpg', alt: 'Gajendra Verma', title: 'Gajendra Verma', subtitle: 'Singer' },
    { src: '/media/cele/c4.jpg', alt: 'Dr. Kumar Vishwas', title: 'Dr. Kumar Vishwas', subtitle: 'Poet & Speaker' },
    { src: '/media/cele/c5.jpg', alt: 'Gaur Gopal Das', title: 'Gaur Gopal Das', subtitle: 'Motivational Speaker' },
    { src: '/media/cele/c17.jpg', alt: 'Nitish Bharadwaj', title: 'Nitish Bharadwaj', subtitle: 'Actor' },
    { src: '/media/cele/c21.jpg', alt: 'Shirley Setia', title: 'Shirley Setia', subtitle: 'Singer' },
    { src: '/media/cele/c19.jpg', alt: 'Ranvir Shorey', title: 'Ranvir Shorey', subtitle: 'Actor' },
  ];


  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#f0af23] opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d9bf86] opacity-10 rounded-full blur-3xl -z-10" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 -z-10" />

      <div className="mx-full">
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
              speed={2}
              gap={20}
            />
          </div>
          
          {/* Row 2 - Moving Right */}
          <div>
            <InfiniteCarousel
              images={row2Images}
              direction="right"
              speed={2.5}
              gap={20}
            />
          </div>
          
          {/* Row 3 - Moving Left */}
          <div>
            <InfiniteCarousel
              images={row3Images}
              direction="left"
              speed={2}
              gap={20}
            />
          </div>

          {/* Row 4 - Moving Right */}
          <div>
            <InfiniteCarousel
              images={row4Images}
              direction="right"
              speed={2.5}
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