const express = require("express"); // use express
const app = express(); // create instance of express
const server = require("http").Server(app); // create server
const io = require("socket.io")(server); // create instance of socketio

app.use(express.static("public")); // use "public" directory for static files

io.on("connection", socket => {
  socket.on("joined", () => { 
    
});

server.listen(3000); // run server