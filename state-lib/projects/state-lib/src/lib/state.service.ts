import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreApi } from 'zustand/vanilla';
import { State, } from './store';
import { createStore, useStore } from './store-utils';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private store: StoreApi<State>;

  constructor() {
    console.log(`state-service: StateService()`);
    this.store = createStore()
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
