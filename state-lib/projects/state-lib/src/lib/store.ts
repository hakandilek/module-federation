import { StoreApi } from "zustand/vanilla";

export interface State {
  count: number;
  addToCart: () => void;
  resetCart: () => void;
}

export function initStore(): (set: any, get: any) => State {
  return (set: StoreApi<State>['setState'], _get: StoreApi<State>['getState']) => ({
    count: 0,
    addToCart: () => {
      console.log(`catalog: store.addToCart()`);
      return set((state: State) => ({ count: state.count + 1 }));
    },
    resetCart: () => {
      console.log(`catalog: store.resetCart()`);
      return set({ count: 0 });
    },
  });
}
