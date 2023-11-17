import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 8004
  }
});
