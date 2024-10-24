/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkForestGreen: "#2F3A2F",
        forestGreen: "#2F682E",
        primaryBrown: "#8B5A2B",
      },
    },
  },
  plugins: [],
};
