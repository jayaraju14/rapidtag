import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesidenavComponent } from './employeesidenav.component';

describe('EmployeesidenavComponent', () => {
  let component: EmployeesidenavComponent;
  let fixture: ComponentFixture<EmployeesidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
