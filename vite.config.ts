import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function siteUrl(): string {
  const fromEnv = (process.env.VITE_SITE_URL || process.env.SITE_URL || "").replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "";
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const origin = siteUrl();
  const ogImage = origin ? `${origin}/og-image.png` : "/og-image.png";

  return {
    cacheDir: path.resolve(__dirname, ".vite"),
    server: {
      host: "::",
      port: 8080,
      proxy: {
        "/api": {
          target: "http://localhost:8787",
          changeOrigin: true,
        },
      },
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: "envision-html-meta",
        transformIndexHtml(html) {
          return html
            .replaceAll("%OG_IMAGE_URL%", ogImage)
            .replaceAll("%SITE_URL%", origin || "/");
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
  };
});
