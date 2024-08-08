import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetilesComponent } from './product-detiles.component';

describe('ProductDetilesComponent', () => {
  let component: ProductDetilesComponent;
  let fixture: ComponentFixture<ProductDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
