import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Backend Base URL
const BACKEND_URL = "https://task-management-six-neon.vercel.app";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "/api/v1": {
        target: BACKEND_URL,
        changeOrigin: true,
        secure: true, // Use true since backend is deployed on HTTPS
      },
    },
  },
});
