import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologydetailsComponent } from './pathologydetails.component';

describe('PathologydetailsComponent', () => {
  let component: PathologydetailsComponent;
  let fixture: ComponentFixture<PathologydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathologydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
