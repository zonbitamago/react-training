const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: { app: "./src/index.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public")
  },
  optimization: {
    splitChunks: {
      name: "common",
      chunks: "initial"
    }
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "react"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", { loader: "css-loader", options: { url: false } }]
      }
    ]
  }
};
