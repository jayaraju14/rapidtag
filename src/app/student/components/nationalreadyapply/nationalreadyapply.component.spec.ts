import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalreadyapplyComponent } from './nationalreadyapply.component';

describe('NationalreadyapplyComponent', () => {
  let component: NationalreadyapplyComponent;
  let fixture: ComponentFixture<NationalreadyapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalreadyapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalreadyapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
