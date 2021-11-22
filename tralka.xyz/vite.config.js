import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import WindiCSS from "vite-plugin-windicss";

export default {
  plugins: [react(), ssr(), WindiCSS()],
};
