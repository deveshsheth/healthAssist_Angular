import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctormedicineComponent } from './doctormedicine.component';

describe('DoctormedicineComponent', () => {
  let component: DoctormedicineComponent;
  let fixture: ComponentFixture<DoctormedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctormedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctormedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
