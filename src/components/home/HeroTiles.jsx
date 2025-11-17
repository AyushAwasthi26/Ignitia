import React from "react";
import img from "/media/home/PSIT.jpg"
const HeroTiles = ({ images = [], logo = "", menuIcon = null, signInLabel = "SIGN IN" }) => {
  if (!images || images.length < 6) {
    console.warn("HeroTiles: expected 6 images in the `images` prop.");
  }

  const img = (i) => (images && images[i] ? images[i] : "");

  return (
    <section className="overflow-hidden bg-black relative min-h-screen">
      <main className="overflow-hidden z-1">
        
        {/* Tiles Section */}
        <div className="bg-black whole min-h-screen w-full flex justify-center items-center relative overflow-hidden ">
          {/* Grid container for responsive layout */}
          <div className="grid grid-cols-2 md:grid-cols-6 w-full h-full relative ">
            
            {/* Mobile view - 2x3 grid */}
            <>
              {/* Tile A - Mobile */}
              <div className="md:hidden relative w-full h-[33.333vh] group">
                <div className="image-wrapper relative w-full h-full overflow-hidden">
                  <img 
                    src={img(0)} 
                    alt="tile 0" 
                    className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                </div>
              </div>

              {/* Tile B - Mobile */}
              <div className="md:hidden relative w-full h-[33.333vh] group">
                <div className="image-wrapper relative w-full h-full overflow-hidden">
                  <img 
                    src={img(1)} 
                    alt="tile 1" 
                    className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                </div>
              </div>

              {/* Tile C - Mobile */}
              <div className="md:hidden relative w-full h-[33.333vh] group">
                <div className="image-wrapper relative w-full h-full overflow-hidden">
                  <img 
                    src={img(4)} 
                    alt="tile 4" 
                    className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                </div>
              </div>

              {/* Tile D - Mobile */}
              <div className="md:hidden relative w-full h-[33.333vh] group">
                <div className="image-wrapper relative w-full h-full overflow-hidden">
                  <img 
                    src={img(2)} 
                    alt="tile 2" 
                    className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                </div>
              </div>

              {/* Tile E - Mobile */}
              <div className="md:hidden relative w-full h-[33.333vh] group">
                <div className="image-wrapper relative w-full h-full overflow-hidden">
                  <img 
                    src={img(3)} 
                    alt="tile 3" 
                    className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                </div>
              </div>

              {/* Tile F - Mobile */}
              <div className="md:hidden relative w-full h-[33.333vh] group">
                <div className="image-wrapper relative w-full h-full overflow-hidden">
                  <img 
                    src={img(5)} 
                    alt="tile 5" 
                    className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                </div>
              </div>
            </>

            {/* Desktop view - 2 columns with 3 tiles each */}
            <div className="hidden md:flex md:col-span-6">
              {/* LEFT COLUMN (3 tiles) */}
              <div className="flex w-1/2">
                {/* Tile A */}
                <div className="relative w-1/3 h-screen group">
                  <div className="image-wrapper relative w-full h-full overflow-hidden">
                     <img 
                      src={img(0)} 
                      alt="tile 0" 
                      className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20  " 
                    />
                    
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                  </div>
                </div>

                {/* Tile B */}
                <div className="relative w-1/3 h-screen group">
                  <div className="image-wrapper relative w-full h-full overflow-hidden">
                    <img 
                      src={img(1)} 
                      alt="tile 1" 
                      className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:-rotate-y-20" 
                    />
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                  </div>
                </div>

                {/* Tile C */}
                <div className="relative w-1/3 h-screen group">
                  <div className="image-wrapper relative w-full h-full overflow-hidden">
                    <img 
                      src={img(4)} 
                      alt="tile 4" 
                      className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                    />
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (3 tiles) */}
              <div className="flex w-1/2">
                {/* Tile D */}
                <div className="relative w-1/3 h-screen group">
                  <div className="image-wrapper relative w-full h-full overflow-hidden">
                    <img 
                      src={img(2)} 
                      alt="tile 2" 
                      className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                    />
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                  </div>
                </div>

                {/* Tile E */}
                <div className="relative w-1/3 h-screen group">
                  <div className="image-wrapper relative w-full h-full overflow-hidden">
                    <img 
                      src={img(3)} 
                      alt="tile 3" 
                      className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20"  
                    />
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                  </div>
                </div>

                {/* Tile F */}
                <div className="relative w-1/3 h-screen group">
                  <div className="image-wrapper relative w-full h-full overflow-hidden">
                    <img 
                      src={img(5)} 
                      alt="tile 5" 
                      className="object-cover w-full h-full transform transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:brightness-105 group-hover:rotate-y-20" 
                    />
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Center Logo - Responsive positioning */}
            <div className="absolute z-20 inset-0 flex justify-center items-center pointer-events-none">
              <div className="relative">
                {logo ? (
                  <img
                    src={logo}
                    alt="logo"
                    className="object-contain w-[70vw] md:w-[40vw] max-w-[600px] animate-pulse-slow"
                    style={{ 
                      maxHeight: "70vh",
                      filter: "drop-shadow(0 0 20px rgba(255, 209, 98, 0.5))",
                    }}
                  />
                ) : (
                  <span className="text-4xl md:text-6xl font-bold text-white">LOGO</span>
                )}
                {/* Decorative elements */}
                <div className="absolute -inset-4 rounded-full border-2 border-yellow-400 opacity-30 animate-ping-slow"></div>
                {/* Additional glow effect */}
                <div className="absolute -inset-6 rounded-full border border-yellow-300 opacity-20 animate-ping-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        /* Custom brightness class for 160% */
        .group-hover\:brightness-110:hover {
          filter: brightness(1.6);
        }
      `}</style>
    </section>
  );
};

export default HeroTiles;