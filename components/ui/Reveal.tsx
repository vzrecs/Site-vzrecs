"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  amount?: number;
};

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
};

type RevealItemProps = {
  children: ReactNode;
  className?: string;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.86,
  y = 34,
  x = 0,
  scale = 1,
  blur = 8,
  amount = 0.28
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y,
              x,
              scale,
              filter: `blur(${blur}px)`
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)"
      }}
      viewport={{ once: true, amount, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: easeOut
      }}
      className={className}
      style={{ willChange: shouldReduceMotion ? "auto" : "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className = "",
  delay = 0,
  stagger = 0.08,
  amount = 0.24
}: RevealGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: shouldReduceMotion ? 0 : delay,
            staggerChildren: shouldReduceMotion ? 0 : stagger
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: RevealItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion
          ? {}
          : {
              opacity: 0,
              y: 28,
              filter: "blur(7px)"
            },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: shouldReduceMotion ? 0.01 : 0.76,
            ease: easeOut
          }
        }
      }}
      className={className}
      style={{ willChange: shouldReduceMotion ? "auto" : "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}
