// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const path = require('path');

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: {
          /* Options for `pug-plain-loader` */
        },
        pugLoader: {
          /* Options for `pug-loader` */
        },
      },
    },
  ],
  css: {
    loaderOptions: {
      stylus: {
        test: /\.styl$/,
        loader: 'stylus-loader',
      },
    },
  },
};
