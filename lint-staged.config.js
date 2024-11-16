module.exports = {
  "app/**/*.{js,ts,jsx,tsx,css,mdx}": "prettier --check", // Run prettier on files in the app folder
  "app/**/*.{js,ts,jsx,tsx,mdx}": "eslint --fix", // Run eslint --fix to automatically fix issues
}
