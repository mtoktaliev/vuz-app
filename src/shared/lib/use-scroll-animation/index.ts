import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement>(
  options?: IntersectionObserverInit,
  childSelector?: string, // <-- новый параметр
) {
  const ref = useRef<T>(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (childSelector) {
          // добавляем класс дочерним элементам
          el.querySelectorAll(childSelector).forEach((child) => {
            child.classList.add("is-visible");
          });
        } else {
          el.classList.add("is-visible");
        }
        observer.unobserve(el);
      }
    }, optionsRef.current);

    observer.observe(el);
    return () => observer.disconnect();
  }, [childSelector]);

  return ref;
}
