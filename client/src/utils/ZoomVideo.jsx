import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomVideo = () => {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        scale: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom+=400 top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <div className="relative h-screen overflow-hidden z-0">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/vid.mp4"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};

export default ZoomVideo;
