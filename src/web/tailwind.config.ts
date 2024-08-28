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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dodger-blue': {
          '50': '#f0f8fe',
          '100': '#deeefb',
          '200': '#c4e3f9',
          '300': '#9bd1f5',
          '400': '#6cb8ee',
          '500': '#3d94e6',
          '600': '#3480dc',
          '700': '#2b6aca',
          '800': '#2957a4',
          '900': '#264a82',
          '950': '#1c2f4f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
