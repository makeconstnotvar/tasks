let path = require('path');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: './app/index.js',
    page2: './app/page2.js',
    page3: './app/page3.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app/build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
};