import { TestBed } from '@angular/core/testing';

import { UserdoctorsService } from './userdoctors.service';

describe('UserdoctorsService', () => {
  let service: UserdoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
