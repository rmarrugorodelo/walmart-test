import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../model/product.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

  private readonly url = `${environment.URL_API}/products`;

  constructor(private readonly http: HttpClient) {
  }

  public findByParameter(parameter: string): Observable<Array<Product>> {
    const params = new HttpParams().set('parameter', parameter);
    return this.http.get<Array<Product>>(this.url, {params});
  }

}