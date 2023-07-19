import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMarketingComponent } from './agent-marketing.component';

describe('AgentMarketingComponent', () => {
  let component: AgentMarketingComponent;
  let fixture: ComponentFixture<AgentMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
