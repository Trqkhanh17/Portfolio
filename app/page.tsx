"use client";

import { useState } from "react";
import { portfolioContent, type Language } from "@/app/constants/portfolio-content";
import { usePortfolioEffects } from "@/app/hooks/use-portfolio-effects";
import {
  Navbar,
  Hero,
  Marquee,
  About,
  Skills,
  Experience,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = portfolioContent[lang];

  usePortfolioEffects(lang);

  return (
    <main id="top">
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero lang={lang} t={t} />
      <Marquee t={t} />
      <About t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
