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
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Ismail9K.com',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Ismail9K',
        themeColor: '#3fa66f',
        backgroundColor: '#ffffff',
        icon: './src/assets/img/icon.jpg',
        msTileImage: '',
        msTileColor: '#00aba9',
        gcmSenderId: undefined,
      },
    },
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
