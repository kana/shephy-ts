const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '', // relative to HTML page ('.' doesn't work with HMR)
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        options: {
          configFile: 'tslint.json',
          typeCheck: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // typeCheck should be turned on for several rules.
            // But it's not easy to do so for *.vue.
            js: 'ts-loader!tslint-loader?configFile=tslint.json&typeCheck=true'
          }
        }
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
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
