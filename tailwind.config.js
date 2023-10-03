/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-[#BAE2FF]",
    "bg-[#B9FFDD]",
    "bg-[#FFE8AC]",
    "bg-[#FFCAB9]",
    "bg-[#F99494]",
    "bg-[#9DD6FF]",
    "bg-[#ECA1FF]",
    "bg-[#DAFF8B]",
    "bg-[#FFA285]",
    "bg-[#CDCDCD]",
    "bg-[#979797]",
    "bg-[#A99A7C]",
    "bg-[#FFFFFF]",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: "1px 1px 3px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
