"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { siteContent } from "@/lib/site-content";
import { Montserrat } from "next/font/google";
import styles from "./PositioningSection.module.css";
import { ContentVideoCarousel } from "./ContentVideoCarousel";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-positioning",
  display: "swap"
});

const paragraphHighlights = [
  ["conteúdos"],
  ["qualidade", "reels profissionais"],
  ["retenção", "posicionamento", "pessoas certas"]
];

type HighlightRange = { start: number; end: number; circled: boolean };

// Intersect the original phrase with each visual line, including wrapped phrases.
function highlightedText(text: string, ranges: HighlightRange[], offset = 0) {
  const fragments = [];
  let cursor = 0;
  for (const range of ranges) {
    const start = Math.max(0, range.start - offset);
    const end = Math.min(text.length, range.end - offset);
    if (start >= end) continue;
    fragments.push(text.slice(cursor, start));
    fragments.push(
      <span key={range.start} className={range.circled ? styles.handCircle : styles.handUnderline}>
        {text.slice(start, end)}
        <svg className={styles.handMark} viewBox={range.circled ? "0 0 300 70" : "0 0 300 16"} preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d={range.circled
            ? "M265 10 C212 0 101 1 39 14 C-12 25 -5 50 49 60 C110 72 234 67 278 51 C314 38 296 17 249 10 C195 2 95 5 41 17"
            : "M3 7 Q70 3 146 7 T297 5"} />
        </svg>
      </span>
    );
    cursor = end;
  }
  fragments.push(text.slice(cursor));
  return fragments;
}

function ScrollLine({ text, index, count, progress, ranges, offset }: {
  text: string;
  index: number;
  count: number;
  progress: MotionValue<number>;
  ranges: HighlightRange[];
  offset: number;
}) {
  const start = (index / Math.max(count, 1)) * 0.3;
  const end = start + 0.2;
  const y = useTransform(progress, [start, end], ["105%", "0%"]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const filter = useTransform(progress, [start, end], ["blur(5px)", "blur(0px)"]);

  return (
    <span className={styles.lineMask}>
      <motion.span
        className={`${styles.line} ${index < count - 1 ? styles.justifiedLine : ""}`}
        style={{ y, opacity, filter }}
      >
        {highlightedText(text, ranges, offset)}
      </motion.span>
    </span>
  );
}

function ScrollParagraph({ text, className = "", reduced, highlights }: {
  text: string;
  className?: string;
  reduced: boolean;
  highlights: string[];
}) {
  const ranges = highlights.map(phrase => ({ start: text.indexOf(phrase), end: text.indexOf(phrase) + phrase.length, circled: phrase === "retenção" }))
    .filter(range => range.start >= 0).sort((a, b) => a.start - b.start);
  const ref = useRef<HTMLParagraphElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 94%", "center 52%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 240, damping: 34, mass: 0.22 });

  useLayoutEffect(() => {
    const measure = measureRef.current;
    if (!measure || reduced) return;
    let disposed = false;
    const measureLines = () => {
      if (disposed) return;
      const next: string[] = [];
      let lastTop = -Infinity;
      for (const word of Array.from(measure.children) as HTMLElement[]) {
        if (Math.abs(word.offsetTop - lastTop) > 2) {
          next.push(word.textContent ?? "");
          lastTop = word.offsetTop;
        } else {
          next[next.length - 1] += ` ${word.textContent}`;
        }
      }
      setLines(previous => previous.join("\n") === next.join("\n") ? previous : next);
    };
    measureLines();
    const observer = new ResizeObserver(measureLines);
    observer.observe(measure);
    void document.fonts.ready.then(measureLines);
    return () => { disposed = true; observer.disconnect(); };
  }, [text, reduced]);

  const animated = !reduced && lines.length > 0;
  return (
    <p ref={ref} className={`${styles.paragraph} ${className}`}>
      <span className="sr-only">{text}</span>
      {/* The original wrapping reserves the exact height, including during font loading/resizing. */}
      <span ref={measureRef} aria-hidden="true" className={styles.measure} style={{ visibility: animated ? "hidden" : "visible" }}>
        {Array.from(text.matchAll(/\S+/g)).map(match => <Fragment key={match.index}><span className={styles.word}>{highlightedText(match[0], ranges, match.index)}</span>{" "}</Fragment>)}
      </span>
      {animated && (
        <span aria-hidden="true" className={styles.revealedLines}>
          {lines.map((line, index) => <ScrollLine key={`${index}-${line}`} text={line} index={index} count={lines.length} progress={progress} ranges={ranges} offset={lines.slice(0, index).reduce((length, previous) => length + previous.length + 1, 0)} />)}
        </span>
      )}
    </p>
  );
}

export function PositioningSection() {
  const { positioning } = siteContent;
  const ref = useRef<HTMLElement>(null);
  const reduced = !!useReducedMotion();
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 30, mass: 0.35 });
  const videoY = useTransform(progress, [0, 1], compact ? [-18, 42] : [-40, 100]);
  const textY = useTransform(progress, [0, 1], compact ? [24, -36] : [50, -95]);

  return (
    <section ref={ref} id="posicionamento" aria-label="Conteúdo" className={`${styles.section} ${montserrat.variable}`}>
      <div className={styles.scene}>
        <motion.div className={styles.videoLayer} style={{ y: reduced ? 0 : videoY }} aria-hidden="true">
          <ContentVideoCarousel reduced={reduced} />
        </motion.div>
        <motion.div className={styles.textLayer} style={{ y: reduced ? 0 : textY }}>
          <div className={styles.copy}>
            {positioning.paragraphs.map((paragraph, index) => (
              <ScrollParagraph key={paragraph} text={paragraph} reduced={reduced} highlights={paragraphHighlights[index]} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
