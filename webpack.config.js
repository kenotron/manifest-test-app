const HtmlWebpackPlugin = require('html-webpack-plugin');
process.env.NODE_ENV = 'development';

module.exports = {
  entry: './src/index',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/index.html',
    })
  ],
  mode: process.env.NODE_ENV,
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  output: {
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx|mjs)$/,
        include: /src/,
        loader: "babel-loader",
        options: {
          compact: true
        }
      }
    ]
  }
};
