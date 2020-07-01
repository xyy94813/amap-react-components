module.exports = {
  '*.{ts,tsx,js,jsx}': [
    './node_modules/.bin/eslint -c .eslintrc.js "src/**/*.{ts,tsx,js,jsx}" --fix',
    'git add',
  ],
};
