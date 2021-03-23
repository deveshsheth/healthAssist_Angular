import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordietComponent } from './doctordiet.component';

describe('DoctordietComponent', () => {
  let component: DoctordietComponent;
  let fixture: ComponentFixture<DoctordietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctordietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctordietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
