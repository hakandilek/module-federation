import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  count: number;

  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

}
