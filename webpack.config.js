const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app/'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: "babel-loader"
    }]
  },
  mode: 'development'
}