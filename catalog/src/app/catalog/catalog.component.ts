import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreLoaderService } from './store-loader.service';

declare type State = typeof import('state/Store');

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  state$: Observable<State>;

  constructor(storeLoader: StoreLoaderService) {
    console.log(`catalog: CatalogComponent()`);
    this.state$ = storeLoader.useStore();
  }

  ngOnInit(): void {
    console.log(`catalog: CatalogComponent.ngOnInit()`);
  }

}
