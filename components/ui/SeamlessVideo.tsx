"use client";

import { useEffect, useRef } from "react";

type SeamlessVideoProps = {
  src: string;
  className?: string;
  loopStart?: number;
  loopBeforeEnd?: number;
  preload?: "auto" | "metadata" | "none";
};

export function SeamlessVideo({
  src,
  className = "",
  loopStart = 0.18,
  loopBeforeEnd = 0.55,
  preload = "auto"
}: SeamlessVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    let frame = 0;

    const keepLoopClean = () => {
      if (video.duration && video.duration - video.currentTime <= loopBeforeEnd) {
        video.currentTime = loopStart;
        void video.play().catch(() => undefined);
      }

      frame = window.requestAnimationFrame(keepLoopClean);
    };

    video.muted = true;
    video.load();
    void video.play().catch(() => undefined);
    frame = window.requestAnimationFrame(keepLoopClean);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [src, loopStart, loopBeforeEnd]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      playsInline
      preload={preload}
      onLoadedMetadata={(event) => {
        event.currentTarget.currentTime = loopStart;
      }}
      onEnded={(event) => {
        event.currentTarget.currentTime = loopStart;
        void event.currentTarget.play();
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
