/* eslint-disable no-undef */
import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT,
    proxy: {
      "/api": {
        // target:
        //   process.env.ENVIRONMENT === "DEV"
        //     ? process.env.API_URL_SANDBOX
        //     : process.env.API_URL,
        target: "https://react-job-app-backend.onrender.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
