const HtmlWebpackPlugin = require('html-webpack-plugin');
const TreatPlugin = require('treat/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');
const process = require('process');

const runningDirectory = process.cwd();

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(runningDirectory, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(runningDirectory, 'dist'),
    inline: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  plugins: [
    new TreatPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Notify me',
      template: path.resolve(runningDirectory, 'static', 'dev', 'index.html'),
    }),
  ],
};
