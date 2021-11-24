import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: true,
  extract: {
    include: ["**/*.{jsx,tsx,css,js}"],
    exclude: ["node_modules", ".git"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "Montserrat", "Graphik", "sans-serif"],
      },
    },
  },
  plugins: [require("windicss/plugin/typography")],
});
