import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentregistrationComponent } from './agentregistration.component';

describe('AgentregistrationComponent', () => {
  let component: AgentregistrationComponent;
  let fixture: ComponentFixture<AgentregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
