import { useEffect, useState, useRef } from "react";

export const useInView = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect(); // triggerOnce behavior
            }
        }, options);

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return { ref, inView };
};
