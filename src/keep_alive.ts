import { res } from "./types";

const unnamed = require("unnamed-js");

const PORT = process.env.PORT || 8080;
const server = unnamed({ port: PORT });
const { GET } = server;

server.router(require("./routers"));

GET("/", (request: Request, response: res) => {
  response.send("Hello world");
});
