const fs = require("fs").promises;
const path = require("path");
const appEvents = require("./events");
const log = require("./logger");

async function router(req, res) {
  log(`${req.method} ${req.url}`);


  
  if (req.url === "/") {
    const html = await fs.readFile(path.join(__dirname, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }




  if (req.url === "/health") {
    return res.end("Server is healthy");
  }

  if (req.url.startsWith("/login")) {
    const name = new URL(req.url, "http://localhost").searchParams.get("name");
    appEvents.emit("userLogin", name);
    return res.end(`Login successful for ${name}`);
  }

  if (req.url === "/users") {
    const data = await fs.readFile(path.join(__dirname, "users.json"), "utf-8");
    appEvents.emit("dataFetched");
    return res.end(data);
  }

  res.writeHead(404);
  res.end("Route not found");
}

module.exports = router;
