import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { StoreLoaderService } from './store-loader.service';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  }];


@NgModule({
  providers: [
    StoreLoaderService,
  ],
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CatalogComponent,
    RouterModule,
  ]
})
export class CatalogModule { }
