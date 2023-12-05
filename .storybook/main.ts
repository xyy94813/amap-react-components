import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  logLevel: 'debug',
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  /**
   * storybook with typescript
   * see https://storybook.js.org/docs/configurations/typescript-config/
   */
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;