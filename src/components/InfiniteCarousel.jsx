import React, { useRef, useEffect } from 'react';

/**
 * A reusable component for an infinitely scrolling image carousel.
 * @param {Array<Object>} images - Array of image objects: { src, alt, title }
 * @param {('left'|'right')} direction - Direction of the scroll.
 * @param {number} speed - Speed of the scroll (pixels per frame).
 * @param {number} gap - Gap between items in pixels.
 */
const InfiniteCarousel = ({ 
  images, 
  direction = 'left', 
  speed = 1,
  gap = 32
}) => {
  const scrollRef = useRef(null);

  // Core logic for infinite scrolling via requestAnimationFrame
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const contentWidth = scrollContainer.scrollWidth / 3; 

    const scroll = () => {
      if (direction === 'left') {
        scrollPosition += speed;
        if (scrollPosition >= contentWidth) {
          scrollPosition = 0;
        }
      } else { // direction === 'right'
        scrollPosition -= speed;
        if (scrollPosition <= 0) {
          scrollPosition = contentWidth;
        }
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    // Initialize position for right scroll
    if (direction === 'right') {
      scrollPosition = contentWidth;
    }

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [direction, speed]);

  // Duplicate images three times for seamless looping
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden scrollbar-hide will-change-scroll"
        style={{ 
          gap: `${gap}px`,
          padding: '10px', 
          marginBottom: '10px' 
        }}
      >
        {duplicatedImages.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative group transition-all duration-300"
            style={{ width: '320px', height: '450px' }}
          >
            <img
              src={img.src}
              alt={img.alt || 'Celebrity Guest'}
              className="w-full h-full object-cover rounded-3xl border border-white/20 transition-transform duration-500 group-hover:scale-[1] shadow-sm group-hover:shadow-[0_0_20px_rgba(240,175,35,0.7)]"
              draggable="false"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x400/1e1e1e/d9bf86?text=Guest+Image"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-all duration-500 rounded-3xl flex flex-col justify-end p-6">
              {/* {img.year && (
                <span className="text-[#f0af23] font-[font2] text-sm uppercase mb-1 tracking-wider">
                  {img.year}
                </span>
              )} */}
              {img.title && (
                <h3 className="text-white font-[font2] text-4xl font-bold leading-10">
                  {img.title}
                </h3>
              )}
              {img.subtitle && (
                <p className="text-[#e4bf6d] text-md">{img.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;