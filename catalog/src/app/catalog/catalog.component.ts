import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  count: number;

  constructor() {
    console.log(`catalog: CatalogComponent()`);
    this.count = 0;
  }

  ngOnInit(): void {
    console.log(`catalog: CatalogComponent.ngOnInit()`);
  }

  increment() {
    this.count++;
  }

}
