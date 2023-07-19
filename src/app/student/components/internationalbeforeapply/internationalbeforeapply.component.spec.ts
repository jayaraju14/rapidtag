import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalbeforeapplyComponent } from './internationalbeforeapply.component';

describe('InternationalbeforeapplyComponent', () => {
  let component: InternationalbeforeapplyComponent;
  let fixture: ComponentFixture<InternationalbeforeapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalbeforeapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalbeforeapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
