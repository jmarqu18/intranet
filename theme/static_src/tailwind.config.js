const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "../templates/**/*.html",
    "../../templates/**/*.html",
    "../../**/templates/**/*.html",
    "../../**/*.py", // Uncomment if you use Tailwind classes in Python files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0077C2",
          200: "#59a5f5",
          300: "#c8ffff",
        },
        accent: {
          100: "#00BFFF",
          200: "#00619a",
        },
        text: {
          100: "#333333",
          200: "#5c5c5c",
        },
        bg: {
          100: "#FFFFFF",
          200: "#f5f5f5",
          300: "#cccccc",
        },
        lochmara: {
          50: "#f0f8ff",
          100: "#e0f1fe",
          200: "#b9e3fe",
          300: "#7ccdfd",
          400: "#36b5fa",
          500: "#0c9ceb",
          600: "#0077c2",
          700: "#0161a3",
          800: "#065386",
          900: "#0b456f",
          950: "#072c4a",
        },
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        heading: ["Montserrat Alternates", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
