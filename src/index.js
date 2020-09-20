const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const serverPort = 8080;

io.on("connection", (socket) => {
  console.log("Client connected via websocket!");
  io.emit("greeting", "Buen dia :D, soy el socket " + socket.id);
});

app.use(express.static("test_client"));

app.get("/", (_req, res) => {
  res.send("Hola mundo!");
});

server.listen(serverPort, () => {
  console.log("Server online...");
});
