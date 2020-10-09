import { server } from "./server/server";
import serverConfig from "./serverconfig.json";

const serverPort: number = serverConfig.port;

server.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}...`);
});
