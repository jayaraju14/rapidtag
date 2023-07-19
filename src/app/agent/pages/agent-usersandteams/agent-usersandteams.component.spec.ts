import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentUsersandteamsComponent } from './agent-usersandteams.component';

describe('AgentUsersandteamsComponent', () => {
  let component: AgentUsersandteamsComponent;
  let fixture: ComponentFixture<AgentUsersandteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentUsersandteamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentUsersandteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
