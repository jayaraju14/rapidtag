import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcheklistComponent } from './studentcheklist.component';

describe('StudentcheklistComponent', () => {
  let component: StudentcheklistComponent;
  let fixture: ComponentFixture<StudentcheklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcheklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcheklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
