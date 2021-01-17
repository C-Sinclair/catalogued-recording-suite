import { writable } from "svelte/store";
import { states } from "./states.js";

/**
 * @type {{[keyof states]: boolean}}
 */
const initialState = Object.entries(states).reduce(
  (acc, [n]) => ({ ...acc, [n]: false }),
  {}
);

function createDisplayStore() {
  const { subscribe, set, update } = writable({
    ...initialState,
    /** Show slide up position on first load */
    slideUp: true,
  });

  return {
    subscribe,
    reset: () => set(initialState),
    update,
  };
}

export const display = createDisplayStore();

display.subscribe((state) => {
  Object.entries(state).forEach(([name, value]) => {
    if (value && states[name]) {
      setTimeout(display.reset, states[name].resetTime);
    }
  });
});
