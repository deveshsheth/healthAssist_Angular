import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdietComponent } from './editdiet.component';

describe('EditdietComponent', () => {
  let component: EditdietComponent;
  let fixture: ComponentFixture<EditdietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
