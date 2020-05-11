const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const production =
  process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production"
    ? "production"
    : "development";
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: production,
  target: "node",
  entry: "./src/main.ts",
  output: {
    filename: "./main.js",
    path: distPath,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
    plugins: [new TsconfigPathsPlugin()],
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      moduleFilenameTemplate: "[resource-path]",
      noSources: true,
      module: true,
    }),
  ],
};
