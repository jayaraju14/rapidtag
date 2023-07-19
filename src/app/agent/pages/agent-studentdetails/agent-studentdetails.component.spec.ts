import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentStudentdetailsComponent } from './agent-studentdetails.component';

describe('AgentStudentdetailsComponent', () => {
  let component: AgentStudentdetailsComponent;
  let fixture: ComponentFixture<AgentStudentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentStudentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentStudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
