import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientprofileComponent } from './editpatientprofile.component';

describe('EditpatientprofileComponent', () => {
  let component: EditpatientprofileComponent;
  let fixture: ComponentFixture<EditpatientprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpatientprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpatientprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
