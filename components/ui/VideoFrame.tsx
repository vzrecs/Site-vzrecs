"use client";

import { useEffect, useRef } from "react";

type VideoFrameProps = {
  src: string;
  aspect?: "vertical" | "wide";
};

export function VideoFrame({ src, aspect = "vertical" }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const aspectClass = aspect === "vertical" ? "aspect-[9/16]" : "aspect-[16/10]";
  const widthClass = aspect === "vertical" ? "mx-auto w-full max-w-[320px]" : "w-full";

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.load();
    void video.play().catch(() => undefined);
  }, []);

  return (
    <div className={`${widthClass} overflow-hidden rounded-[12px]`}>
      <video
        ref={videoRef}
        className={`${aspectClass} w-full object-cover`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
