const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const multer = require("multer");
const cors = require("cors");
const { isAdmin } = require("./middleware/auth");
const rateLimiter = require("./middleware/rateLimiter");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const server = http.createServer(app);
const io = socketIO(server);

// file upload
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req,file,cb)=>{
    cb(null, Date.now()+"-"+file.originalname);
  }
});
const upload = multer({ storage });
app.post("/upload", isAdmin, upload.single("file"), (req,res)=>{
  res.send("File uploaded successfully");
});

//socket connection
io.on("connection",(socket)=>{
  console.log("User Connected");
  socket.on("join",(role)=>{
    socket.role = role;
  });
  socket.on("sendMessage",(msg)=>{
    if(socket.role !== "admin"){
      return;
    }
    // rate limit 
    if(!rateLimiter()) return;

    // Display to all users
    io.emit("receiveMessage", msg);
  });

});
server.listen(3000, ()=>{
  console.log("Server running on http://localhost:3000");
});
