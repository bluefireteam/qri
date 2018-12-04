const fs = require("fs");
const path = require("path");
const UglifyJS = require("uglify-js");

module.exports = (source, dest) => {
  const sourceFilePath = path.join(source, "sources");

  const sourceFiles = fs.readdirSync(sourceFilePath)

  const sources = sourceFiles.reduce((obj, file) => ({
    [file]: fs.readFileSync(path.join(sourceFilePath, file), "utf8")
  }), {})

  const compiled = UglifyJS.minify(sources)
  if (compiled.error) {
    console.error(compiled.error);
    process.exit(1);
  } else {
    const gameData = compiled.code;
    fs.writeFileSync(path.join(dest, "game.js"), gameData, "utf8")

    console.log("Game compiled")
  }
}
