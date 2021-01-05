const path = require('path');

const vueSrc = './src';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-tailwind-webpack/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, vueSrc),
      },
    },
  },
};
