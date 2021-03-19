import { TestBed } from '@angular/core/testing';

import { PatientprofileService } from './patientprofile.service';

describe('PatientprofileService', () => {
  let service: PatientprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
