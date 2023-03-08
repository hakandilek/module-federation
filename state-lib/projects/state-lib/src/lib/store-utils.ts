import { Observable, map, distinctUntilChanged } from "rxjs";
import { StoreApi, StateCreator, createStore as createZustandStore } from "zustand";
import { State, initStore } from "./store";

export function useStore<T, S>(store: StoreApi<T>, selector?: (state: T) => S) {
  const state$ = new Observable<T>((subscriber) => {
    subscriber.next(store.getState());
    const unsubscribe = store.subscribe((state) => subscriber.next(state));
    return () => unsubscribe();
  });

  if (!selector) return state$;

  const slice$ = state$.pipe(
    map((state) => selector(state)),
    distinctUntilChanged((prev, current) => prev === current)
  );

  return slice$;
}

export function createStore(): StoreApi<State> {
  return createZustandStore(initStore() as StateCreator<State>);
}

let _stateStore$: Observable<State>;
export function getStateStore(): Observable<State> {
  if (_stateStore$ == undefined) {
    _stateStore$ = useStore(createStore());
  }
  return _stateStore$;
}
