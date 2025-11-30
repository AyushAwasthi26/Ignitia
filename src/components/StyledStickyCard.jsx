import React, { useState, useEffect, useRef } from 'react';

// --- Nested Component: NumberCounter ---
// This component handles the smooth counting animation from 0 to targetNumber
// It now takes a 'startCounting' prop to control when the animation begins.
const NumberCounter = ({ target, startCounting }) => {
  // State to hold the current number being displayed
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check if counting is triggered and target is valid
    if (!startCounting || typeof target !== 'number' || target < 0) {
      // Reset count if it's not supposed to be counting yet (to 0 before start)
      if (!startCounting) setCount(0); 
      return;
    }

    let startTimestamp;
    // Animation duration in milliseconds
    const duration = 3000; 

    // The animation frame function
    const step = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      // Calculate the progress of the animation
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);

      // We will use a simple linear progression here, as before, for predictable timing.
      const newCount = Math.floor(percentage * target);

      setCount(newCount);

      // Continue the animation if not complete
      if (percentage < 1) {
        window.requestAnimationFrame(step);
      }
    };

    // Start the animation
    const animationFrameId = window.requestAnimationFrame(step);

    // Cleanup function to cancel the animation frame when the component unmounts
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, startCounting]); // Reruns when target or startCounting changes

  // Format the number with locale-specific separators (e.g., 10,000)
  const formattedCount = count.toLocaleString();

  return (
    <span className="text-8xl sm:text-[25vh] font-extrabold text-[#f0af23] tracking-tighter transition-all duration-1000 drop-shadow-[0_0_15px_rgba(240,175,35,0.5)]">
      {formattedCount}
    </span>
  );
};

// --- Main Component: StyledStickyCard ---
// Renamed the exported function to match the usage in the parent component (HomeAbout.jsx)
export default function StyledStickyCard({ videoSrc, targetNumber, statisticText, url }) {
  // 1. Ref to attach to the element we want to observe
  const cardRef = useRef(null);
  // 2. State to track if the element has entered the viewport (and thus, if counting should start)
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is visible and we haven't counted yet, set state to true
        if (entry.isIntersecting && !inViewport) {
          setInViewport(true);
          // Optionally stop observing once the count is triggered, as we only need it once
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Start observing the target element
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup function
    return () => {
      if (cardRef.current) {
        // Ensure observer is disconnected on unmount
        observer.unobserve(cardRef.current);
      }
    };
  }, [inViewport]); // Dependency array ensures cleanup runs correctly

  return (
    <div className="sticky font-[font2] top-0 w-full min-h-[80vh] sm:h-screen flex items-center justify-center px-1 sm:px-6 lg:px-8 py-8 bg-black/10">
      <div
        ref={cardRef} // Attach the ref here for IntersectionObserver
        onClick={() => url && window.open(url, '_blank')}
        // Card styling: dark background, subtle shadow, rounded corners
        className={`relative w-full h-full max-w-9xl mx-auto rounded-3xl overflow-hidden transition-all duration-700 ease-in-out ${
          url ? 'cursor-pointer' : ''
        }`}
      >
        {/* Background Video Element (Autoplay, Loop, Muted) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[.9] transition-all duration-1000"
          src={videoSrc}
        />

        {/* Gradient Overlay for better contrast and visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 transition-opacity duration-1000" />

        {/* Text Content: Centered Statistic Display */}
        <div className="relative w-full h-full flex flex-col justify-center items-center text-white p-4 md:p-14 lg:p-20 text-center space-y-4">
          
          {/* The Counting Number - Now controlled by inViewport state */}
          <NumberCounter target={targetNumber} startCounting={inViewport} />
          
          {/* The Statistic Label */}
          <div className="text-xl sm:text-2xl md:text-4xl text-white uppercase tracking-widest font-light opacity-90 mt-4">
            {statisticText}
          </div>

          {/* Optional Call to Action (Only shows if URL is provided) */}
          {/* {url && (
            <div className="mt-12 group">
              <div className="px-8 py-3 bg-transparent backdrop-blur-sm border border-[#f0af23]/50 text-[#f0af23] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 group-hover:bg-[#f0af23] group-hover:text-black group-hover:shadow-lg group-hover:shadow-[#f0af23]/30 flex items-center">
                Explore The Data
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}