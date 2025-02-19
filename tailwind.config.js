module.exports = {
  content: [
    "./index.html", // ✅ Include index.html at root
    "./**/*.{html,js}", // ✅ Scan all HTML & JS files inside subdirectories
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
