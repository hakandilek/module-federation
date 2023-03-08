import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State, getStateStore } from 'state-lib';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  state$: Observable<State>;

  constructor() {
    console.log(`catalog: CatalogComponent()`);
    this.state$ = getStateStore();
  }

  ngOnInit(): void {
    console.log(`catalog: CatalogComponent.ngOnInit()`);
  }

}

