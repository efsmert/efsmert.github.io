import { useEffect, useRef } from "react";

/**
 * Adds a 'visible' class when the element enters the viewport.
 * Works with .reveal and .reveal-stagger CSS classes.
 * Unobserves after first trigger to avoid re-animation.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
    threshold = 0.15
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry && entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
