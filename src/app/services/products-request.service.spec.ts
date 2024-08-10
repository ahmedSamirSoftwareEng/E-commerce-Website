import { TestBed } from '@angular/core/testing';

import { ProductsRequestService } from './products-request.service';

describe('ProductsRequestService', () => {
  let service: ProductsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
