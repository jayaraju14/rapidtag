import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalbeforeapplyComponent } from './nationalbeforeapply.component';

describe('NationalbeforeapplyComponent', () => {
  let component: NationalbeforeapplyComponent;
  let fixture: ComponentFixture<NationalbeforeapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalbeforeapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalbeforeapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
