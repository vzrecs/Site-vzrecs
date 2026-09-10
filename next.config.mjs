import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/**
 * @param {string} phase
 * @returns {import('next').NextConfig}
 */
const nextConfig = (phase) => ({
  // Keep a production build from replacing assets used by the running dev server.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  images: {
    formats: ["image/avif", "image/webp"]
  }
});

export default nextConfig;
