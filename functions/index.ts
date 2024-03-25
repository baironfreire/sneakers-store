import { Server } from "./src/server";

const server = new Server();
export const app = server.firebaseFunction();