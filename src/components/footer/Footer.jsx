import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ChevronUp} from 'lucide-react';

const IgnitaFooter = () => {
  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle link click - navigate and scroll to top
  const handleLinkClick = () => {
    scrollToTop();
  };

  return (
    <footer className="relative w-full overflow-hidden bg-black">
      {/* Video Background with Blur Effect */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-90"
        >
          <source src="/media/footer/f-main.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-black/20"></div>
      </div>
      
      {/* Animated Gradient Border Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Logo and Tagline */}
            <div className="md:col-span-1 space-y-6">
              <Link 
                to="/"
                onClick={handleLinkClick}
                className="w-40 h-40 relative group cursor-pointer block"
              >
                <div className="relative bg-black/50 backdrop-blur-sm rounded-full p-6 border border-yellow-500/30 flex items-center justify-center">
                  {/* Ignita Logo SVG */}
                  
                    <img src='/media/ignitia.png' alt="Ignitia Logo" className="w-full h-full" />
                 
                </div>
              </Link>
              {/* <p className="text-gray-300 text-md leading-relaxed">
                Join us for an unforgettable celebration of art, music, and culture
              </p> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-yellow-400 font-bold text-xl mb-6 tracking-wide">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Teams', path: '/teams' },
                  { name: 'Events', path: '/events' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore More */}
            <div>
              <h3 className="text-yellow-400 font-bold text-xl mb-6 tracking-wide">Explore More</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Sponsors', path: '/sponsors' },
                  { name: 'Archive', path: '/archive' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-yellow-400 font-bold text-xl mb-6 tracking-wide">Support</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms & Conditions', path: '/terms' },
                  { name: 'FAQs', path: '/faqs' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider with Glow */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-500/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-600 h-1 w-32 rounded-full shadow-lg shadow-yellow-500/50"></div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-gray-400 text-base">
              © 2025 Ignita 2K25 by <span className="text-yellow-400 font-semibold">PSIT</span>. All rights reserved.
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-md text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
            >
              <span>Back to Top</span>
              {/* <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" /> */}
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/psitkanpur2004', label: 'Facebook' },
                { icon: Instagram, href: 'https://www.instagram.com/ignitia.psitkanpur/', label: 'Instagram' },
                { icon: Linkedin, href: 'https://www.linkedin.com/school/psitkanpur/posts/?feedView=all', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://x.com/PSITKanpur2004', label: 'Twitter' },
                { icon: Youtube, href: 'https://www.youtube.com/@psitkanpur', label: 'YouTube' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-14 h-14 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Floating Bot Icon */}
          {/* <div className="fixed bottom-8 right-8 z-20">
            <button 
              onClick={scrollToTop}
              className="group relative"
              aria-label="Back to top"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-16 h-16 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                <ChevronUp className="w-9 h-9 text-black" />
              </div>
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default IgnitaFooter;