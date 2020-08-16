import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './service/product.service';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from './model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  public $products: Observable<Array<Product>>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.$products = this.search(this.route.queryParams);
  }

  search(terms: Observable<any>) {
    return terms.pipe(debounceTime(400), switchMap(term => this.searchEntries(term.query)));
  }

  searchEntries(parameter) {
    return this.productService.findByParameter(parameter);
  }

}
