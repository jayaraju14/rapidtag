import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityselectionComponent } from './universityselection.component';

describe('UniversityselectionComponent', () => {
  let component: UniversityselectionComponent;
  let fixture: ComponentFixture<UniversityselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
