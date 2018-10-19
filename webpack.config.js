const webpack                        = require('webpack');
const ExtracktTextPlugin             = require('mini-css-extract-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./src/main.js', './src/main.css'],
  output: {
    filename: 'app.js',
    path: `${__dirname}/assets`
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
          ExtracktTextPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.png$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        config : {
          path: './postcss.config.js'
        }
      }
    }),
    new ExtracktTextPlugin({
      filename: 'app.css',
      path: `${__dirname}/assets/`
    }),
    new OptimizeCSSAssetsWebpackPlugin()
  ],
  devtool: 'source-map'
};
