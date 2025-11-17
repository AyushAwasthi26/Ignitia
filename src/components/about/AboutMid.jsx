import React from 'react'
import ImageStickyCard from '../ImageStickyCard'

const AboutMid = () => {
  return (
    <section>
      {/* Desktop View - Overlapping Cards */}
      <div className="hidden lg:block relative w-full bg-black" style={{ height: `${6 * 100}vh` }}>
        <ImageStickyCard
          imageSrc="/media/home/y1.jpg"
          year="2020"
          description="The year that changed everything. We adapted, innovated, and discovered new ways to connect and create in the face of unprecedented challenges. Our resilience defined us."
        />
        <ImageStickyCard
          imageSrc="/media/home/y2.jpg"
          year="2021"
          description="A year of recovery and growth. We expanded our reach, launched groundbreaking initiatives, and strengthened our community bonds while embracing hybrid experiences."
        />
        <ImageStickyCard
          imageSrc="/media/home/y3.jpg"
          year="2022"
          description="Innovation at its peak. We introduced cutting-edge technologies, expanded our creative portfolio, and celebrated milestones that set new industry standards."
        />
        <ImageStickyCard
          imageSrc="/media/home/y4.jpg"
          year="2023"
          description="Building momentum. Strategic partnerships formed, ambitious projects launched, and our vision became reality as we pushed boundaries and exceeded expectations."
        />
        <ImageStickyCard
          imageSrc="/media/home/y5.jpg"
          year="2024"
          description="Looking forward. New horizons emerged as we continued our journey of transformation, setting the stage for even greater achievements in the years to come."
        />
        <ImageStickyCard
          imageSrc="/media/home/y6.jpg"
          year="2025"
          description="Looking forward. New horizons emerged as we continued our journey of transformation, setting the stage for even greater achievements in the years to come."
        />
      </div>

      {/* Mobile View - Stacked Cards */}
      <div className="lg:hidden w-full bg-black">
        <ImageStickyCard
          imageSrc="/media/home/y1.jpg"
          year="2020"
          description="The year that changed everything. We adapted, innovated, and discovered new ways to connect and create in the face of unprecedented challenges. Our resilience defined us."
        />
        <ImageStickyCard
          imageSrc="/media/home/y2.jpg"
          year="2021"
          description="A year of recovery and growth. We expanded our reach, launched groundbreaking initiatives, and strengthened our community bonds while embracing hybrid experiences."
        />
        <ImageStickyCard
          imageSrc="/media/home/y3.jpg"
          year="2022"
          description="Innovation at its peak. We introduced cutting-edge technologies, expanded our creative portfolio, and celebrated milestones that set new industry standards."
        />
        <ImageStickyCard
          imageSrc="/media/home/y4.jpg"
          year="2023"
          description="Building momentum. Strategic partnerships formed, ambitious projects launched, and our vision became reality as we pushed boundaries and exceeded expectations."
        />
        <ImageStickyCard
          imageSrc="/media/home/y5.jpg"
          year="2024"
          description="Looking forward. New horizons emerged as we continued our journey of transformation, setting the stage for even greater achievements in the years to come."
        />
        <ImageStickyCard
          imageSrc="/media/home/y6.jpg"
          year="2025"
          description="Looking forward. New horizons emerged as we continued our journey of transformation, setting the stage for even greater achievements in the years to come."
        />
      </div>
    </section>
  )
}

export default AboutMid