import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_REACT_APP_BOT_ID": JSON.stringify(
      process.env.VITE_REACT_APP_BOT_ID
    ),
    "process.env.VITE_REACT_APP_CLIENT_ID": JSON.stringify(
      process.env.VITE_REACT_APP_CLIENT_ID
    ),
  },
});
