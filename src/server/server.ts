import express from "express";
import setupServer from "./setupserver";
import { router } from "./router";

function init() {
    const app = express();
    const server = require("http").createServer(app);
    const io = require("socket.io").listen(server);

    setupServer(io);

    app.use("/", router);

    return server;
}

export let server = init();
