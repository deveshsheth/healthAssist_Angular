import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologyhomeComponent } from './pathologyhome.component';

describe('PathologyhomeComponent', () => {
  let component: PathologyhomeComponent;
  let fixture: ComponentFixture<PathologyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologyhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathologyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
