const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx'),
    vendor: [
      'react',
      'react-dom',
      'immutable',
      'react-dropzone',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-select',
      'redux',
      'redux-thunk',
      'save-svg-as-png',
      'topojson',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['stage-1', 'es2015', 'react'],
        },
      },
      {
        test: /^((?!\.global).)*css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
      {
        test: /\.global.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
    ],
  },
  resolve: {
    root: path.resolve(__dirname, '../src'),
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, '../node_modules', 'react'),
    },
  },

  plugins: [
    new ExtractTextPlugin('../css/app.bundle.css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
}
