const http = require("http");
const router = require("./router");


//forward request and response to router.js
const server = http.createServer((req, res) => {
  router(req, res).catch(err => {
    res.writeHead(500);
    res.end("Server error");
  });
});

//server starts on 3000 port
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
