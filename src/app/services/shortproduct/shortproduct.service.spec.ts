import { TestBed } from '@angular/core/testing';

import { ShortproductService } from './shortproduct.service';

describe('Product1Service', () => {
  let service: ShortproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
