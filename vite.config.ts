import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { copyFileSync, mkdirSync } from "fs";
import path from "path";
import { projects } from "./src/data/profile";

// GitHub Pages has no SPA fallback, so the built app is copied to every path it should answer:
// - projects/<slug>/index.html for each project, so project pages return 200 (link previews and search
//   engines treat a 404 as "not found", even though the page renders);
// - 404.html, so any other path still loads the app and shows its own not-found page.
const staticRoutes = (): Plugin => ({
  name: "static-routes",
  apply: "build",
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    const index = path.join(dist, "index.html");
    for (const { slug } of projects) {
      const dir = path.join(dist, "projects", slug);
      mkdirSync(dir, { recursive: true });
      copyFileSync(index, path.join(dir, "index.html"));
    }
    copyFileSync(index, path.join(dist, "404.html"));
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kush-portfolio-nexus/", // GitHub Pages serves the site from /<repo>/
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), staticRoutes()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
