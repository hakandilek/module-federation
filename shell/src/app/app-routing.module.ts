import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadChildren: () => import('catalog/Module').then(m => m.CatalogModule)
  },
  {
    path: 'cart',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      remoteName: 'cart',
      exposedModule: './element',
      elementName: 'cart-element'
    } as WebComponentWrapperOptions
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
