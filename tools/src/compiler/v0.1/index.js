const fs = require("fs");
const path = require("path");

const toGameData = source => {
  const sourceFilePath = path.join(source, "sources");

  const sourceFiles = fs.readdirSync(sourceFilePath)

  const sources = sourceFiles.reduce((obj, file) => 
    obj + "\n" +  fs.readFileSync(path.join(sourceFilePath, file), "utf8")
  , "")

  //const sources = sourceFiles.reduce((obj, file) => ({
  //  [file]: fs.readFileSync(path.join(sourceFilePath, file), "utf8")
  //}), {})

  // TODO Uglify does not support been bundled with webpack, we need to find an alternative :(
  const compiled = sources//UglifyJS.minify(sources)
  //if (compiled.error) {
  //  throw compiled.error;
  //}

  //return compiled.code;
  return sources;
}

const toFile = (source, dest) => {
  const gameData = toGameData(source);
  fs.writeFileSync(path.join(dest, "game.js"), gameData, "utf8")
}

module.exports = {
  toGameData,
  toFile,
}
