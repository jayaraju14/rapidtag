import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeflComponent } from './toefl.component';

describe('ToeflComponent', () => {
  let component: ToeflComponent;
  let fixture: ComponentFixture<ToeflComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToeflComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
