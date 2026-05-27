"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export function ScrollBackdrop() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);

  useLayoutEffect(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);

    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      media.removeEventListener("change", updateMotion);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const slow = reducedMotion ? 0 : scrollY * 0.12;
  const medium = reducedMotion ? 0 : scrollY * 0.2;
  const fast = reducedMotion ? 0 : scrollY * 0.06;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="scroll-backdrop-base absolute inset-0"
        style={{
          transform: reducedMotion ? undefined : `translateY(${fast * 0.5}px)`,
        }}
      />

      <div
        className="scroll-backdrop-orb scroll-backdrop-orb--amber absolute -top-24 -right-16 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ transform: `translate3d(0, ${slow}px, 0)` }}
      />
      <div
        className="scroll-backdrop-orb scroll-backdrop-orb--sage absolute top-[38%] -left-24 h-[22rem] w-[22rem] rounded-full blur-3xl"
        style={{ transform: `translate3d(0, ${medium}px, 0)` }}
      />
      <div
        className="scroll-backdrop-orb scroll-backdrop-orb--peach absolute right-[10%] bottom-[12%] h-[20rem] w-[20rem] rounded-full blur-3xl"
        style={{ transform: `translate3d(0, ${-slow * 0.6}px, 0)` }}
      />
      <div
        className="scroll-backdrop-orb scroll-backdrop-orb--gold absolute top-[62%] left-[35%] h-[16rem] w-[16rem] rounded-full blur-3xl"
        style={{ transform: `translate3d(0, ${-medium * 0.4}px, 0)` }}
      />

      <div
        className="scroll-backdrop-horizon absolute inset-x-0 bottom-0 h-[45vh]"
        style={{
          transform: reducedMotion ? undefined : `translateY(${-fast}px)`,
        }}
      />
    </div>
  );
}
