import Express from "express";
import ws from "express-ws";

const PORT = process.env.PORT || 8083;

let overlayConn;

const server = Express();

ws(server);

server.ws("/ws/overlay", (socket) => {
  console.log("Overlay web socket connected");
  overlayConn = socket;
});

server.post("/command/:cmd", (req, res) => {
  const { cmd } = req.params;
  overlayConn.send(cmd);
  res.status(200);
});

server.listen(PORT, () => {
  console.log(`Server ready! on PORT ${PORT}`);
});
