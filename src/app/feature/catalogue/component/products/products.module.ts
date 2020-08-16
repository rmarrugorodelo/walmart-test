import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductService } from './service/product.service';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipe/image.pipe';


@NgModule({
  declarations: [ProductsComponent, ImagePipe],
  providers: [ProductService],
  exports: [ProductsComponent],
  imports: [CommonModule]
})
export class ProductsModule {}
