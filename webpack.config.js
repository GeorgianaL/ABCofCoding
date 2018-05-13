const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "react-blockly-component.js",
    libraryTarget: "var",
    library: "ReactBlocklyComponent"
  },
  devtool: 'source-map',
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
          query: {
              presets: ['es2015', 'react'],
              plugins: ["transform-class-properties"]
          },
        },
        {
          test: /\.(png|jpg|mp4)$/,
          exclude: '/node_modules/',
          loader: "file-loader"
        },
        {
          test: /\.(css|sass|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
          })
        }
      ]
    },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new ExtractTextPlugin("[name].css")
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './public',
    filename: 'react-blockly-component.js'
  }
};
