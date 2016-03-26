const path = require('path')

module.exports = {
  entry: {
    main: [path.resolve(__dirname, '../react/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: 'react_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['stage-1', 'es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
