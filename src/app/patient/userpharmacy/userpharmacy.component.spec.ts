import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpharmacyComponent } from './userpharmacy.component';

describe('UserpharmacyComponent', () => {
  let component: UserpharmacyComponent;
  let fixture: ComponentFixture<UserpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
