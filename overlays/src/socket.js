import { display } from "./display.js";

export const connect = () => {
  const socket = new WebSocket(`ws://localhost:8083/ws/overlay`);

  socket.addEventListener("open", console.info);
  socket.addEventListener("error", console.error);
  socket.addEventListener("close", console.info);

  socket.addEventListener("message", (msg) => {
    console.log(`received `, msg);
    display.update(handler(msg));
  });
};

const handler = (msg) => (state) => {
  switch (msg.data) {
    case "PLAY_CARROT":
      return { ...state, carrot: true };
    default:
      console.log(`Unhandled msg`, msg);
      return state;
  }
};
