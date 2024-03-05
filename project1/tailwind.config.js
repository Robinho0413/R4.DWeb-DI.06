/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forground: "hsl(var(--forground)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
      }
    },
  },
  plugins: [],
}

