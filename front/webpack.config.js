const path = require("path");

module.exports = {
  entry: {
    index: "./scripts/cards/index.js",
    categoria: "./scripts/category/category.js",
    formMovies: "./scripts/form/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
