import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentStudentsComponent } from './agent-students.component';

describe('AgentStudentsComponent', () => {
  let component: AgentStudentsComponent;
  let fixture: ComponentFixture<AgentStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
