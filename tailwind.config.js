/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 90s linear infinite",
        marquee2: "marquee2 100s linear infinite",
        marqueeInternal1: "marqueeInternal1 60s linear infinite",
        marqueeInternal2: "marqueeInternal2 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-180%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-160%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-160%)" },
        },
        marqueeInternal1: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeInternal2: {
          "0%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-20%)" },
        },
      },
    },
  },
  plugins: [],
};
