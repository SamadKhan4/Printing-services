import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.children.length ? ref.current.children : ref.current,
        { y: options.y ?? 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.75,
          ease: "power3.out",
          stagger: options.stagger ?? 0.08,
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? "top 82%"
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [options.duration, options.stagger, options.start, options.y]);

  return ref;
}
