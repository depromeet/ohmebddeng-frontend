const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const getPackageDir = (_path: string) =>
  path.join(process.cwd(), 'node_modules', _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    });
  },
};
