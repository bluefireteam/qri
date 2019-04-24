module.exports = {
  target: "electron-main",
  entry: {
    main: ["./src/index.js"],
    emulator: ["./src/emulator.js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
    ],
  },
};
