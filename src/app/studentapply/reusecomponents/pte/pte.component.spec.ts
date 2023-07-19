import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PteComponent } from './pte.component';

describe('PteComponent', () => {
  let component: PteComponent;
  let fixture: ComponentFixture<PteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
