import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialdocumentationComponent } from './financialdocumentation.component';

describe('FinancialdocumentationComponent', () => {
  let component: FinancialdocumentationComponent;
  let fixture: ComponentFixture<FinancialdocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialdocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialdocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
