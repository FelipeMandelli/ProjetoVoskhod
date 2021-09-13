import { TestBed } from '@angular/core/testing';

import { RegioesApiService } from './regioes-api.service';

describe('RegioesApiService', () => {
  let service: RegioesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegioesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
