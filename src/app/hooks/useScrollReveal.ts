import { useEffect, useRef } from "react";

export function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("invisible-card");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("animate-slide-up");
            observer.disconnect();
          }, delay);
        }
      },
      { threshold: 0.2 }, // когда 10% карточки видно
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
