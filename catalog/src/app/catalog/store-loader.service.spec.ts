import { TestBed } from '@angular/core/testing';

import { StoreLoaderService } from './store-loader.service';

describe('StoreLoaderService', () => {
  let service: StoreLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
