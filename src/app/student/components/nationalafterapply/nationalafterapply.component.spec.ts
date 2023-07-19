import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalafterapplyComponent } from './nationalafterapply.component';

describe('NationalafterapplyComponent', () => {
  let component: NationalafterapplyComponent;
  let fixture: ComponentFixture<NationalafterapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalafterapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalafterapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
