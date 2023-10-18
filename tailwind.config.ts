import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundApp: "#FCFBF8",
        orangeApp: "#F79F4D",
        darkGreenApp: "#2E4233",
        softGreenApp: "#435B49",
        lightGreen: "#A4C9A3",
      },
    },
  },
  plugins: [],
};
export default config;
