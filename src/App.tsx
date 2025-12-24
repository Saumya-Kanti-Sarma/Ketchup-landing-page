import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.css";

const App = () => {
  const bottleRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const rightImgsRef1 = useRef<(HTMLImageElement | null)>(null);
  const rightImgsRef2 = useRef<(HTMLImageElement | null)>(null);
  const rightImgsRef3 = useRef<(HTMLImageElement | null)>(null);

  useEffect(() => {
    if (!bottleRef.current || !textRef.current) return;
    gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      // Ketchup bottle
      tl.fromTo(
        bottleRef.current,
        { x: "-120%", opacity: 0 },
        { x: 0, opacity: 1, duration: 1.6, ease: "power2.in" }
      );

      // Text
      tl.fromTo(
        Array.from(textRef.current!.children),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.25,
        },
        "-=0.9"
      );

      //Right images
      tl.fromTo(
        rightImgsRef1.current,
        { y: 80, opacity: 0, rotate: -12 },
        {
          y: 0,
          opacity: 1,
          rotate: -6,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.8"
      );
      tl.fromTo(
        rightImgsRef2.current,
        { y: 80, opacity: 0, rotate: -12 },
        {
          y: 0,
          opacity: 1,
          rotate: 6,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.8"
      );
    });
  }, []);

  return (
    <main>
      <div className="full-screen bg-[var(--primary-red)] relative flex justify-end items-center overflow-hidden">

        {/* Left bottle */}
        <img
          ref={bottleRef}
          src="/ketchup.png"
          alt="ketchup-logo"
          className="absolute h-[100vh] left-[-300px]
                     drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]
                     object-cover max-md:left-[-320px]"
        />

        <div className="flex w-[85%] h-full justify-start items-center max-xl:w-[75%]">

          {/* Text */}
          <div className="flex-1" ref={textRef}>
            <h1 className="text-[var(--secondary-red)] text-9xl mb-10 max-lg:text-8xl max-lg:mb-5 ">HEINZ KETCHUP</h1>
            <h1 className="text-7xl max-lg:text-4xl">
              TASTE THE FLAVOUR OF NATIVE INDIAN SPICE & FEEL THE KICK...
            </h1>
          </div>

          {/* Right visuals */}
          <div className="flex-1 relative h-full max-xl:hidden">
            <img
              ref={rightImgsRef1}
              src={"/hero-img02.png"}
              alt="hero-img"
              className="hero-img right-10 top-10 rotate-6 shadow-2xl max-2xl:top-[20%]" />
            <img
              ref={rightImgsRef2}
              src={"/ketchup02.png"}
              alt="hero-img"
              className="hero-img left-[-30%] top-[48%] rotate-6 max-2xl:left-[-20%] max-2xl:top-[55%]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
