import { Socket } from "socket.io";
import * as clientEventSetter from "./clienteventsetters";

export function onConnection(io: SocketIO.Server) {
    io.on("connection", (socket: Socket) => {
        clientEventSetter.onJoinGameRoom(io, socket);
        clientEventSetter.onDisconnecting(io, socket);
        clientEventSetter.onNotifyGameUpdate(io, socket);
    });
}
