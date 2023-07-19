import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCommunicationComponent } from './agent-communication.component';

describe('AgentCommunicationComponent', () => {
  let component: AgentCommunicationComponent;
  let fixture: ComponentFixture<AgentCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
