import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist search field', () => {
    expect( component.searchformGroup.contains('search') ).toBeTruthy();
  });

  it('should call to goProductRoute with parameter string', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const value = 'asda';
    component.searchformGroup.get('search').setValue(value);
    expect( spy ).toHaveBeenCalledWith(['catalogue/search'], { queryParams: { query: value }});
  });

  it('shouldnt call to goProductRoute with parameter string length invalid', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const value = 'as';
    component.searchformGroup.get('search').setValue(value);
    expect( spy ).not.toHaveBeenCalledWith(['catalogue/search'], { queryParams: { query: value }});
  });

  it('should call to goProductRoute with parameter number', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const value = 12;
    component.searchformGroup.get('search').setValue(value);
    expect( spy ).toHaveBeenCalledWith(['catalogue/search'], { queryParams: { query: value }});
  });

});
