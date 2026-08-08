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

    let targetX = -100;
    let targetY = -100;
    let dotX = -100;
    let dotY = -100;
    let ringX = -100;
    let ringY = -100;
    let isMoving = false;

    const getCursorElements = () => {
      const container = document.querySelector<HTMLElement>(".custom-cursor");
      const dot = document.querySelector<HTMLElement>(".cursor-dot");
      const ring = document.querySelector<HTMLElement>(".cursor-ring");
      const icon = document.querySelector<HTMLElement>(".cursor-icon");
      return { container, dot, ring, icon };
    };

    const animateCursor = () => {
      if (reducedMotion.matches) return;

      dotX += (targetX - dotX) * 0.45;
      dotY += (targetY - dotY) * 0.45;
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;

      const { dot, ring } = getCursorElements();
      if (dot) {
        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      pointerFrame = requestAnimationFrame(animateCursor);
    };

    const updateCursorState = (x: number, y: number) => {
      const { container, icon } = getCursorElements();
      if (!container || !icon) return;

      const target = document.elementFromPoint(x, y) as HTMLElement | null;
      if (!target) return;

      const isNav = Boolean(target.closest(".site-nav a, .language-switch button, .contact-button"));
      const isButton = Boolean(target.closest("a, button, .repo-links a, .hero-actions a"));
      const isCard = Boolean(target.closest(".project-card, .stack-card, .hero-welcome, .about-portrait"));
      const isNote = Boolean(target.closest(".hero-note, .quick-facts div, .principles div"));

      if (isNav || isButton) {
        if (container.getAttribute("data-state") !== "button") {
          container.setAttribute("data-state", "button");
          icon.textContent = "↗";
        }
      } else if (isCard) {
        if (container.getAttribute("data-state") !== "card") {
          container.setAttribute("data-state", "card");
          icon.textContent = "VIEW";
        }
      } else if (isNote) {
        if (container.getAttribute("data-state") !== "note") {
          container.setAttribute("data-state", "note");
          icon.textContent = "★";
        }
      } else {
        if (container.hasAttribute("data-state")) {
          container.removeAttribute("data-state");
          icon.textContent = "✦";
        }
      }
    };

    const handlePointerMove = (event: MouseEvent | PointerEvent) => {
      if (reducedMotion.matches) return;
      targetX = event.clientX;
      targetY = event.clientY;

      updateCursorState(targetX, targetY);

      const { container } = getCursorElements();
      if (container && !container.classList.contains("is-visible")) {
        container.classList.add("is-visible");
      }

      if (!isMoving) {
        isMoving = true;
        dotX = targetX;
        dotY = targetY;
        ringX = targetX;
        ringY = targetY;
        cancelAnimationFrame(pointerFrame);
        pointerFrame = requestAnimationFrame(animateCursor);
      }
    };

    const handlePointerLeave = () => {
      const { container } = getCursorElements();
      if (container) container.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      cancelAnimationFrame(pointerFrame);
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);
}

