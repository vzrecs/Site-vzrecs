"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ContentVideoCarousel.module.css";

// Selected files from 04-Identidade visual/05-Novos/Vídeos, in display order.
const videos = ["conteudo-01", "conteudo-03", "conteudo-05", "conteudo-04"];

export function ContentVideoCarousel({ reduced }: { reduced: boolean }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [staticMode, setStaticMode] = useState(reduced);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setStaticMode(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const frame = viewport?.parentElement;
    if (!viewport || !frame) return;
    const measure = () => {
      const gap = window.innerWidth < 768 ? 14 : 24;
      const desktop = window.innerWidth >= 768;
      // Desktop cards are larger than the original carousel while preserving
      // room for two complete cards and the entering edge of the next one.
      const cardWidth = desktop
        ? (viewport.clientWidth - 2 * gap) / 2.6
        : viewport.clientWidth;
      const step = cardWidth + gap;
      // The previous carousel moved one original frame width every 24 seconds.
      const speedMultiplier = desktop ? 1.25 : 2.15;
      const pixelsPerSecond = frame.clientWidth / 24 * speedMultiplier;
      viewport.style.setProperty("--card-width", `${cardWidth}px`);
      viewport.style.setProperty("--card-height", `${cardWidth * 1440 / 1080}px`);
      viewport.style.setProperty("--gap", `${gap}px`);
      viewport.style.setProperty("--entry-offset", `${step * 0.1}px`);
      const distance = viewport.querySelector(`.${styles.sequence}`)?.getBoundingClientRect().width ?? videos.length * step;
      viewport.style.setProperty("--distance", `${distance}px`);
      viewport.style.setProperty("--duration", `${distance / pixelsPerSecond}s`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [staticMode]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || staticMode) return;

    const videoElements = Array.from(viewport.querySelectorAll("video"));
    const playbackObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.muted = true;
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      {
        root: viewport,
        // Start decoding shortly before a card reaches the visible window.
        rootMargin: "0px 18%",
        threshold: 0.01
      }
    );

    videoElements.forEach(video => playbackObserver.observe(video));
    return () => playbackObserver.disconnect();
  }, [staticMode]);

  return (
    <div ref={viewportRef} className={styles.viewport} aria-hidden="true">
      <div className={styles.fallback}>
        {videos.slice(0, 3).map(file => (
          <Image key={file} src={`/assets/videos/conteudo/${file}.jpg`} alt="" width={720} height={920} sizes="33vw" />
        ))}
      </div>
      {!staticMode && (
        <div className={styles.track}>
          {[0, 1].map(copy => (
            <div key={copy} className={styles.sequence}>
              {videos.map(file => (
                <video
                  key={file}
                  className={styles.slide}
                  src={`/assets/videos/conteudo/${file}-hq.mp4`}
                  poster={`/assets/videos/conteudo/${file}.jpg`}
                  loop muted playsInline preload="metadata" disablePictureInPicture
                  onLoadedData={event => { void event.currentTarget.play().catch(() => undefined); }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
