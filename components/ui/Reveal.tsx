"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

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

type RevealState = "idle" | "hidden" | "visible";

function useReliableInView(amount: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const requiredRatio = Math.min(Math.max(amount, 0.05), 0.5);
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const visiblePixels = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const visibleRatio = visiblePixels / Math.max(Math.min(rect.height, viewportHeight), 1);

    if (visiblePixels > 0 && visibleRatio >= requiredRatio) {
      setState("visible");
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: requiredRatio, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [amount]);

  return { ref, state };
}

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
  const { ref, state } = useReliableInView(amount);
  const hidden = {
    opacity: 0,
    y,
    x,
    scale,
    filter: `blur(${blur}px)`
  };
  const visible = { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" };

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={shouldReduceMotion || state === "idle" ? visible : state === "visible" ? visible : hidden}
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
  const { ref, state } = useReliableInView(amount);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={shouldReduceMotion || state === "idle" ? "show" : state === "visible" ? "show" : "hidden"}
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
