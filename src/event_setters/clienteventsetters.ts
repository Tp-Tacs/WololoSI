import { Socket } from "socket.io";

function getGameRoom(gameId: string) {
    return "game: " + gameId;
}

export function onDisconnecting(io: SocketIO.Server, socket: Socket) {
    socket.on("disconnecting", () => {
        io.of(socket.nsp.name).send(socket.id + " has disconnected.");
    });
}

export function onJoinGameRoom(_io: SocketIO.Server, socket: Socket) {
    socket.on("joinGameRoom", (gameId: string) => {
        const gameRoom: string = getGameRoom(gameId);
        socket.join(gameRoom);
        socket.to(gameRoom).send(socket.id + " joined the room.");
    });
}

export function onNotifyGameUpdate(_io: SocketIO.Server, socket: Socket) {
    socket.on("notifyGameUpdate", (gameId: string) => {
        socket.to(getGameRoom(gameId)).emit("update");
    });
}
