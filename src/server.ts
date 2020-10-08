import express from "express";

export default function createServer() {
    const app = express();
    const server = require("http").Server(app);
    const io = require("socket.io")(server);

    io.on("connection", (socket: any) => {
        console.log("Client connected via websocket!");
        io.emit("greeting", "Buen dia :D, soy el socket " + socket.id);
    });

    //app.use("test_client");

    app.get("/", (_req, res) => {
        res.send("Hola mundo!");
    });

    return app;
}
