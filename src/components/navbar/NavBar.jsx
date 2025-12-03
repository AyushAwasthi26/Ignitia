import React, { useState } from "react";
import FlowingMenu from "./FlowingMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      link: "/",
      text: "Home",
      hoverText: "Back to Home",
      image1: "/media/home/p7.jpg",
      image2: "/media/home/y1.jpg",
    },
    {
      link: "/about",
      text: "About",
      hoverText: "Know Us",
      image1: "/media/home/y2.jpg",
      image2: "/media/home/ab2.webp",
    },
    {
      link: "/events",
      text: "Events",
      hoverText: "What We Do",
      image1: "/media/home/y3.jpg",
      image2: "/media/home/y4.jpg",
    },
    {
      link: "/sponsors",
      text: "Sponsors",
      hoverText: "Our Partners",
      image1: "/media/home/y5.jpg",
      image2: "/media/home/y6.jpg",
    },
    {
      link: "/archive",
      text: "Archive",
      hoverText: "Past Memories",
      image1: "/media/home/PSIT.jpg",
      image2: "/media/home/y7.jpg",
    },
    {
      link: "/gallery",
      text: "Gallery",
      hoverText: "View Photos",
      image1: "/media/home/y8.jpg",
      image2: "/media/home/y9.jpg",
    },
    {
      link: "/teams",
      text: "Teams",
      hoverText: "Meet the Team",
      image1: "/media/home/y10.jpg",
      image2: "/media/home/p11.webp",
    },
  ];

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  const handleLinkClick = () => {
    scrollToTop();
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 left-0 w-full z-50 bg-black text-white">
        <div className="flex justify-between items-center px-5">
          {/* Logo on the left */}
          <div className="w-24 lg:w-32">
            <Link
              to='/'
              onClick={handleLinkClick}
            >
            <img src="./media/ignitia.png" />
            </Link>
          </div>

          {/* Burger Icon on the right */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative group flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <div className="absolute flex items-center justify-center w-full h-full">
                <div className="h-8 lg:h-10 w-0.5 bg-white rotate-45 absolute group-hover:bg-[#f0af23] transition-all duration-300"></div>
                <div className="h-8 lg:h-10 w-0.5 bg-white -rotate-45 absolute group-hover:bg-[#f0af23] transition-all duration-300"></div>
              </div>
            ) : (
              // Burger Icon (3 lines)
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <div className="w-8 lg:w-10 h-1 bg-white group-hover:bg-[#f0af23] transition-all duration-300 rounded-2xl"></div>
                <div className="w-8 lg:w-10 h-1 bg-white group-hover:bg-[#f0af23] transition-all duration-300 rounded-2xl"></div>
                <div className="w-8 lg:w-10 h-1 bg-white group-hover:bg-[#f0af23] transition-all duration-300 rounded-2xl"></div>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] z-40 overflow-y-auto lg:top-20 lg:h-[calc(100vh-5rem)]">
          <FlowingMenu items={menuItems} onMenuClose={() => setIsMenuOpen(false)} />
        </div>
      )}
    </>
  );
};

export default NavBar;
