import { server } from "./server";

const serverPort: number = 8080;

server.listen(serverPort, () => {
    console.log("Server running...");
});
