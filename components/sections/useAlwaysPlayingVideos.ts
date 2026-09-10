import { useEffect, type RefObject } from "react";

export function useAlwaysPlayingVideos(viewportRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const videos = Array.from(viewport.querySelectorAll("video"));
    let disposed = false;
    let retryFrame = 0;
    let retryTimer = 0;

    const playAll = () => {
      cancelAnimationFrame(retryFrame);
      if (disposed || document.hidden) return;
      videos.forEach(video => {
        video.controls = false;
        video.muted = true;
        if (video.paused) void video.play().catch(() => undefined);
      });
    };
    const keepPlaying = () => {
      if (disposed || document.hidden) return;
      retryFrame = requestAnimationFrame(playAll);
    };
    const visibility = () => {
      if (!document.hidden) playAll();
    };

    videos.forEach(video => {
      video.addEventListener("loadeddata", playAll);
      video.addEventListener("canplay", playAll);
      video.addEventListener("pause", keepPlaying);
      video.addEventListener("ended", keepPlaying);
    });
    document.addEventListener("visibilitychange", visibility);
    document.addEventListener("pointerdown", playAll, { passive: true });
    document.addEventListener("touchstart", playAll, { passive: true });
    retryTimer = window.setInterval(playAll, 1200);
    playAll();

    return () => {
      disposed = true;
      cancelAnimationFrame(retryFrame);
      window.clearInterval(retryTimer);
      document.removeEventListener("visibilitychange", visibility);
      document.removeEventListener("pointerdown", playAll);
      document.removeEventListener("touchstart", playAll);
      videos.forEach(video => {
        video.removeEventListener("loadeddata", playAll);
        video.removeEventListener("canplay", playAll);
        video.removeEventListener("pause", keepPlaying);
        video.removeEventListener("ended", keepPlaying);
      });
    };
  }, [viewportRef]);
}
