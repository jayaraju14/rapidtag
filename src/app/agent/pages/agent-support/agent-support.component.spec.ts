import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSupportComponent } from './agent-support.component';

describe('AgentSupportComponent', () => {
  let component: AgentSupportComponent;
  let fixture: ComponentFixture<AgentSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
