module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust according to your project
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "synthwave"], // synthwave, etc.
  },
};
