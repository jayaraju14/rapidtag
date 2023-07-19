import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentFinancialComponent } from './agent-financial.component';

describe('AgentFinancialComponent', () => {
  let component: AgentFinancialComponent;
  let fixture: ComponentFixture<AgentFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
