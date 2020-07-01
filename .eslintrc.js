module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
      },
    },
  ],
  settings: {
    'import/resolver': {
      /**
       * why use this see issue:
       * https://github.com/benmosher/eslint-plugin-import/issues/1485
       */
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
