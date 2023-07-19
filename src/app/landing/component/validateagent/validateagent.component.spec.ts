import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateagentComponent } from './validateagent.component';

describe('ValidateagentComponent', () => {
  let component: ValidateagentComponent;
  let fixture: ComponentFixture<ValidateagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
