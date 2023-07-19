import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsuccessdialogComponent } from './studentsuccessdialog.component';

describe('StudentsuccessdialogComponent', () => {
  let component: StudentsuccessdialogComponent;
  let fixture: ComponentFixture<StudentsuccessdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsuccessdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsuccessdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
