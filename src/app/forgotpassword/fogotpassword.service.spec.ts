import { TestBed } from '@angular/core/testing';

import { FogotpasswordService } from './fogotpassword.service';

describe('FogotpasswordService', () => {
  let service: FogotpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FogotpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
