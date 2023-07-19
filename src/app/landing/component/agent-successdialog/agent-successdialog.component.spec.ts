import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSuccessdialogComponent } from './agent-successdialog.component';

describe('AgentSuccessdialogComponent', () => {
  let component: AgentSuccessdialogComponent;
  let fixture: ComponentFixture<AgentSuccessdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSuccessdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentSuccessdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
