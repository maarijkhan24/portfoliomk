const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using the app directory
  ],
  theme: {
    extend: {
      colors: {
        accent: "#08E95E",
      },
    },
  },
  plugins: [require("daisyui")],
};

module.exports = config;
