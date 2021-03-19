import { TestBed } from '@angular/core/testing';

import { PatientappointmentService } from './patientappointment.service';

describe('PatientappointmentService', () => {
  let service: PatientappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
