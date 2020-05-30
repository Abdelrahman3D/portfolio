// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Ismail9K',
  siteUrl: 'https://ismail9k.com',
  description: 'Abdelrahamn Ismail, personal portfolio webpage.',
  icon: {
    favicon: './src/assets/img/favicon.png',
    touchicon: './src/assets/img/touchicon.png',
  },
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
    // {
    //   use: 'gridsome-plugin-manifest',
    //   options: {
    //     background_color: '#3fa66f',
    //     icon_path: './src/assets/img/icon.png',
    //     name: 'Ismail9K.com',
    //     short_name: '9k',
    //     theme_color: '#3fa66f',
    //     lang: 'en',
    //   },
    // },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-532G58F',
        enabled: true,
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
