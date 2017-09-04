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
    publicPath: '.',
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
            js: 'ts-loader!tslint-loader'
          }
        }
      },
      {
        test: /components\/.*\.html$/,
        loader: 'vue-template-loader'
      },
      {
        enforce: 'post',
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules']
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
      '.ts',
      '.vue'
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
