import react from "@vitejs/plugin-react";
import { resolve } from "path";
import PurgeIcons from "vite-plugin-purge-icons";
import ssr from "vite-plugin-ssr/plugin";
import WindiCSS from "vite-plugin-windicss";
const { plugin: mdPlugin, Mode } = require("vite-plugin-markdown");

export default {
  resolve: {
    alias: {
      "#root": __dirname,
      "@content": resolve(__dirname, "content"),
    },
  },
  plugins: [
    react(),
    ssr(),
    WindiCSS(),
    PurgeIcons(),
    mdPlugin({ mode: [Mode.HTML, Mode.REACT] }),
  ],
};
