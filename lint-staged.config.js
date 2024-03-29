module.exports = {
  '*.{md,mdx,xml,html,json,yaml,graphql}': 'prettier --write',
  '*.{ts,tsx,js,jsx}': [
    'npx eslint -c .eslintrc.js "src/**/*.{ts,tsx,js,jsx}" --fix',
    'git add',
  ],
};
