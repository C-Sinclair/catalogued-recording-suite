import Express from "express";
import ws from "express-ws";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 8083;

let overlayConn;

const server = Express();

ws(server);

server.use(
  "/overlay",
  Express.static(path.join(__dirname, "../", "../", "overlays", "build"))
);

server.ws("/ws/overlay", (socket) => {
  console.log("Overlay web socket connected");
  overlayConn = socket;
});

server.post("/command/:cmd", (req, res) => {
  const { cmd } = req.params;
  overlayConn.send(cmd);
  res.status(200);
});

server.use(
  Express.static(path.join(__dirname, "../", "../", "controller", "build"))
);

server.listen(PORT, () => {
  console.log(`Server ready! on PORT ${PORT}`);
});
