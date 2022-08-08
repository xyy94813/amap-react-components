module.exports = {
  '*.{ts,tsx,js,jsx}': [
    'npx eslint -c .eslintrc.js "src/**/*.{ts,tsx,js,jsx}" --fix',
    'git add',
  ],
};
