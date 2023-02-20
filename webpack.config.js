//the Webpack configuration file that will give the instructions on building the application.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true, // Cache busting
      filename: '../dist/index.html'
    })]
}