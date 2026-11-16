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
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-menu a, .nav-contact"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const portrait = document.querySelector<HTMLElement>(".heroPortrait");
    const hero = document.querySelector<HTMLElement>(".hero");
    const canTilt = window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches;
    const compactLayout = window.matchMedia("(max-width: 680px)").matches;
    let scrollFrame = 0;

    root.classList.add("motion-ready");

    const updateScrollProgress = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        root.style.setProperty("--scroll-progress", progress.toString());
        const activationLine = Math.min(window.innerHeight * 0.42, 320);
        const passedSections = sections.filter((section) => section.getBoundingClientRect().top <= activationLine);
        const currentSection = passedSections[passedSections.length - 1];
        navLinks.forEach((link) => {
          const isCurrent = link.hash === (currentSection ? `#${currentSection.id}` : "");
          link.classList.toggle("is-current", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
        if (!reducedMotion.matches) {
          const scrollY = window.scrollY;
          const portraitSpeed = compactLayout ? 0.075 : 0.15;
          const backdropSpeed = compactLayout ? 0.045 : 0.09;
          if (portrait) {
            portrait.style.setProperty("--portrait-parallax", `${-Math.min(scrollY * portraitSpeed, compactLayout ? 52 : 104)}px`);
          }
          hero?.style.setProperty("--hero-parallax", `${-Math.min(scrollY * backdropSpeed, compactLayout ? 32 : 64)}px`);

          sections.forEach((section) => {
            const bounds = section.getBoundingClientRect();
            const sectionCenter = bounds.top + Math.min(bounds.height, window.innerHeight) / 2;
            const distanceFromCenter = window.innerHeight / 2 - sectionCenter;
            const scale = compactLayout ? 0.025 : 0.045;
            const limit = compactLayout ? 24 : 42;
            const parallax = Math.max(-limit, Math.min(limit, distanceFromCenter * scale));
            section.style.setProperty("--section-parallax", `${parallax}px`);
          });
        }
        scrollFrame = 0;
      });
    };

    const handlePortraitPointer = (event: PointerEvent) => {
      if (!portrait || !canTilt) return;
      const bounds = portrait.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      portrait.style.setProperty("--portrait-tilt-x", `${-y * 3}deg`);
      portrait.style.setProperty("--portrait-tilt-y", `${x * 3}deg`);
    };

    const resetPortraitPointer = () => {
      portrait?.style.setProperty("--portrait-tilt-x", "0deg");
      portrait?.style.setProperty("--portrait-tilt-y", "0deg");
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    if (portrait && canTilt) {
      portrait.addEventListener("pointermove", handlePortraitPointer);
      portrait.addEventListener("pointerleave", resetPortraitPointer);
    }

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

    return () => {
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
      window.removeEventListener("scroll", updateScrollProgress);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      portrait?.removeEventListener("pointermove", handlePortraitPointer);
      portrait?.removeEventListener("pointerleave", resetPortraitPointer);
      revealObserver.disconnect();
    };
    // Translated list keys can replace DOM nodes, so observe the new elements
    // after each language change instead of leaving them hidden by motion-ready.
  }, [language]);
}
