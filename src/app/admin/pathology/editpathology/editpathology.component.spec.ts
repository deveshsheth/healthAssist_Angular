import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpathologyComponent } from './editpathology.component';

describe('EditpathologyComponent', () => {
  let component: EditpathologyComponent;
  let fixture: ComponentFixture<EditpathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpathologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
