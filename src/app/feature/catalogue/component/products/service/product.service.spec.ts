import { TestBed, getTestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../model/product.model';
import { environment } from 'src/environments/environment';


describe('ProductService', () => {

  let service: ProductService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const productsMock: Product[] = [
          {
            description: '',
            price: 40000,
            brand: '',
            image: '',
          },
          {
            description: '',
            price: 40000,
            brand: '',
            image: '',
          }
        ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = injector.get(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('findByParameter should return data', () => {
    service.findByParameter('adda').subscribe(products => {
      expect(products.length).toBeGreaterThan(0);
      expect(products).toEqual(productsMock);
    });
    const req = httpMock.expectOne((req) => req.method === 'GET' && req.url === `${environment.URL_API}/products`);
    expect(req.request.method).toBe('GET');
    req.flush(productsMock);
  });

});
