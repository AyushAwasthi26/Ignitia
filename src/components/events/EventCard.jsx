import React from "react";
import { motion } from "framer-motion";

// Slightly adjusted clip path to ensure text at bottom corners isn't cut off too aggressively
{/* 'path("M1 443.824V92.4971C1 87.9401 2.79117 83.5658 5.98718 80.3176L78.9268 6.18619C82.1912 2.86844 86.6508 1 91.3052 1H290.247C299.838 1 307.612 8.77488 307.612 18.3657V415.334C307.612 424.925 299.838 432.699 290.247 432.699H165.34C161.033 432.699 156.879 434.3 153.686 437.191L132.134 456.699C128.941 459.589 124.787 461.19 120.48 461.19H18.3657C8.77487 461.19 1 453.415 1 443.824Z")', */}
// const CLIP = "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)";

// const CLIP = 'path("M30.76 0 C20 0 12 12 12 24 L12 46.1 L0 46.1 L0 461.19 L276.85 461.19 C290 461.19 302 449.19 302 436.19 L307.61 415.07 L307.61 0 Z")';

// THE GOAT!!!!!!
// const CLIP = 'path("M1 443.824V92.4971C1 87.9401 2.79117 83.5658 5.98718 80.3176L78.9268 6.18619C82.1912 2.86844 86.6508 1 91.3052 1H290.247C299.838 1 307.612 8.77488 307.612 18.3657V415.334C307.612 424.925 299.838 432.699 290.247 432.699H165.34C161.033 432.699 156.879 434.3 153.686 437.191L132.134 456.699C128.941 459.589 124.787 461.19 120.48 461.19H18.3657C8.77487 461.19 1 453.415 1 443.824Z")';

// THE "SMOOTH" RESPONSIVE GOAT
// We use calc() to make it responsive, and added extra points at the corners
// to simulate the rounded radius you loved, without the fixed-pixel limitations.
const CLIP = `polygon(
  /* TOP-LEFT CUT (Rounded) */
  0 55px,
  3px 50px, 
  50px 3px, 
  55px 0,

  /* TOP-RIGHT CORNER (Rounded) */
  calc(100% - 12px) 0,
  100% 12px,

  /* BOTTOM-RIGHT CUT (Rounded) */
  100% calc(100% - 35px),
  100% calc(100% - 35px),
  calc(100% - 35px) 100%,

  /* BOTTOM-LEFT CORNER (Rounded) */
  12px 100%,
  0 calc(100% - 12px)
)`;

export default function EventCard({ event, onOpen }) {
  const club = event.club || event.category || "Club";

  return (
    <motion.div
      className="relative w-full h-[24rem] sm:h-[28rem] cursor-pointer select-none group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Only apply scale effect on hover, removed y offset to keep layout stable
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onOpen?.(event)}
    >
      {/* CARD SHAPE CONTAINER */}
      {/* LAYER 1: THE BORDER (Gold Gradient Background) */}
      {/* This acts as the border. We force GPU rendering with translateZ for smooth edges. */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#f0af23] via-[#d9bf86] to-[#f0af23]"
        style={{
          clipPath: CLIP,
          WebkitClipPath: CLIP,
          transform: "translateZ(0)",
        }}
      />

      {/* LAYER 2: THE CONTENT (Inset by 1px) */}
      {/* We shrink this inner div by 1px (inset-[1px]) to reveal the Gold Layer behind it as a border */}
      <div
        className="absolute inset-[1px] bg-[#1a1a1a] overflow-hidden"
        style={{
          clipPath: CLIP,
          WebkitClipPath: CLIP,
        }}
      >
        {/* --- BACKGROUND IMAGE --- */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${event.poster})`,
          }}
        />

        {/* --- GRADIENT OVERLAYS --- */}
        {/* Always visible gradient to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
        {/* Gold glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f0af23]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* ==================================================================================
            CONTENT CONTAINER 
            Logic: 
            - Mobile/Tablet (default): opacity-100, always visible.
            - Desktop (xl:): opacity-0, hidden by default, visible on group-hover.
           ================================================================================== */}

        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          {/* TOP RIGHT BADGE (Date/Time) - Moved to right as requested */}
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-black/60 backdrop-blur-md border border-[#f0af23]/30 px-3 py-1.5 rounded text-md font-[font1] text-[#f0af23] flex gap-2 items-center">
              <span>{event.date}</span>
              <span className="w-1 h-1 bg-white rounded-full" />
              <span>{event.time}</span>
            </div>
          </div>

          {/* MAIN BOTTOM CONTENT */}
          <div className="relative z-20 transform transition-all duration-300 xl:translate-y-4 xl:group-hover:translate-y-0">
            {/* 1. Title Row (One line) */}
            <div className="flex items-end justify-between gap-2 mb-1">
              <h3
                className="text-white text-2xl font-black tracking-tight truncate w-full"
                title={event.name}
              >
                {event.name}
              </h3>
              {/* Prize - Always visible */}
              <div className="flex flex-col items-end shrink-0">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Win
                </span>
                <span className="text-[#f0af23] font-bold">
                  {typeof event.prize === "number"
                    ? `₹${event.prize}`
                    : event.prize}
                </span>
              </div>
            </div>

            {/* 2. Subtitle (Club) */}
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              {club}
            </div>

            {/* 3. Description & Extra Details 
               - On Mobile: Visible (line clamp 1)
               - On Desktop (xl): Hidden by default (opacity-0), reveals on hover
            */}
            <div
              className="transition-all duration-300 
                            xl:max-h-0 xl:opacity-0 xl:group-hover:max-h-20 xl:group-hover:opacity-100"
            >
              <p className="text-sm text-gray-300 line-clamp-1 mb-3 border-l-2 border-[#f0af23] pl-2">
                {event.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-[#f0af23]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="truncate max-w-[100px]">
                    {event.location}
                  </span>
                </div>

                <div className="text-white hover:text-[#f0af23] flex items-center gap-1 font-medium transition-colors">
                  View Details &rarr;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outer border glow effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: CLIP,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
          }}
        />
      </div>
    </motion.div>
  );
}
