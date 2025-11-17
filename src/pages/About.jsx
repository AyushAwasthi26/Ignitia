import React from 'react'
import AboutLanding from '../components/about/AboutLanding'
import HomeAbout from '../components/home/HomeAbout'
import AboutText from '@/components/about/AboutText'
import AboutMid from '@/components/about/AboutMid'
import AboutCelebs from '@/components/about/AboutCelebs'

const About = () => {
  return (
    <div className="h-full w-full relative">
      {/* Hero Section */}
      <AboutLanding />

      {/* About Text Section */}
      <AboutText />

      
      {/* Celebrity Showcase Section */}
      <AboutCelebs />

      {/* Timeline Section */}
      <AboutMid />


      {/* Below Sections */}
      <div className="h-[100%] w-full relative bg-black"></div>
    </div>
  )
}

export default About