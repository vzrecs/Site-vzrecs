"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/lib/site-content";
import styles from "./FinalCtaSection.module.css";

const ease = [0.76, 0, 0.24, 1] as const;

function ArrowIcon() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      <svg viewBox="0 0 20 20" focusable="false">
        <path d="M5 15 15 5M7 5h8v8" />
      </svg>
    </span>
  );
}

export function FinalCtaSection() {
  const { finalCta, whatsappUrl } = siteContent;
  const reduced = !!useReducedMotion();

  return (
    <motion.section
      id="contato"
      className={styles.section}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: false, amount: 0.24 }}
    >
      <motion.div
        className={styles.ambient}
        aria-hidden="true"
        variants={{
          hidden: { x: 110, opacity: 0.18 },
          visible: { x: 0, opacity: 1 }
        }}
        transition={{ duration: reduced ? 0.01 : 1.15, ease }}
      />
      <div className={styles.inner}>
        <div className={styles.titleMask}>
          <motion.h2
            variants={{
              hidden: { opacity: 0, scale: 0.975, filter: "blur(16px)" },
              visible: { opacity: 1, scale: 1, filter: "blur(0px)" }
            }}
            transition={{ duration: reduced ? 0.01 : 0.82, ease, delay: reduced ? 0 : 0.08 }}
          >
            {finalCta.title.map(line => (
              <span key={line} className={styles.titleLine}>{line}</span>
            ))}
          </motion.h2>
        </div>
        <motion.div
          className={styles.actionReveal}
          variants={{
            hidden: { y: 28, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          transition={{ duration: reduced ? 0.01 : 0.72, ease, delay: reduced ? 0 : 0.36 }}
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <span>{finalCta.cta}</span>
            <ArrowIcon />
          </Link>
          <button
            type="button"
            className={styles.button}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span>Voltar ao topo</span>
            <ArrowIcon />
          </button>
        </motion.div>
        <motion.div
          className={styles.socials}
          aria-label="Redes sociais"
          variants={{
            hidden: { y: 16, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          transition={{ duration: reduced ? 0.01 : 0.55, ease, delay: reduced ? 0 : 0.5 }}
        >
          <Image
            src="/assets/icons/social/instagram-brand.png"
            alt="Instagram"
            width={114}
            height={114}
            className={styles.socialIcon}
          />
          <Image
            src="/assets/icons/social/youtube-brand.png"
            alt="YouTube"
            width={124}
            height={95}
            className={`${styles.socialIcon} ${styles.youtubeIcon}`}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
