const express = require("express");
const app = express();
const io = require("socket.io");

const serverPort = 8080;

app.get("/", (_req, res) => {
  res.send("Hola mundo!");
});

app.listen(serverPort, () => {
  console.log("Server online...");
});
