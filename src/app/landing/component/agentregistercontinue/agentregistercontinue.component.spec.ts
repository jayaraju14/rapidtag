import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentregistercontinueComponent } from './agentregistercontinue.component';

describe('AgentregistercontinueComponent', () => {
  let component: AgentregistercontinueComponent;
  let fixture: ComponentFixture<AgentregistercontinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentregistercontinueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentregistercontinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
