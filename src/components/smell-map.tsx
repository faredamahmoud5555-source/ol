"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

type Props = {
  images: string[];
};

export function SmellMap({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const leftTrack = useRef<HTMLDivElement>(null);
  const centerTrack = useRef<HTMLDivElement>(null);
  const rightTrack = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {








    setMounted(true);
  }, []);



useLayoutEffect(() => {
  if (!open) return;

  const timer = setTimeout(() => {

    const leftHeight = leftTrack.current!.scrollHeight / 2;
    const centerHeight = centerTrack.current!.scrollHeight / 2;
    const rightHeight = rightTrack.current!.scrollHeight / 2;

    gsap.set(leftTrack.current, { y: 0 });
    gsap.set(centerTrack.current, { y: -centerHeight });
    gsap.set(rightTrack.current, { y: 0 });

    const leftTween = gsap.to(leftTrack.current, {
      y: -leftHeight,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((y) => parseFloat(y) % leftHeight),
      },
    });

    const centerTween = gsap.to(centerTrack.current, {
      y: 0,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((y) => parseFloat(y) % centerHeight),
      },
    });

    const rightTween = gsap.to(rightTrack.current, {
      y: -rightHeight,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((y) => parseFloat(y) % rightHeight),
      },
    });

  }, 100);

  return () => clearTimeout(timer);

}, [open]);


  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-20 h-28 w-28 rounded-full bg-[#1B1822] text-white uppercase tracking-[0.25em] text-xs shadow-2xl hover:scale-105 transition"
      >
        Click
        <br />
        To
        <br />
        Smell
      </button>

      {mounted &&
        open &&
        createPortal(

<div className="fixed inset-0 z-[999999] bg-[#080808]/92 backdrop-blur-sm">

            <button
  onClick={() => setOpen(false)}
  className="
    absolute
    top-6
    right-6
    z-[999]
    flex
    items-center
    justify-center
    w-10
    h-10
    text-white
    text-3xl
    font-light
    bg-transparent
    border-0
    rounded-none
    shadow-none
    hover:opacity-70
    transition
  "
>
  ×
</button>
            

            <div className="flex h-screen items-center justify-center">

              <div className="columns">

                {/* LEFT */}
                <div className="column">
                  <div ref={leftTrack} className="track">

                    {[images[0], images[1], images[0], images[1]].map((img, i) => (
                      <div className="card" key={i}>
                        <img src={img} className="card-image" />
                      </div>
                    ))}

                  </div>
                </div>

                {/* CENTER */}
                <div className="column">
                  <div ref={centerTrack} className="track">

                    {[images[2], images[2]].map((img, i) => (
                      <div className="card" key={i}>
                        <img src={img} className="card-image" />
                      </div>
                    ))}

                  </div>
                </div>

                {/* RIGHT */}
                <div className="column">
                  <div ref={rightTrack} className="track">

                    {[images[1], images[0], images[1], images[0]].map((img, i) => (
                      <div className="card" key={i}>
                        <img src={img} className="card-image" />
                      </div>
                    ))}

                  </div>
                </div>

              </div>

            </div>
          </div>,
          document.body
        )}
    </>
  );
}

