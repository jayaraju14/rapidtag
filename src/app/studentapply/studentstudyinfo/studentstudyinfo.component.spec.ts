import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentstudyinfoComponent } from './studentstudyinfo.component';

describe('StudentstudyinfoComponent', () => {
  let component: StudentstudyinfoComponent;
  let fixture: ComponentFixture<StudentstudyinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentstudyinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentstudyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
