/*
 * Rebuild the mobile derivatives without changing the desktop originals.
 * Usage: node scripts/optimize-content-media.cjs [path/to/ffmpeg]
 * Requires FFmpeg with libx264; sharp is already installed with Next.js.
 */
const { spawnSync } = require("node:child_process");
const { statSync } = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const ffmpeg = process.argv[2] || process.env.FFMPEG_PATH || "ffmpeg";
const directory = path.resolve(__dirname, "../public/assets/videos/conteudo");
const ids = ["01", "03", "04", "05"];

async function main() {
  for (const id of ids) {
    const original = path.join(directory, `conteudo-${id}-hq.mp4`);
    const mobile = path.join(directory, `conteudo-${id}-mobile.mp4`);
    const poster = path.join(directory, `conteudo-${id}.jpg`);
    const lightweightPoster = path.join(directory, `conteudo-${id}.webp`);
    const result = spawnSync(ffmpeg, [
      "-hide_banner", "-loglevel", "error", "-y", "-i", original,
      "-map", "0:v:0", "-an", "-sn", "-dn", "-map_metadata", "-1",
      "-vf", "scale=540:-2:flags=lanczos,fps=30000/1001",
      "-c:v", "libx264", "-preset", "slow", "-crf", "22",
      "-maxrate", "1800k", "-bufsize", "3600k",
      "-pix_fmt", "yuv420p", "-profile:v", "high", "-level:v", "3.1",
      "-g", "60", "-keyint_min", "30", "-movflags", "+faststart",
      mobile,
    ], { stdio: "inherit", windowsHide: true });
    if (result.error) throw result.error;
    if (result.status !== 0) throw new Error(`FFmpeg failed for ${original}`);

    await sharp(poster)
      .resize({ width: 540, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(lightweightPoster);

    console.log(JSON.stringify({
      id,
      originalBytes: statSync(original).size,
      mobileBytes: statSync(mobile).size,
      originalPosterBytes: statSync(poster).size,
      webpBytes: statSync(lightweightPoster).size,
    }));
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
