import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminappointmentComponent } from './adminappointment.component';

describe('AdminappointmentComponent', () => {
  let component: AdminappointmentComponent;
  let fixture: ComponentFixture<AdminappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
