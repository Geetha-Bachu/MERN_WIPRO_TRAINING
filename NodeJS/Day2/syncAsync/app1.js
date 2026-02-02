const fs = require("fs");
console.log("start");
const data = fs.readFileSync("bigfile.txt", "utf-8");
console.log("File read complete");
console.log("end");
