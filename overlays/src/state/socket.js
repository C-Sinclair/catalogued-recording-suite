import { display } from "./display.js";
import { statesEntries } from "./states.js";

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

const handler = ({ data }) => (state) =>
  statesEntries.reduce((acc, [name, { msg }]) => {
    if (data === msg) {
      return { ...acc, [name]: true };
    }
    return acc;
  }, state);
