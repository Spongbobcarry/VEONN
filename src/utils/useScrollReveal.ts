// useScrollReveal.ts
import { useEffect } from "react";

export default function useScrollReveal(
  ref: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("scroll-show");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.2 }
    );

    element.classList.add("scroll-hidden");
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);
}
