import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  aspect?: "wide" | "vertical" | "reel";
};

export function MediaFrame({
  src,
  alt,
  priority = false,
  aspect = "wide"
}: MediaFrameProps) {
  const aspectClass =
    aspect === "reel"
      ? "aspect-[9/16]"
      : aspect === "vertical"
        ? "aspect-[4/5]"
        : "aspect-[16/10]";

  return (
    <div
      className={`relative overflow-hidden rounded-card border border-white/10 bg-ink-panel shadow-cinematic ${aspectClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 520px, 92vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </div>
  );
}
