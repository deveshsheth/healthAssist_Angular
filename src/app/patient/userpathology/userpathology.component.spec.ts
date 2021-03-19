import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpathologyComponent } from './userpathology.component';

describe('UserpathologyComponent', () => {
  let component: UserpathologyComponent;
  let fixture: ComponentFixture<UserpathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpathologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
