"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

export function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className={className} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-bottom"
          >
            <motion.span
              className="inline-block"
              initial={
                shouldReduceMotion
                  ? false
                  : { y: "0.28em", opacity: 0, filter: "blur(4px)" }
              }
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.88,
                delay: shouldReduceMotion ? 0 : 0.06 + index * 0.032,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
