import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Sponsors from './pages/Sponsors'
import Archive from './pages/Archive'
import Gallery from './pages/Gallery'
import Teams from './pages/Teams'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './index.css'

// Added to add smooth scrolling
import { ReactLenis } from 'lenis/react';

// Required: Prevents browser default scroll bouncing and layout jumps
import 'lenis/dist/lenis.css';

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, syncTouch: true }}>
      <div className='min-h-screen w-full'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App