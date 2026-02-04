const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "app.log");

function log(message) {
  const logMsg = `[${new Date().toLocaleString()}] ${message}\n`;
  fs.appendFile(logFile, logMsg, () => {});
}

module.exports = log;
