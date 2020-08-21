const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {};

module.exports = withPlugins(
  [
    [
      withImages,
      {
        esModule: true,
      },
    ],
  ],
  nextConfig
);
