module.exports = {
  logLevel: "debug",
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  /**
   * storybook with typescript
   * see https://storybook.js.org/docs/configurations/typescript-config/
   */
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
        // Optional
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    });
    config.resolve.extensions.unshift(".ts", ".tsx", ".mdx");
    return config;
  },
};
