const fs = require("fs");

console.log("start");

fs.readFile("bigfile.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File read complete");
  console.log(data);
});

console.log("end");
