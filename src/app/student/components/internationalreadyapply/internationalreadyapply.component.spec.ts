import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalreadyapplyComponent } from './internationalreadyapply.component';

describe('InternationalreadyapplyComponent', () => {
  let component: InternationalreadyapplyComponent;
  let fixture: ComponentFixture<InternationalreadyapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalreadyapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalreadyapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
