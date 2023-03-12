const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    clean: true,
  },
  mode: process.env.NODE_ENV || "development",
  externals: {
    url: "url",
  },
  target: ["web", "es5"],
  stats: {
    errorDetails: true,
  },
  devtool: "source-map",
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "@riotjs/webpack-loader",
            options: {
              hot: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".riot"],
    fallback: {
      assert: require.resolve("assert/"),
      os: false,
    },
    alias: {
      path: "path-browserify",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
