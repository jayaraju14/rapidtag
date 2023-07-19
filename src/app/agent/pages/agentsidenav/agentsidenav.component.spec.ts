import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsidenavComponent } from './agentsidenav.component';

describe('AgentsidenavComponent', () => {
  let component: AgentsidenavComponent;
  let fixture: ComponentFixture<AgentsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
