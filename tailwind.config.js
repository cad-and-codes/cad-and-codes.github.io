// Tailwind CSS configuration file
module.exports = {
  // Define file paths for Tailwind to scan for class names
  content: [
    "./index.html", // Main HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}" // All Vue, JS, TS, JSX, and TSX files in the src folder and its subfolders
  ],
  // Customize the default Tailwind theme
  theme: {
    extend: {
      // Add custom utilities or overridden default settings here
    },
  },
  // Add plugins to extend Tailwind functionality. E.g., forms, typography, etc.
  plugins: [],
};