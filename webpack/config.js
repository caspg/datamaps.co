const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  entry: {
    old_react_bundle: path.resolve(__dirname, '../react/index.js'),
    react_bundle: path.resolve(__dirname, '../src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].js',
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
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
    new ExtractTextPlugin('../css/react_bundle.css', { allChunks: true }),
  ],
};
