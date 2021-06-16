const webpack              = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      './src/main.js',
      './src/main.css'
    ]
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/assets`,
    publicPath: '/assets/',
    assetModuleFilename: 'images/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.png$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        config: {
          path: './postcss.config.js'
        }
      }
    }),
    new MiniCSSExtractPlugin({
      filename: 'app.css'
    }),
    new CssMinimizerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname
  }
};
