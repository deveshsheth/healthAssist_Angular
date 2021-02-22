import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpharmacyComponent } from './editpharmacy.component';

describe('EditpharmacyComponent', () => {
  let component: EditpharmacyComponent;
  let fixture: ComponentFixture<EditpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
