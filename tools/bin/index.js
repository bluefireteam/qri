const { current: compiler } = require("../src/compiler")

const dest = process.argv[2]

compiler("./", dest);
