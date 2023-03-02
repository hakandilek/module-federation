import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../state/state.service';
import { State } from '../state/store';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  state$: Observable<State>;

  constructor(stateService: StateService) {
    console.log(`catalog: CatalogComponent()`);
    this.state$ = stateService.useStore();
  }

  ngOnInit(): void {
    console.log(`catalog: CatalogComponent.ngOnInit()`);
  }

}
