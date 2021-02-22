import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordotpComponent } from './resetpasswordotp.component';

describe('ResetpasswordotpComponent', () => {
  let component: ResetpasswordotpComponent;
  let fixture: ComponentFixture<ResetpasswordotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordotpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
