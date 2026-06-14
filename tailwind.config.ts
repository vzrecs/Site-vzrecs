import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          black: "#050505",
          graphite: "#111111",
          panel: "#1A1A1A",
          line: "rgba(255,255,255,0.1)",
          muted: "rgba(255,255,255,0.86)"
        },
        accent: {
          red: "#FF2323"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Inter", "Arial", "sans-serif"]
      },
      maxWidth: {
        site: "1080px"
      },
      borderRadius: {
        card: "8px"
      },
      boxShadow: {
        cinematic: "0 24px 80px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "radial-hero":
          "radial-gradient(circle at center, rgba(5,5,5,0.1), rgba(5,5,5,0.82) 66%, #050505 100%)"
      }
    }
  },
  plugins: []
};

export default config;
