import React, { useState, useEffect, useTransition, useMemo } from "react";
import EventCard from "./EventCard"; // Ensure this path is correct
import { motion, AnimatePresence } from "framer-motion";
import eventsData from "./eventsData";




export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState("28");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // NEW: Helper to manage animation priority
  const [isPending, startTransition] = useTransition();

  const eventsPerPage = 8;

  // NEW: Calculate events instantly instead of waiting for useEffect
  const filteredEvents = useMemo(() => {
    let result = eventsData;

    if (selectedDate) {
      result = result.filter((ev) => ev.day === selectedDate);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (ev) =>
          (ev.name || "").toLowerCase().includes(q) ||
          (ev.club || ev.category || "").toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedDate, searchQuery]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDate, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEvents.length / eventsPerPage)
  );
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("events-grid-start")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-font1">
      {/* Background Ambience */}
      {/* <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f0af23] rounded-full blur-[150px] opacity-[0.08]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d9bf86] rounded-full blur-[150px] opacity-[0.08]" />

        Subtle grid pattern overlay 
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-7xl font-font2 text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
            Ignitia{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0af23] to-[#d9bf86]">
              Events
            </span>
          </h1>

          {/* SEARCH */}
          {/* --- REPLACE THE EXISTING SEARCH SECTION WITH THIS --- */}

          <div className="relative max-w-xl mx-auto group z-20">
            {/* Ambient Outer Glow (Pulses on Hover/Focus) */}
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r from-[#f0af23] via-[#d9bf86] to-[#f0af23] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500 ${
                searchQuery ? "opacity-30" : ""
              }`}
            />

            {/* The Search Container */}
            <div className="relative flex items-center bg-black/60 backdrop-blur-xl border border-[#ffd270]/50 rounded-full px-6 py-4 shadow-2xl transition-all duration-300 focus-within:ring-1 focus-within:ring-[#ffa05d] focus-within:border focus-within:border-[#f0af23]/90 focus-within:bg-black/60">
              {/* Animated Search Icon */}
              <div
                className={`text-gray-400 mr-4 transition-colors duration-300 ${
                  searchQuery ? "text-[#f0af23]" : "group-hover:text-[#f0af23]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* The Input Field */}
              <input
                type="text"
                placeholder="Search events, clubs, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-500 text-lg font-font1 outline-none tracking-wide"
              />

              {/* Clear Button (Only shows when typing) */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 text-[#fee3a9] hover:text-[#f0af23] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          
        </div>

        {/* DATE TABS */}
        {/* --- REPLACE THE EXISTING DATE TABS SECTION WITH THIS --- */}

        <div
          className="flex justify-center mb-16 relative z-10 hover:cursor-pointer hover:scale-102 transition-all duration-300"
          id="events-grid-start"
        >
          {/* The Glass Capsule Container */}
          <div className="p-1.5 bg-[#f0af23]/5 hover:bg-[#f0af23]/10 backdrop-blur-2xl border border-[#f0af23]/60 hover:border-[#f0af23]/80 rounded-full inline-flex relative shadow-[0_0_40px_-10px_rgba(240,175,35,0.15)]">
            {["25", "28", "29"].map((date) => {
              const isSelected = selectedDate === date;

              return (
                <button
                  key={date}
                  onClick={() => {
  startTransition(() => {
    setSelectedDate(date);
  });
}}
                  className="relative px-5 py-3 min-w-[100px] rounded-full flex flex-col font-[font2] items-center justify-center transition-colors duration-300 outline-none group"
                >
                  {/* The Sliding Background (Magic Motion) */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-[#f0af23] to-[#d9bf86] rounded-full shadow-lg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Content Wrapper */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span
                      className={`text-[12px] uppercase tracking-[0.1em] font-bold font-[font2] mb-0.5 transition-colors duration-200 ${
                        isSelected
                          ? "text-black"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    > 
                      March
                    </span>
                    <span
                      className={`text-2xl font-black font-font2 leading-none transition-colors duration-200 ${
                        isSelected
                          ? "text-black"
                          : "text-white group-hover:text-[#f0af23]"
                      }`}
                    >
                      {date}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        {/* EVENTS GRID */}
        {/* EVENTS GRID */}
<div className="min-h-[500px]">
  <div className={`transition-opacity duration-300 ${isPending ? "opacity-50" : "opacity-100"}`}>
    {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {currentEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <EventCard event={event} onOpen={openModal} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 opacity-50">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-font2 text-white">No Events Found</h3>
              <p className="text-gray-400 font-font1">
                Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8 pb-12">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-white/10 text-[#f0af23] disabled:opacity-30 hover:bg-white/5 transition"
            >
              ←
            </button>
            <div className="text-sm font-mono text-gray-400 font-font1">
              Page <span className="text-white font-font2">{currentPage}</span>{" "}
              of {totalPages}
            </div>
            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-white/10 text-[#f0af23] disabled:opacity-30 hover:bg-white/5 transition"
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            />

            <motion.div
              className="relative bg-black/80 backdrop-blur-lg w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
            >
              {/* Modal Image */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img
                  src={selectedEvent.poster}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-font2 text-white leading-none mb-2">
                      {selectedEvent.name}
                    </h2>
                    <span className="text-[#f0af23] font-mono text-sm tracking-wider uppercase font-font1">
                      {selectedEvent.club}
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-white transition"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 font-font1">
                  {selectedEvent.description}
                </p>

                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-font2">
                      Date & Time
                    </div>
                    <div className="text-white font-medium font-font1">
                      {selectedEvent.date} • {selectedEvent.time}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-font2">
                      Venue
                    </div>
                    <div className="text-white font-medium font-font1">
                      {selectedEvent.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-font2">
                      Prize Pool
                    </div>
                    <div className="text-[#f0af23] font-bold text-xl font-font2">
                      {typeof selectedEvent.prize === "number"
                        ? `₹${selectedEvent.prize}`
                        : selectedEvent.prize}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-font2">
                      Entry Fee
                    </div>
                    <div className="text-white font-medium font-font1">
                      ₹{selectedEvent.fee}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    className="flex-1 bg-gradient-to-r from-[#f0af23] to-[#d9bf86] text-black font-font2 font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => alert("Registration Logic")}
                  >
                    Register Now
                  </button>
                  <button
                    className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition font-font1"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
