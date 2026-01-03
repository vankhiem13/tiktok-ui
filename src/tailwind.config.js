export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "1.2rem",
        base: "1.6rem",
        lg: "1.8rem",
        xl: "2rem",
        "2xl": "2.4rem",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

  ],
};
