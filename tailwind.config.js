module.exports = {
  mode: "jit",
  purge: {
    content: [
      "components/**/*.vue",
      "content/**/*.md",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: {
          50: "#f7fee7",
          100: "#ecfccb"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
