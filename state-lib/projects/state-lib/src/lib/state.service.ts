import { Injectable } from '@angular/core';
import { Observable, map, distinctUntilChanged } from 'rxjs';
import { createStore, StateCreator, StoreApi } from 'zustand/vanilla';
import { initStore, State } from './store';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private store: StoreApi<State>;

  constructor() {
    console.log(`state-service: StateService()`);
    this.store = createStore(initStore() as StateCreator<State>);
  }

  getState() {
    return this.store.getState();
  }

  setState(payload: Partial<State>) {
    this.store.setState(payload);
  }

  useStore(): Observable<State> {
    console.log(`state-service: useStore()`);
    return useStore(this.store);
  }
}

function useStore<T, S>(store: StoreApi<T>, selector?: (state: T) => S) {
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
