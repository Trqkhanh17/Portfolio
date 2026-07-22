"use client";

import { useEffect } from "react";

export function usePortfolioEffects(language: string) {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-menu a"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const pointer = document.querySelector<HTMLElement>(".pointer-stamp");
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    let pointerFrame = 0;

    root.classList.add("motion-ready");

    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", progress.toString());
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6%" });

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
      if (reducedMotion.matches) item.classList.add("is-visible");
      else revealObserver.observe(item);
    });

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => link.classList.toggle("is-current", link.hash === `#${visible.target.id}`));
    }, { threshold: [0.2, 0.45], rootMargin: "-18% 0px -55%" });
    sections.forEach((section) => sectionObserver.observe(section));

    const movePointer = (event: PointerEvent) => {
      if (!pointer || !finePointer.matches) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        pointer.style.setProperty("--pointer-x", `${event.clientX}px`);
        pointer.style.setProperty("--pointer-y", `${event.clientY}px`);
        pointer.classList.add("is-active");
      });
    };
    const setPointerMode = (event: PointerEvent) => {
      if (!pointer) return;
      const target = event.target as HTMLElement;
      pointer.classList.toggle("is-link", Boolean(target.closest("a, button, [data-tilt]")));
    };
    window.addEventListener("pointermove", movePointer, { passive: true });
    document.addEventListener("pointerover", setPointerMode, { passive: true });

    const tiltCleanups = tiltItems.map((item) => {
      const move = (event: PointerEvent) => {
        if (!finePointer.matches || reducedMotion.matches) return;
        const bounds = item.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        item.style.setProperty("--tilt-x", `${(-y * 4.5).toFixed(2)}deg`);
        item.style.setProperty("--tilt-y", `${(x * 5.5).toFixed(2)}deg`);
      };
      const reset = () => {
        item.style.setProperty("--tilt-x", "0deg");
        item.style.setProperty("--tilt-y", "0deg");
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", reset);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", reset);
      };
    });

    return () => {
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("pointermove", movePointer);
      document.removeEventListener("pointerover", setPointerMode);
      cancelAnimationFrame(pointerFrame);
      revealObserver.disconnect();
      sectionObserver.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}

