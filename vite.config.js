import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: "https://zenquotes.io/api/random",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }

  },
  build: {
    outDir: "../dist",
    proxy: {
      '/api': {
        target: "https://zenquotes.io/api/random",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        inspiration: resolve(__dirname, "src/inspiration/index.html"),
        roles: resolve(__dirname, "src/roles/index.html"),
        review: resolve(__dirname, "src/review/index.html"),
        proxy: {
          '/api': {
            target: "https://zenquotes.io/api/random",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          }
        },
      },
    },
  },
});
