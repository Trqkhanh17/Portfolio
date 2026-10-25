import type { Language, portfolioContent } from "@/app/constants/portfolio-content";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  t: (typeof portfolioContent)[Language];
}

export function Marquee({ t }: MarqueeProps) {
  return (
    <div className={styles.marquee} aria-label="Software engineering disciplines">
      <div className={styles.marqueeTrack}>
        <span>{t.marquee}</span>
        <span aria-hidden="true">{t.marquee}</span>
      </div>
    </div>
  );
}
