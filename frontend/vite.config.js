import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_DEV_PORTAL_BE || env.VITE_LOCAL_BE,
          changeOrigin: true,
        },
        "/uploads": {
          target: env.VITE_DEV_PORTAL_BE || env.VITE_LOCAL_BE,
          changeOrigin: true,
        },
      },
    },
  };
});
