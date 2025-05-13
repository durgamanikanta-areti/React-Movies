import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://react-movies-backend-51pu.onrender.com",
      "/uploads/": "https://react-movies-backend-51pu.onrender.com",
    },
  },
});
