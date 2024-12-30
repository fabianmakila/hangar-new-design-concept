import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [],
  theme: {
    extend: {},
    colors: {
      gray: colors.zinc,
      accent: colors.blue,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
    },
  },
  plugins: [],
} satisfies Config;
