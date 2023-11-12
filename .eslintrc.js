const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'react/state-in-constructor': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error', // check hook's rule
    'react-hooks/exhaustive-deps': 'warn', // check effect's dependencies
  },
  overrides: [
    {
      files: ['./*.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true, optionalDependencies: true },
        ],
      },
    },
    {
      files: ['**/*.ts?(x)'],
      extends: ['airbnb-typescript'],
      parserOptions: {
        project: path.join(__dirname, './tsconfig.json'),
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
        ],
      },
    },
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { peerDependencies: true },
        ],
        'react/jsx-props-no-spreading': [
          'error',
          {
            html: 'enforce',
            custom: 'ignore',
            explicitSpread: 'enforce',
          },
        ],
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
