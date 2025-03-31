import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Backend Base URL

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
