var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
    publicPath: '/client/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'client/src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    filename: 'bundle.js',
    contentBase: [path.join(__dirname, 'public')],
    port: 3000
  }
};
