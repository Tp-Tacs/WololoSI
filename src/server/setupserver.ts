import { Socket } from "socket.io";
import * as eventSetter from "./eventsetters";

export default function setupServer(io: SocketIO.Server) {
    io.on("connection", (socket: Socket) => {
        eventSetter.onJoinGameRoom(socket);
        eventSetter.onDisconnecting(socket);
        eventSetter.onNotifyGameUpdate(socket);
    });
}
