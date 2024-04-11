import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://zenquotes.io/api/random",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false
      },
    },
  },
  build: {
    outDir: "../dist",
    proxy: {
      "/api": {
        target: "https://zenquotes.io/api/random",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        plan: resolve(__dirname, "src/plan/index.html"),
        roles: resolve(__dirname, "src/roles/index.html"),
        review: resolve(__dirname, "src/review/index.html"),
        register: resolve(__dirname, "src/register/index.html"),
      //   proxy: {
      //     "/api": {
      //       target: "https://zenquotes.io/api/random",
      //       changeOrigin: true,
      //       rewrite: (path) => path.replace(/^\/api/, ""),
      //     },
      //   },
      },
    },
  },
});
