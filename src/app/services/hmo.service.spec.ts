import { TestBed } from '@angular/core/testing';

import { HmoService } from './hmo.service';

describe('HmoService', () => {
  let service: HmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
