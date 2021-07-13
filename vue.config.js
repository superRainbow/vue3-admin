const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-admin/' : '/',
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              // eslint-disable-next-line @typescript-eslint/camelcase
              drop_debugger: true,
              // eslint-disable-next-line @typescript-eslint/camelcase
              drop_console: true //生產環境自動刪除console
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true //使用多進程並行運行來提高構建速度。預設並發運行數：os.cpus().length - 1。
        })
      );
    }
  }
};
