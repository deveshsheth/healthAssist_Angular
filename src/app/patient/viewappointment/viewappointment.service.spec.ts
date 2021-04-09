import { TestBed } from '@angular/core/testing';

import { ViewappointmentService } from './viewappointment.service';

describe('ViewappointmentService', () => {
  let service: ViewappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
