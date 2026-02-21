export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          to: { backgroundPosition: "0% 0%" },
        },
      },
      animation: {
        shimmer: "shimmer 1s infinite alternate",
      },
      backgroundSize: {
        shimmer: "300% 100%",
      },
    },
  },
  plugins: [],
};
