import { TestBed } from '@angular/core/testing';

import { ProblemasApiService } from './problemas-api.service';

describe('ProblemasApiService', () => {
  let service: ProblemasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
