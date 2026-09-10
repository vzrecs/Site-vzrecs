"use client";

import { useEffect, useRef, useState } from "react";
import { useCarouselMotion } from "./useCarouselMotion";
import { useAlwaysPlayingVideos } from "./useAlwaysPlayingVideos";
import styles from "./ContentVideoCarousel.module.css";

// Desktop keeps the five individual videos in their folder order.
const videos = ["novo-01", "novo-02", "novo-03", "novo-04", "novo-05"];
const renderedVideos = [...videos, videos[0]];

function DesktopCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  useCarouselMotion(viewportRef);
  useAlwaysPlayingVideos(viewportRef);

  return (
    <div ref={viewportRef} className={styles.viewport} data-video-carousel data-carousel-count={videos.length} aria-hidden="true">
      <div className={styles.track}>
        <div className={styles.sequence}>
          {renderedVideos.map((file, index) => (
            <div key={`${file}-${index}`} className={styles.slide} style={{ backgroundImage: `url(/assets/videos/conteudo-novos/${file}.webp)` }}>
              <video
                className={styles.video}
                src={`/assets/videos/conteudo-novos/${file}-hq.mp4`}
                poster={`/assets/videos/conteudo-novos/${file}.webp`}
                width={720} height={1280}
                autoPlay loop muted playsInline controls={false} controlsList="nodownload nofullscreen noplaybackrate" preload="auto" disablePictureInPicture disableRemotePlayback
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileShowcaseVideo() {
  const videoRef = useRef<HTMLDivElement>(null);
  useAlwaysPlayingVideos(videoRef);

  return (
    <div ref={videoRef} className={styles.mobileAsset} data-mobile-showcase aria-hidden="true">
      <video
        className={styles.video}
        src="/assets/videos/conteudo-novos/o-video-mobile.mp4"
        poster="/assets/videos/conteudo-novos/o-video-mobile.webp"
        width={720} height={1280}
        autoPlay loop muted playsInline controls={false} controlsList="nodownload nofullscreen noplaybackrate" preload="auto" disablePictureInPicture disableRemotePlayback
      />
    </div>
  );
}

export function ContentVideoCarousel() {
  const [mobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const query = matchMedia("(max-width: 767px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (mobile === null) return <div className={styles.mediaPlaceholder} aria-hidden="true" />;
  return mobile ? <MobileShowcaseVideo /> : <DesktopCarousel />;
}
