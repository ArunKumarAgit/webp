//commonjs importing style
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//to generate html files automatically
const HtmlWebpackPlugin = require("html-webpack-plugin");
// to seperate css files
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//minification of build files
const TerserPlugin = require("terser-webpack-plugin");
//common js exporting style
module.exports = {
  //entry point path
  entry: "./src/index.js",
  //generating file path
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    // clean: true,
  },
  //modes
  mode: "production",
  devtool: "source-map",
  //rules for loding files and modules
  //1.module is object
  module: {
    //2.rules is array of objects
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "bgv",
      templateContent: ({ htmlWebpackPlugin }) =>
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
        htmlWebpackPlugin.options.title +
        '</title></head><body><div id="root"></div></body></html>',
      filename: "index.html",
    }),
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
