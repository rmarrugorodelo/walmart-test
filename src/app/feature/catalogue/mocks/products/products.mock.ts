import { ProductService } from '../../component/products/service/product.service';
import { Product } from '../../component/products/model/product.model';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductsMock {

    public findByParameter(parameter: string): Observable<Array<Product>> {
        const product: Product = {
            description: '',
            price: 40000,
            brand: '',
            image: '',
        };

        const products = [product];

        return of(products);
    }
}