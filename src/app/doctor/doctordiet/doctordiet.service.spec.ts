import { TestBed } from '@angular/core/testing';

import { DoctordietService } from './doctordiet.service';

describe('DoctordietService', () => {
  let service: DoctordietService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctordietService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
