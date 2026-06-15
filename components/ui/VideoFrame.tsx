"use client";

import { SeamlessVideo } from "@/components/ui/SeamlessVideo";

type VideoFrameProps = {
  src: string;
  aspect?: "vertical" | "wide";
};

export function VideoFrame({ src, aspect = "vertical" }: VideoFrameProps) {
  const aspectClass = aspect === "vertical" ? "aspect-[9/16]" : "aspect-[16/10]";
  const widthClass = aspect === "vertical" ? "mx-auto w-full" : "w-full";

  return (
    <div className={`${widthClass} overflow-hidden rounded-[12px]`}>
      <SeamlessVideo
        src={src}
        className={`${aspectClass} w-full object-cover`}
        loopStart={0.18}
        loopBeforeEnd={0.55}
      />
    </div>
  );
}
