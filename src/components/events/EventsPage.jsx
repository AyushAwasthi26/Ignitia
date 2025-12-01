import React, { useState, useEffect } from "react";
import EventCard from "./EventCard"; // Ensure this path is correct
import { motion, AnimatePresence } from "framer-motion";

const eventsData = [
  { id: 1, name: "RoboSoccer", club: "Robo Club", category: "Robotics", poster: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80", date: "25 March", time: "11:00 AM", location: "Main Ground", coordinator: "Amit K.", fee: 200, prize: "15,000", description: "Battle of the bots on the soccer field. Bring your custom built bots.", day: "25" },
  { id: 2, name: "Code Sprint", club: "Coding Club", category: "Coding", poster: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80", date: "25 March", time: "02:00 PM", location: "Lab 2", coordinator: "Sarah J.", fee: 100, prize: "10,000", description: "Rapid fire coding contest. Solve 5 problems in 2 hours.", day: "25" },
  { id: 101, name: "Armageddon", club: "Robo Club", category: "Robotics", poster: "https://images.unsplash.com/photo-1535378437327-b71280637040?auto=format&fit=crop&q=80", date: "28 March", time: "10:00 AM", location: "Auditorium", coordinator: "Akshat T.", fee: 200, prize: "6,00,000", description: "Where robots roar and metal soars! The flagship robotics war.", day: "28" },
  { id: 102, name: "Nano Nav", club: "IoT Club", category: "Robotics", poster: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80", date: "28 March", time: "11:00 AM", location: "L-34", coordinator: "Bhoomi G.", fee: 200, prize: "2,00,000", description: "Navigate the maze with micromouse. Precision is key.", day: "28" },
  { id: 103, name: "Super Striker", club: "Robo Club", category: "Robotics", poster: "https://images.unsplash.com/photo-1563206767-5b1d972f9fb3?auto=format&fit=crop&q=80", date: "28 March", time: "01:00 PM", location: "Ground", coordinator: "Harsh S.", fee: 149, prize: "1,60,000", description: "The ultimate robot soccer championship.", day: "28" },
  { id: 104, name: "Plasma Pull", club: "Mech Club", category: "Robotics", poster: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80", date: "28 March", time: "03:00 PM", location: "Arena", coordinator: "Yadav", fee: 149, prize: "1,00,000", description: "Tug of war for the strongest machines.", day: "28" },
  { id: 105, name: "Hackathon", club: "Dev Cell", category: "Coding", poster: "https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&q=80", date: "28 March", time: "09:00 AM", location: "CC Lab", coordinator: "Dev", fee: 300, prize: "50,000", description: "24 hour coding marathon. Build solutions for real world problems.", day: "28" },
  { id: 106, name: "Valorant", club: "Esports", category: "Gaming", poster: "https://images.unsplash.com/photo-1593305841991-05c29736ce36?auto=format&fit=crop&q=80", date: "28 March", time: "10:00 AM", location: "Gaming Room", coordinator: "Sam", fee: 500, prize: "20,000", description: "5v5 Tactical Shooter tournament.", day: "28" },
  { id: 107, name: "Quiz Wiz", club: "Lit Club", category: "Literary", poster: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80", date: "28 March", time: "02:00 PM", location: "Sem Hall", coordinator: "Tina", fee: 50, prize: "5,000", description: "Test your general knowledge.", day: "28" },
  { id: 108, name: "Debate", club: "Lit Club", category: "Literary", poster: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80", date: "28 March", time: "11:00 AM", location: "Conf Room", coordinator: "Rohan", fee: 50, prize: "3,000", description: "Speak your mind.", day: "28" },
  { id: 201, name: "Star Night", club: "Cultural Council", category: "Cultural", poster: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80", date: "29 March", time: "06:00 PM", location: "Main Stage", coordinator: "Council", fee: 0, prize: "0", description: "Celebrity Night with DJ Snake.", day: "29" },
];

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState("28");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsPerPage = 8;

  useEffect(() => {
    let result = eventsData;

    if (selectedDate) {
      result = result.filter((ev) => ev.day === selectedDate);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((ev) =>
        (ev.name || "").toLowerCase().includes(q) ||
        (ev.club || ev.category || "").toLowerCase().includes(q)
      );
    }

    setFilteredEvents(result);
    setCurrentPage(1);
  }, [selectedDate, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / eventsPerPage));
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById("events-grid-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f0af23] rounded-full blur-[150px] opacity-[0.08]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d9bf86] rounded-full blur-[150px] opacity-[0.08]" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-7xl font-font2 text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
            Ignitia <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0af23] to-[#d9bf86]">Events</span>
          </h1>

          {/* SEARCH */}
          <div className="relative max-w-lg mx-auto group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0af23] to-[#d9bf86] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300" />
            <div className="relative bg-black/80 backdrop-blur-sm rounded-lg flex items-center p-1 border border-white/10">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white px-4 py-3 outline-none placeholder-gray-600 text-lg font-font1"
              />
              <div className="p-3 text-[#f0af23]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* DATE TABS */}
        <div className="flex justify-center mb-12" id="events-grid-start">
          <div className="flex gap-4 p-2 overflow-x-auto no-scrollbar">
            {["25", "28", "29"].map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`relative px-6 py-3 rounded-lg border transition-all duration-300 font-font2 ${
                  selectedDate === date
                    ? "bg-[#f0af23] border-[#f0af23] text-black"
                    : "bg-black/30 backdrop-blur-sm border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">March</div>
                <div className="text-2xl font-black">{date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* EVENTS GRID */}
        <div className="min-h-[500px]">
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
              <p className="text-gray-400 font-font1">Try adjusting your filters.</p>
            </div>
          )}
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
              Page <span className="text-white font-font2">{currentPage}</span> of {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
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
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeModal} />
            
            <motion.div
              className="relative bg-black/80 backdrop-blur-lg w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
            >
              {/* Modal Image */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                 <img src={selectedEvent.poster} alt="" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-font2 text-white leading-none mb-2">{selectedEvent.name}</h2>
                    <span className="text-[#f0af23] font-mono text-sm tracking-wider uppercase font-font1">{selectedEvent.club}</span>
                  </div>
                  <button onClick={closeModal} className="text-gray-500 hover:text-white transition">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 font-font1">{selectedEvent.description}</p>

                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-font2">Date & Time</div>
                    <div className="text-white font-medium font-font1">{selectedEvent.date} • {selectedEvent.time}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-font2">Venue</div>
                    <div className="text-white font-medium font-font1">{selectedEvent.location}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-font2">Prize Pool</div>
                    <div className="text-[#f0af23] font-bold text-xl font-font2">{typeof selectedEvent.prize === "number" ? `₹${selectedEvent.prize}` : selectedEvent.prize}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-font2">Entry Fee</div>
                    <div className="text-white font-medium font-font1">₹{selectedEvent.fee}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <button className="flex-1 bg-gradient-to-r from-[#f0af23] to-[#d9bf86] text-black font-font2 font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity" onClick={() => alert("Registration Logic")}>
                     Register Now
                   </button>
                   <button className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition font-font1" onClick={closeModal}>
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