import express from "express";
import * as eventSetter from "./event_setters/eventsetters";
import { router } from "./router";

function init() {
    const app = express();
    const server = require("http").createServer(app);
    const io = require("socket.io").listen(server);

    eventSetter.onConnection(io);

    app.use("/", router);

    return server;
}

export let server = init();
