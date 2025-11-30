/** @type {import('tailwindcss').Config} */
export default {
  // CRUCIAL: Specifies which files Tailwind should scan for class names
  content: [
    "./index.html",
    // Scans all JavaScript/TypeScript files in the src directory
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}