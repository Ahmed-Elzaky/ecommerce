const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {

  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },

  // mode: 'development',

  devServer: {

    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: true
    }


  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
          options: {
            minimize: false,
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          }
        ]
      },
      {},
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'

    }),

    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),

    new CssMinimizerWebpackPlugin({}),

  ],



};