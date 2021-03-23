import { TestBed } from '@angular/core/testing';

import { AppointmentstatusService } from './appointmentstatus.service';

describe('AppointmentstatusService', () => {
  let service: AppointmentstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
