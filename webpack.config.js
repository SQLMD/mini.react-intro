const path = require("path");

module.exports = {
  entry: "./index.jsx",
  output: { path: path.resolve(__dirname, "public"), filename: "bundle.js" },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["env", "react"],
        },
      },
      {
        test: /.css?$/,
        loader: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
