import { writable } from "svelte/store";

const initialState = {};

function createDisplayStore() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    reset: () => set(initialState),
    update,
  };
}

export const display = createDisplayStore();

display.subscribe((state) => {
  if (state.carrot) {
    setTimeout(display.reset, 2000);
  }
});
