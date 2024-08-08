import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        raleway: ["Raleway", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", 'sans-serif'],
      },
      colors: {
        'dark': '#1b212e',
        'primary': '#d47006',
        'alt': '#14303a',
      },
      animation: {
        blink: 'blink-shadow 1.5s infinite',
      },
      keyframes: {
        'blink-shadow': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(210, 80, 51, 0)', 
          },
          '50%': {
            boxShadow: '0 0 15px 5px rgba(210, 80, 51, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
