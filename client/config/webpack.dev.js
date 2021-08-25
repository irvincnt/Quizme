const { merge } = require('webpack-merge')
const common = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.(css|sass|scss)$/
      }
    ]
  },
  devtool: 'eval-source-map'
}

module.exports = merge(common, devConfig)
