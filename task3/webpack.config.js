let path = require('path');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {index:'./app/index.js'},
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