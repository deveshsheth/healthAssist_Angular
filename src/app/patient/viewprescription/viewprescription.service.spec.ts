import { TestBed } from '@angular/core/testing';

import { ViewprescriptionService } from './viewprescription.service';

describe('ViewprescriptionService', () => {
  let service: ViewprescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewprescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
