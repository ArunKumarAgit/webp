//commonjs importing style
const path = require("path");
//to generate html files automatically
const HtmlWebpackPlugin = require("html-webpack-plugin");
//common js exporting style
module.exports = {
  //entry point path
  entry: "./src/index.js",
  //generating file path
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  //   devServer: {
  //     static: {
  //       directory: "./dist",
  //     },
  //   },
  //   for development purpose only
  devServer: {
    //specify the port nnumber to run
    port: 1000,
    historyApiFallback: true,
    //what exactly this port going to serve and point to output path
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    //which html file should use
    //this files going to save in a memory set to true
    devMiddleware: {
      index: "./public/index.html",
      writeToDisk: true,
    },
  },
  devtool: "eval-source-map",
  //modes
  mode: "development",
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
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) =>
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
        htmlWebpackPlugin.options.title +
        '</title></head><body><div id="root"></div></body></html>',
      filename: "index.html",
      title: "bgv",
    }),
  ],
};
