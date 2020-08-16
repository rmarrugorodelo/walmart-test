import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { of } from 'rxjs';
import { ProductService } from './service/product.service';
import { ProductsMock } from '@feature/catalogue/mocks/products/products.mock';
import { ImagePipe } from './pipe/image.pipe';
import { ActivatedRoute } from '@angular/router';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent, ImagePipe ],
      providers: [
        {provide: ProductService, useClass: ProductsMock},
        {provide: ActivatedRoute, useValue: {queryParams: of({query: 'asda'})}},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search entries test',  done => {
    component.searchEntries(of({query: 'asda'})).subscribe(resp => {
      expect(resp).not.toBeUndefined();
      expect(resp.length).toBeGreaterThan(0);
      done();
    });
  });

});
