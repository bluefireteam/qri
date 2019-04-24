const { current: compiler } = require("../src/compiler")

const dest = process.argv[2]

try {
  compiler.toFile("./", dest);
  console.log("Game compiled")
  process.exit(0)
} catch(e) {
  console.error(e);
  process.exit(1);
}
