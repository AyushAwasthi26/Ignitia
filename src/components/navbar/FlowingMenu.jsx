import React from "react";
import { gsap } from "gsap";

function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden bg-black text-white">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, hoverText, image1, image2 }) {
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
      <span className="uppercase text-[#060010]  text-[3vh] md:text-[4vh] xl:text-[6vh] font-[font2] font-extrabold tracking-normal p-[1vh_1vw_0] leading-[6vh]">
        {hoverText || text}
      </span>
      <div
        className="w-[20vw] h-[80%] my-[1.5em] mx-[2vw] rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${idx % 2 === 0 ? image1 : image2})` }}
      />
    </React.Fragment>
  ));

  return (
    <div
      ref={itemRef}
      className="flex-1 relative overflow-hidden text-center border-t  border-white first:border-t-0"
    >
      <a
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-[font2] font-extrabold text-[12vh] text-white tracking-wide transition-colors duration-300 hover:text-[#060010]"
      >
        {text}
      </a>

      {/* Hover Marquee Layer */}
      <div
        ref={marqueeRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-[#d9bf86] translate-y-[101%]"
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
