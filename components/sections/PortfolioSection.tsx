"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type FocusEvent } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import styles from "./ProductionAccordion.module.css";

const productionStages = [
  {
    title: "Pré-produção",
    description: "Criamos roteiros alinhados aos objetivos de cada marca e conduzimos a gravação com orientações de entonação, postura e comunicação, ajudando cada pessoa a transmitir mais clareza, naturalidade e autoridade diante da câmera."
  },
  {
    title: "Equipamento próprio",
    description: "Trabalhamos com estrutura própria de câmeras, lentes, drone, iluminação profissional e os demais equipamentos necessários para produzir imagens com qualidade e alto padrão técnico."
  },
  {
    title: "Pós‑produção",
    description: "Realizamos a edição em softwares profissionais, incluindo color grading, sound design e motion design, transformando o material captado em um conteúdo dinâmico, coeso e pronto para gerar impacto."
  }
] as const;

function ProductionItem({
  stage,
  index,
  active,
  reduced,
  hoverCapable,
  setActiveIndex
}: {
  stage: (typeof productionStages)[number];
  index: number;
  active: boolean;
  reduced: boolean;
  hoverCapable: boolean;
  setActiveIndex: (index: number | null) => void;
}) {
  return (
    <motion.button
      type="button"
      className={styles.item}
      data-active={active}
      aria-expanded={active}
      aria-controls={`production-description-${index}`}
      initial={reduced ? false : { opacity: 0, y: 72, scale: 0.92, filter: "blur(8px)" }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.22, margin: "0px 0px -6% 0px" }}
      whileHover={reduced ? undefined : { y: -9, scale: 1.018 }}
      whileTap={reduced ? undefined : { scale: 0.985 }}
      transition={{
        opacity: { duration: 0.56, delay: index * 0.1 },
        filter: { duration: 0.62, delay: index * 0.1 },
        y: { type: "spring", stiffness: 150, damping: 22, delay: index * 0.1 },
        scale: { type: "spring", stiffness: 180, damping: 24, delay: index * 0.1 }
      }}
      onMouseEnter={() => hoverCapable && setActiveIndex(index)}
      onFocus={() => setActiveIndex(index)}
      onClick={() => setActiveIndex(active ? null : index)}
    >
      <span className={styles.fold} aria-hidden="true" />
      <span className={styles.stageNumber} aria-hidden="true">0{index + 1}</span>
      <span className={styles.toggle} aria-hidden="true"><span /></span>
      <span className={styles.content}>
        <span className={styles.itemTitle}>{stage.title}</span>
        <span
          id={`production-description-${index}`}
          className={styles.description}
          aria-hidden={!active}
        >
          {stage.description}
        </span>
      </span>
    </motion.button>
  );
}

function ProductionArrow({ index, reduced }: {
  index: number;
  reduced: boolean;
}) {
  return (
    <motion.span
      className={styles.handArrow}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={reduced ? undefined : { opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.35, delay: 0.16 + index * 0.1 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 40" focusable="false">
        <motion.path
          d="M4 20 L116 20"
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.72, ease: "easeInOut", delay: 0.2 + index * 0.1 }}
        />
      </svg>
    </motion.span>
  );
}

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverCapable, setHoverCapable] = useState(false);
  const reduced = !!useReducedMotion();

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHoverCapable(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const closeWhenFocusLeaves = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setActiveIndex(null);
  };

  return (
    <SectionShell id="videos" className={styles.section} innerClassName="max-w-[1440px]">
      <div className={styles.layout}>
        <motion.div
          className={styles.introduction}
          initial={reduced ? false : { opacity: 0, y: 32, filter: "blur(7px)" }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Da ideia à entrega final</h2>
          <p>
            Cuidamos de cada etapa para transformar ideias em conteúdos profissionais, estratégicos e alinhados aos objetivos de cada empresa.
          </p>
        </motion.div>

        <div
          className={styles.list}
          onMouseLeave={() => hoverCapable && setActiveIndex(null)}
          onBlur={closeWhenFocusLeaves}
        >
          {productionStages.map((stage, index) => {
            const active = activeIndex === index;
            return (
              <div key={stage.title} className={styles.stageGroup}>
                <ProductionItem
                  stage={stage}
                  index={index}
                  active={active}
                  reduced={reduced}
                  hoverCapable={hoverCapable}
                  setActiveIndex={setActiveIndex}
                />
                {index < productionStages.length - 1 && (
                  <ProductionArrow index={index} reduced={reduced} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
