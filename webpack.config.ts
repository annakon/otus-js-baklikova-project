import "webpack-dev-server";
import { resolve } from "node:path";
import * as webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const NODE_ENV = process.env.NODE_ENV as
| 'development'
| 'production'
| undefined;

const PREFIX='/otus-js-baklikova-project';

const config: webpack.Configuration = {
  entry: { main: "./src/index.tsx" },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
    publicPath: NODE_ENV=='development'?'/':PREFIX,
    // assetModuleFilename: 'images/[name][ext]'
  },
  devtool: NODE_ENV === "development" ? "eval-source-map" : "source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "404.html"
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: NODE_ENV=='production',
      PREFIX: JSON.stringify(PREFIX)
    })
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ["*.html"],
    historyApiFallback: true,
  },
  experiments: {
    topLevelAwait: true,
  },
};

export default config;
