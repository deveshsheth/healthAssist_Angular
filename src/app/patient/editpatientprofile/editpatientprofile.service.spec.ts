import { TestBed } from '@angular/core/testing';

import { EditpatientprofileService } from './editpatientprofile.service';

describe('EditpatientprofileService', () => {
  let service: EditpatientprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditpatientprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
