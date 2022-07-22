const unnamed = require("unnamed-js");

const PORT = process.env.PORT || 8080;
const server = unnamed({ port: PORT });
const { GET } = server;

server.router(require("./routers"));

interface res extends Response {
  send: (str: string) => void;
}

GET("/", (request: Request, response: res) => {
  response.send("Hello world");
});
