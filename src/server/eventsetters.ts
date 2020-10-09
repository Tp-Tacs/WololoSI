import { Socket } from "socket.io";

function getGameRoom(gameId: string) {
    return "game: " + gameId;
}

export function onDisconnecting(socket: Socket) {
    socket.on("disconnecting", () => {
        socket.broadcast.send(socket.id + " has disconnected.");
    });
}

export function onJoinGameRoom(socket: Socket) {
    socket.on("joinGameRoom", (gameId: string) => {
        const gameRoom: string = getGameRoom(gameId);
        socket.join(gameRoom);
        socket.to(gameRoom).send(socket.id + " joined the room.");
    });
}

export function onNotifyGameUpdate(socket: Socket) {
    socket.on("notifyGameUpdate", () => {
        socket.nsp.emit("update");
    });
}