import { TestBed } from '@angular/core/testing';

import { DoencasApiService } from './doencas-api.service';

describe('DoencasApiService', () => {
  let service: DoencasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoencasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
