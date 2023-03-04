import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreLoaderService {

  constructor() { }

  useStore(): Observable<any> {
    return from(import('state/Service'))
      .pipe(map(mod => {
        console.log(`val: ${JSON.stringify(mod)}`);
        return mod.StateService;
      })
      ).pipe(map(stateService => stateService.useStore()));
  }

}
