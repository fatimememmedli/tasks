const express = require("express");
const app = express();
const port = 3000;
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const server = createServer(app);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("message", (message) => {
    console.log(message, socket.id);
    io.emit("message", message);
  });
});
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
