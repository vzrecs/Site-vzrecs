import { useEffect, type RefObject } from "react";
import styles from "./ContentVideoCarousel.module.css";

export function useCarouselMotion(viewportRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const viewport = viewportRef.current;
    const frame = viewport?.parentElement;
    const track = viewport?.querySelector<HTMLElement>(`.${styles.track}`);
    const sequence = track?.firstElementChild as HTMLElement | null;
    if (!viewport || !frame || !track || !sequence) return;

    const mobile = matchMedia("(max-width: 767px)");
    let distance = 0;
    let position = 0;
    let speed = 0;
    let animationFrame = 0;
    let lastTime = 0;

    const paint = () => {
      position = distance ? ((position % distance) + distance) % distance : 0;
      track.style.transform = `translate3d(${-position}px, 0, 0)`;
    };
    const stop = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lastTime = 0;
    };
    const tick = (time: number) => {
      if (lastTime) position += Math.min(time - lastTime, 50) * speed / 1000;
      lastTime = time;
      paint();
      animationFrame = requestAnimationFrame(tick);
    };
    const updateMotion = () => {
      stop();
      track.style.animationPlayState = document.hidden ? "paused" : "running";
      if (mobile.matches && !document.hidden) {
        animationFrame = requestAnimationFrame(tick);
      }
    };
    const measure = () => {
      const oldDistance = distance;
      const gap = mobile.matches ? 14 : 24;
      const cardWidth = mobile.matches ? viewport.clientWidth - 16 : (viewport.clientWidth - 2 * gap) / 2.6;
      const step = cardWidth + gap;
      speed = frame.clientWidth / 24 * (mobile.matches ? 2.15 : 1.25);
      viewport.style.setProperty("--card-width", `${cardWidth}px`);
      viewport.style.setProperty("--card-height", `${cardWidth * 4 / 3}px`);
      viewport.style.setProperty("--gap", `${gap}px`);
      viewport.style.setProperty("--entry-offset", `${step * 0.1}px`);
      distance = step * Number(viewport.dataset.carouselCount ?? 0);
      viewport.style.setProperty("--distance", `${distance}px`);
      viewport.style.setProperty("--duration", `${distance / speed}s`);
      if (oldDistance) position *= distance / oldDistance;
      if (mobile.matches) paint();
      else track.style.removeProperty("transform");
      updateMotion();
    };

    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(viewport);
    resize.observe(frame);
    mobile.addEventListener("change", measure);
    document.addEventListener("visibilitychange", updateMotion);
    return () => {
      stop();
      resize.disconnect();
      mobile.removeEventListener("change", measure);
      document.removeEventListener("visibilitychange", updateMotion);
    };
  }, [viewportRef]);
}
