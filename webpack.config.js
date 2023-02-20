//the Webpack configuration file that will give the instructions on building the application.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(ts|tsx)?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.json', ".tsx"]
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true
    },
    plugins: [new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true, // Cache busting
      filename: '../dist/index.html'
    })]
}