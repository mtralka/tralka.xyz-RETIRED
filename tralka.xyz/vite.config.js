import react from "@vitejs/plugin-react";
import PurgeIcons from "vite-plugin-purge-icons";
import ssr from "vite-plugin-ssr/plugin";
import WindiCSS from "vite-plugin-windicss";

export default {
  plugins: [react(), ssr(), WindiCSS(), PurgeIcons()],
};
