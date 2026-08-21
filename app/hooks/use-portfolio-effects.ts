"use client";

import { useEffect } from "react";

export function usePortfolioEffects(language: string) {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-menu a"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));

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

    return () => {
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
      window.removeEventListener("scroll", updateScrollProgress);
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);
}

