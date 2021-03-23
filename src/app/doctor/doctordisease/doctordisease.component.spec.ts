import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordiseaseComponent } from './doctordisease.component';

describe('DoctordiseaseComponent', () => {
  let component: DoctordiseaseComponent;
  let fixture: ComponentFixture<DoctordiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctordiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctordiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
