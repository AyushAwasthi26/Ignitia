import React from 'react'
import AboutLanding from '../components/about/AboutLanding'
import HomeAbout from '../components/home/HomeAbout'
import AboutText from '@/components/about/AboutText'

const About = () => {
  return (
    <div className="h-full w-full relative">
      {/* Hero Section */}
      <AboutLanding />


      <AboutText />



      {/* About Section */}
      <HomeAbout />

      {/* Below Sections */}
      <div className="h-[100%] w-full relative bg-black"></div>
    </div>
  )
}

export default About