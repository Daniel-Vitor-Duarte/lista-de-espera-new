import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-suport":
          "linear-gradient(180deg, #F8F7F7 73.75%, #FFF 95.78%)",
        "gradient-suport-mobile":
          "linear-gradient(180deg, #DBDADA 82.71%, #EBEBEB 100%)",
      },
      keyframes: {
        r: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(1 * -120rem))' },
        },
      },
      animation: {
        r: 'r 25s linear infinite',
        rm: 'r 50s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
