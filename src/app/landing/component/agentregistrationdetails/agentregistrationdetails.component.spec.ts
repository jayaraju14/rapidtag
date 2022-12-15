import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentregistrationdetailsComponent } from './agentregistrationdetails.component';

describe('AgentregistrationdetailsComponent', () => {
  let component: AgentregistrationdetailsComponent;
  let fixture: ComponentFixture<AgentregistrationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentregistrationdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentregistrationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
