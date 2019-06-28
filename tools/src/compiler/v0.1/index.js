const fs = require("fs");
const path = require("path");
const Terser = require("terser");

const toGameData = source => {
  const sourceFilePath = path.join(source, "sources");

  const sourceFiles = fs.readdirSync(sourceFilePath)

  const sources = sourceFiles.reduce((obj, file) =>
    obj + "\n" +  fs.readFileSync(path.join(sourceFilePath, file), "utf8")
  , "")

  // TODO mangle
  const compiled = Terser.minify(sources).code;

  return compiled;
}

const toFile = (source, dest) => {
  const gameData = toGameData(source);
  fs.writeFileSync(path.join(dest, "game.js"), gameData, "utf8")
}

module.exports = {
  toGameData,
  toFile,
}
