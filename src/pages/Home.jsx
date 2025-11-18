import React from "react";
import HeroTiles from "../components/home/HeroTiles";
import HomeAbout from "../components/home/HomeAbout";

import p1 from "/media/home/p1.jpg";
import p2 from "/media/home/p2.jpg";
import p3 from "/media/home/p3.webp";
import p4 from "/media/home/p4.jpg";
import p5 from "/media/home/p5.jpg";
import p6 from "/media/home/p6.jpg";
import ignitia from "/media/ignitia.png";
import ignitia2 from "/media/svgs/ignitia.fig.svg";

const Home = () => {
  const images = [p1, p2, p3, p4, p5, p6];
  const logo = ignitia;

  return (
    <div className="h-full w-full relative">
      {/* Hero Section */}
      <HeroTiles images={images} logo={logo} />

      {/* About Section */}
      <HomeAbout />

      {/* Below Sections */}
      <div className="h-[100%] w-full relative bg-black"></div>
    </div>
  );
};

export default Home;
