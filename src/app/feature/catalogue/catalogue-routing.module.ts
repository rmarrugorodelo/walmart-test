import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
 {
    path: '',
    component: CatalogueComponent,
    children: [
      {
        path: 'search',
        component: ProductsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule {
}
