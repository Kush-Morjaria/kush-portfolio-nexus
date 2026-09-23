import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { copyFileSync } from "fs";
import path from "path";

// GitHub Pages has no SPA fallback: it serves 404.html for unknown paths, so make that the app too.
// Without this, refreshing or sharing /projects/ark gives GitHub's own 404 page.
const spaFallback = (): Plugin => ({
  name: "spa-fallback-404",
  apply: "build",
  closeBundle() {
    copyFileSync(path.resolve(__dirname, "dist/index.html"), path.resolve(__dirname, "dist/404.html"));
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kush-portfolio-nexus/", // GitHub Pages serves the site from /<repo>/
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
