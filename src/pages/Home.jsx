import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import UserButton from "../components/UserButton";
import ZoomVideo from "../utils/ZoomVideo"; // ✅
import Products from "./Products";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const overlayRef = useRef();

  useEffect(() => {
    gsap.to(overlayRef.current, {
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      y: -100,
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <ZoomVideo /> {/* ✅ Now scroll-zoom works */}

      <div className="absolute top-0 left-0 z-30 w-full px-8 py-8 flex justify-between items-center">
        <Logo />
        <Navbar />
        <UserButton />
      </div>
<div className="mt-40">
    <Products/>
</div>
    </div>
  );
};

export default Home;
