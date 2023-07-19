import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprrovalconfirmComponent } from './aprrovalconfirm.component';

describe('AprrovalconfirmComponent', () => {
  let component: AprrovalconfirmComponent;
  let fixture: ComponentFixture<AprrovalconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprrovalconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprrovalconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
