const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '../.env.production'),
      safe: true
    })
  ]
}

module.exports = merge(common, prodConfig)
