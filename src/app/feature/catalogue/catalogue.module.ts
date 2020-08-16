import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { ProductsModule } from './component/products/products.module';
@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    ProductsModule
  ],
  declarations: [CatalogueComponent],
})
export class CatalogueModule { }
