import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://task-management-backend-3gajlaoau-kavya-vemulas-projects.vercel.app",
        changeOrigin: true,
        secure: true, // Change this to true for HTTPS
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove `/api` prefix
      },
    },
  },
});
