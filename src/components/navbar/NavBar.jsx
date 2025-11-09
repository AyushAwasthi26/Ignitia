import React, { useState } from 'react';
import FlowingMenu from './FlowingMenu';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { 
      link: '/', 
      text: 'Home', 
      hoverText: 'Back to Home',
      image1: 'https://picsum.photos/600/400?random=1',
      image2: 'https://picsum.photos/600/400?random=2'
    },
    { 
      link: '/about', 
      text: 'About', 
      hoverText: 'Know Us',
      image1: 'https://picsum.photos/600/400?random=3',
      image2: 'https://picsum.photos/600/400?random=4'
    },
    { 
      link: '/events', 
      text: 'Events', 
      hoverText: 'What We Do',
      image1: 'https://picsum.photos/600/400?random=5',
      image2: 'https://picsum.photos/600/400?random=6'
    },
    { 
      link: '/sponsors', 
      text: 'Sponsors', 
      hoverText: 'Our Partners',
      image1: 'https://picsum.photos/600/400?random=7',
      image2: 'https://picsum.photos/600/400?random=8'
    },
    { 
      link: '/archive', 
      text: 'Archive', 
      hoverText: 'Past Memories',
      image1: 'https://picsum.photos/600/400?random=9',
      image2: 'https://picsum.photos/600/400?random=10'
    },
    { 
      link: '/gallery', 
      text: 'Gallery', 
      hoverText: 'View Photos',
      image1: 'https://picsum.photos/600/400?random=11',
      image2: 'https://picsum.photos/600/400?random=12'
    },
    { 
      link: '/teams', 
      text: 'Teams', 
      hoverText: 'Meet the Team',
      image1: 'https://picsum.photos/600/400?random=13',
      image2: 'https://picsum.photos/600/400?random=14'
    }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 left-0 w-screen z-50 bg-black text-white">
        <div className="flex justify-between items-center px-5">
          {/* Logo on the left */}
          <div className="w-24 lg:w-32">
            <img src='./media/ignitia.png'/>
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
        <div className="absolute w-full h-full z-40">
          <FlowingMenu items={menuItems} />
        </div>
      )}
    </>
  );
};

export default NavBar;