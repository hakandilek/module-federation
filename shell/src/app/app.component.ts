import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { State, getStateStore } from 'state-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';
  state$: Observable<State>;

  constructor() {
    console.log(`shell: AppComponent()`);
    this.state$ = getStateStore();
  }
}
