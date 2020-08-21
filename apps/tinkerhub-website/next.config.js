const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  // https://github.com/nrwl/nx/issues/3051
  target: 'experimental-serverless-trace',
};

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
