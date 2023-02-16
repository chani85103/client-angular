import { TestBed } from '@angular/core/testing';

import { HmoServiceService } from './hmo-service.service';

describe('HmoServiceService', () => {
  let service: HmoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
