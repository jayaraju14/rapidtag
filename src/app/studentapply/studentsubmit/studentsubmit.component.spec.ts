import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsubmitComponent } from './studentsubmit.component';

describe('StudentsubmitComponent', () => {
  let component: StudentsubmitComponent;
  let fixture: ComponentFixture<StudentsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
