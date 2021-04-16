import { TestBed } from '@angular/core/testing';

import { AdminappointmentService } from './adminappointment.service';

describe('AdminappointmentService', () => {
  let service: AdminappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
