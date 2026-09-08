"use client";

import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import styles from "./AboutScrollText.module.css";

function ScrollLine({ text, index, count, progress }: {
  text: string;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const start = (index / Math.max(count, 1)) * .3;
  const end = start + .22;
  const y = useTransform(progress, [start, end], ["105%", "0%"]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const filter = useTransform(progress, [start, end], ["blur(5px)", "blur(0px)"]);

  return (
    <span className={styles.lineMask}>
      <motion.span
        className={`${styles.line} ${index < count - 1 ? styles.justifiedLine : ""}`}
        style={{ y, opacity, filter }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function ScrollParagraph({ text }: { text: string }) {
  const reduced = !!useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 94%", "start 54%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 240, damping: 34, mass: .24 });

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
    <p ref={ref} className={styles.paragraph}>
      <span className="sr-only">{text}</span>
      <span ref={measureRef} aria-hidden="true" className={styles.measure} style={{ visibility: animated ? "hidden" : "visible" }}>
        {Array.from(text.matchAll(/\S+/g)).map(match => (
          <Fragment key={match.index}><span className={styles.word}>{match[0]}</span>{" "}</Fragment>
        ))}
      </span>
      {animated && (
        <span aria-hidden="true" className={styles.revealedLines}>
          {lines.map((line, index) => <ScrollLine key={`${index}-${line}`} text={line} index={index} count={lines.length} progress={progress} />)}
        </span>
      )}
    </p>
  );
}

export function AboutScrollText({ paragraphs }: { paragraphs: readonly string[] }) {
  return <>{paragraphs.map(paragraph => <ScrollParagraph key={paragraph} text={paragraph} />)}</>;
}

export function AboutScrollTitle({ text }: { text: string }) {
  const reduced = !!useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 96%", "start 64%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 34, mass: .22 });
  const y = useTransform(progress, [0, .62], ["72%", "0%"]);
  const opacity = useTransform(progress, [0, .62], [0, 1]);
  const filter = useTransform(progress, [0, .62], ["blur(8px)", "blur(0px)"]);

  return (
    <span className={styles.titleMask}>
      <motion.h2 ref={ref} style={reduced ? undefined : { y, opacity, filter }}>{text}</motion.h2>
    </span>
  );
}
