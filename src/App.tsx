import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.css";

const App = () => {
  const bottleRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const rightImgsRef = useRef<(HTMLImageElement | null)[]>([]);

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
        rightImgsRef.current.filter(Boolean),
        { y: 80, opacity: 0, rotate: -12 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
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
                     object-cover max-md:hidden"
        />

        <div className="flex w-[85%] h-full justify-start items-center">

          {/* Text */}
          <div className="flex-1" ref={textRef}>
            <h1 className="text-8xl">
              TASTE THE FLAVOUR OF NATIVE INDIAN SPICE & FEEL THE KICK...
            </h1>
            <h2 className="mt-10 text-7xl">
              SPICY SINCE 1997
            </h2>
          </div>

          {/* Right visuals */}
          <div className="flex-1 relative h-full">
            {[
              "/hero-img02.png",
              "/hero-img03.png",
              "/ketchup02.png",
            ].map((src, i) => (
              <img
                key={i}
                ref={(el) => {
                  rightImgsRef.current[i] = el;
                }}
                src={src}
                alt="hero-img"
                className={`hero-img ${i === 0
                  ? "right-10 top-10 rotate-6 shadow-2xl"
                  : i === 1
                    ? "bottom-10 right-10 -rotate-6 shadow-2xl"
                    : "left-[-40%] top-[35%] rotate-6 w-[700px] drop-shadow-2xl"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
