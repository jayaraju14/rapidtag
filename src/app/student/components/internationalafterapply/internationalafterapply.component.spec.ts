import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalafterapplyComponent } from './internationalafterapply.component';

describe('InternationalafterapplyComponent', () => {
  let component: InternationalafterapplyComponent;
  let fixture: ComponentFixture<InternationalafterapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalafterapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalafterapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
