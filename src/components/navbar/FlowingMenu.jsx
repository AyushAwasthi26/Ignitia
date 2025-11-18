import React from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function FlowingMenu({ items = [], onMenuClose }) {
  return (
    <div className="w-full h-full bg-black text-white overflow-y-scroll [&::-webkit-scrollbar]:hidden pt-[10vh] lg:pt-0">
      <nav className="flex flex-col m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} onMenuClose={onMenuClose} />
        ))}
      </nav>
    </div>
  );
}


function MenuItem({ link, text, hoverText, image1, image2, onMenuClose }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="uppercase text-[#060010]  text-[3vh] md:text-[4vh] xl:text-[7vh] font-[font2] font-extrabold tracking-normal p-[1vh_1vw_0] leading-[4vh] lg:leading-[7vh]">
        {hoverText || text}
      </span>
      <div
        className="w-[20vw] h-[80%] my-[1.5em] mx-[2vw] rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${idx % 2 === 0 ? image1 : image2})` }}
      />
    </React.Fragment>
  ));

  

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle link click - navigate and scroll to top
  const handleClick = () => {
    scrollToTop();
    if (onMenuClose) {
      onMenuClose();
    }
  };

  return (
    <div
      ref={itemRef}
      className="flex-1 relative overflow-hidden text-center border-t  border-white last:border-b lg:first:border-t-0"
    >
      <Link
        to={link}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-[font2] font-extrabold text-[6vh] md:text-[8vh] xl:text-[12vh] text-white tracking-wide bg-black transition-colors duration-300 hover:text-[#060010]"
      >
        {text}
      </Link>

      {/* Hover Marquee Layer */}
      <div
        ref={marqueeRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-[#fdd47a] translate-y-[101%]"
      >
        <div ref={marqueeInnerRef} className="h-full w-[200%] flex">
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
