var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './client/index.jsx',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,                
        query: {
          presets: ['react']
        }
      }
    ],
  }
}