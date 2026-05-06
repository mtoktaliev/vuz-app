import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "~app": path.resolve(__dirname, "./src/app"),
      "~entities": path.resolve(__dirname, "./src/entities"),
      "~features": path.resolve(__dirname, "./src/features"),
      "~pages": path.resolve(__dirname, "./src/pages"),
      "~shared": path.resolve(__dirname, "./src/shared"),
      "~widgets": path.resolve(__dirname, "./src/widgets"),
    },
  },
  server: {
    port: 3000,
  },
});
