import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpagentComponent } from './otpagent.component';

describe('OtpagentComponent', () => {
  let component: OtpagentComponent;
  let fixture: ComponentFixture<OtpagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
