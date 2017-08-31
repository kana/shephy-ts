const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    extensions: [
      '.js',
      '.ts'
    ],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
